const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2006-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }]
    },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        remove(index) {
            this.books.splice(index,1)
        }
    },
    computed: {
        result() {
            let sumPrice = 0;
            /* for(let i=0;i<this.books.length;i++){
                sumPrice += this.books[i].price * this.books[i].count
            }
            return sumPrice */
            /* for(let i in this.books){
                const book = this.books[i]
                sumPrice += book.price * book.count
            } */
            for(let item of this.books){
                sumPrice += item.price * item.count
            }
            return sumPrice
        }
    },
    filters: {
        getFullprice(price){
            return '￥' + price.toFixed(2)
        }
    }
})



//编程范式：命令式编程/声明式编程  
//编程范式：面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)  
//1.需求：取出所有小于100的数字
const nums = [10,20,111,222,444,40,50]
let newnums1 = []
for(let i=0;i<nums.length;i++){
    if(nums[i]<100){
        newnums1.push(nums[i])
    }
}
console.log(newnums1);
//2.需求：将所有小于100的数字进行转化：全部*2 
let newnums2 = []
for(let i=0;i<newnums1.length;i++){
    newnums2.push(newnums1[i]*2)
}
console.log(newnums2);
//3.需求：将所有2中的数字相加，得到最终结果
let total = 0  //变量要用let定义
for(let i=0;i<newnums2.length;i++){
    total += newnums2[i]
}
console.log(total);