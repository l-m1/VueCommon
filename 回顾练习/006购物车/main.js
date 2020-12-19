const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
            id: 1,
            name: '《算法导论》',
            data: '2006-9',
            price: 85.00,
            count: 1
        },
        {
            id: 2,
            name: '《UNIX编程艺术》',
            data: '2006-2',
            price: 59.00,
            count: 1
        },
        {
            id: 3,
            name: '《编程珠玑》',
            data: '2008-10',
            price: 39.00,
            count: 1
        },
        {
            id: 4,
            name: '《代码大全》',
            data: '2006-3',
            price: 128.00,
            count: 1
        },
    ]
    },
    methods: {
        decrement(index) {
            return this.books[index].count--
        },
        increment(index) {
            return this.books[index].count++
        },
        remove(index) {
            return this.books.splice(index,1)
        }
    },
    computed: {
        allprice(index) {
            let sumprice = 0;
            for(let i=0;i<this.books.length;i++){
                sumprice += this.books[i].price * this.books[i].count
            }
            return sumprice
        }
    },
    filters: {
        getprice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})