# Promise
手写一个简易Promise

版本1的预览链接：https://haxiedaimala.github.io/Promise/step0/index-v1.html

版本2的预览链接：https://haxiedaimala.github.io/Promise/step1/index.html





这部分使用promise异步处理请求

# 使用promise的三大要点：
1. 写一个函数封装 
2. 封装函数里返回的是一个new Promise对象  
3. 这个promise对象的参数是两个，resolve（处理正常请求成功时的操作） reject（处理请求出现问题时的操作）
    
    
# 手写简易的Promise：
1. 正常去写使用Promise异步处理去发送ajax请求的getWeather函数
2. 调用这个getWeather函数
3. 调用的时候进入getWeather函数内部，返回一个promise对象，对象参数是函数，需要立即执行这个函数，

    ∴需要构造一个promise函数，传递参数是fn，立即执行fn
    
    ∵函数有两个参数resolve reject，因此构造函数里也需要两个参数，这两个参数分别是两个方法
    
4. 正常去利用ajax发布请求，这个时候请求还没有到达，没有执行onload函数，会退出getWeather函数，返回promise对象
5. 在到达执行getWeather这里，此时这里是一个promise对象，直接使用then方法，里面是两个参数函数，一个是成功时执行的函数，一个失败时执行的函数

    ∴ 需要在构造promise函数里，写下一个then方法，将两个函数参数传过去
    
    ∴需要在构造函数内容提前声明success=null fail=null
    
6. 等待请求响应，返回后，进行onload函数，这个时候成功执行resolve，失败执行reject

    ∴resolve / reject方法里面需要分别执行不同状态下success / fail函数
    
    ∵promise构造函数有1个状态属性state，分别有三个属性值 pendding fulfilled  rejected
    
    ∴提前定义state=pedding  执行resolve时，改变状态，执行reject也改变状态
    
7. 因为要进行异步等操作，需要将resolve reject方法里面，写在setTimeOut延迟里
8. 注意setTimeout函数会改变this指向，因为在设置resolve reject函数的使用时，要注意bind（this）
