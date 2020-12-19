/* 导入 方法一
import {flag,sum,name} from './aaa.js'


if(flag){
    console.log(sum(100,200));
}
 */

/* 导入 方法二 
import {num1,height} from './aaa.js'
console.log(num1);
console.log(height);
*/

/* 导入 方法三 */
import {mul , Person} from './aaa.js'

console.log(mul(10,30));

/*通过new关键字创建Person  */
const p = new Person();
console.log(p.name);
p.run()  //使用Person里面的run方法

import addr from './aaa.js'
console.log(addr);