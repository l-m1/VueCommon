var name = 'lisa';
var age = 18;
var flag = true;
function sum(num1,num2) {
     return num1 + num2
}

if(flag){
    console.log(sum(10,20));
}

/* 导出 方法一  
export{
    flag,sum,name
}
*/

/*导出 方法二
export var num1 = 1000;
export var height = 1.88;
*/

/* 导出 方法三 */
/* 导出函数 */
export function mul(num1,num2){
    return num1 * num2
}

/* 导出类 ES6中的类 */
export class Person {
    name='张三';
    run() {
        console.log("我在奔跑");
    }
}

/* dafault默认值 */
const address = '北京市'
 export default address