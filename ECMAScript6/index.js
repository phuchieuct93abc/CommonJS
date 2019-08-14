requirejs(['./subModule'], function (subModule) {
    subModule.sayHello(); //Node: "Hello"
    // subModule.privateMethod();
});