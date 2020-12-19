/* 小红编写的代码 */
var moduleA = (function(){  //moduleA用来接收 return的obj
    //导出的对象
    var obj = {
    }
    var flag = true;
    function sum(num1,num2){
        return num1 + num2;
    }

    if(flag){
        console.log(sum(10,30));
    }

    obj.flag = flag;
    obj.sum = sum; 


    return obj
})()
