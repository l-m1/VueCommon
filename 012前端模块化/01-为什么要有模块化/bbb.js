/* 小明编写的代码 */

var moduleB = (function(){
    var flag = false;
    var age = 18;
    var obj = {};
    if(!flag){
        console.log("hello 小明");
    }
    obj.age = age;
    obj.flag = flag;

    return obj
})()