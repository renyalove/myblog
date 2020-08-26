(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{514:function(t,e,n){"use strict";n.r(e);var a=n(4),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"设计模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),n("p",[t._v("设计模式有许多种，这里挑出几个常用的：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("设计模式")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("例子")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("单例模式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("一个类只能构造出唯一实例")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Redux/Vuex的store")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("工厂模式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("对创建对象逻辑的封装")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("jQuery的$(selector)")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("观察者模式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("当一个对象被修改时，会自动通知它的依赖对象")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Redux的subscribe、Vue的双向绑定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("装饰器模式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("对类的包装，动态地拓展类的功能")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("React高阶组件、ES7 装饰器")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("适配器模式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("兼容新旧接口，对类的包装")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("封装旧API")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("代理模式")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("控制对象的访问")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("事件代理、ES6的Proxy")])])])]),t._v(" "),n("h2",{attrs:{id:"_1-介绍一下单一职责原则和开放封闭原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍一下单一职责原则和开放封闭原则"}},[t._v("#")]),t._v(" 1. 介绍一下单一职责原则和开放封闭原则")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("单一职责原则")]),t._v("：一个类只负责一个功能领域中的相应职责，或者可以定义为：就一个类而言，应该只有一个引起它变化的原因。")]),t._v(" "),n("li",[n("strong",[t._v("开放封闭原则")]),t._v("：核心的思想是软件实体（类、模块、函数等）是可扩展的、但不可修改的。也就是说,对扩展是开放的,而对修改是封闭的。")])]),t._v(" "),n("h2",{attrs:{id:"_2-单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-单例模式"}},[t._v("#")]),t._v(" 2. 单例模式")]),t._v(" "),n("p",[t._v("单例模式即一个类只能构造出唯一实例，单例模式的意义在于"),n("strong",[t._v("共享、唯一")]),t._v("，"),n("code",[t._v("Redux/Vuex")]),t._v("中的store、"),n("code",[t._v("JQ")]),t._v("的$或者业务场景中的购物车、登录框都是单例模式的应用")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class SingletonLogin {\n  constructor(name,password){\n    this.name = name\n    this.password = password\n  }\n  static getInstance(name,password){\n    //判断对象是否已经被创建,若创建则返回旧对象\n    if(!this.instance)this.instance = new SingletonLogin(name,password)\n    return this.instance\n  }\n}\n \nlet obj1 = SingletonLogin.getInstance('CXK','123')\nlet obj2 = SingletonLogin.getInstance('CXK','321')\n \nconsole.log(obj1===obj2)    // true\nconsole.log(obj1)           // {name:CXK,password:123}\nconsole.log(obj2)           // 输出的依然是{name:CXK,password:123}\n \n")])])]),n("h2",{attrs:{id:"_3-工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-工厂模式"}},[t._v("#")]),t._v(" 3. 工厂模式")]),t._v(" "),n("p",[t._v("工厂模式即对创建对象逻辑的封装，或者可以简单理解为对"),n("code",[t._v("new")]),t._v("的封装，这种封装就像创建对象的工厂，故名工厂模式。工厂模式常见于大型项目，比如JQ的$对象，我们创建选择器对象时之所以没有new selector就是因为$()已经是一个工厂方法，其他例子例如"),n("code",[t._v("React.createElement()")]),t._v("、"),n("code",[t._v("Vue.component()")]),t._v("都是工厂模式的实现。工厂模式有多种："),n("code",[t._v("简单工厂模式")]),t._v("、"),n("code",[t._v("工厂方法模式")]),t._v("、"),n("code",[t._v("抽象工厂模式")]),t._v("，这里只以简单工厂模式为例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class User {\n  constructor(name, auth) {\n    this.name = name\n    this.auth = auth\n  }\n}\n\nclass UserFactory {\n  static createUser(name, auth) {\n    //工厂内部封装了创建对象的逻辑:权限为admin时,auth传1,而使用者在外部创建对象时,不需要知道admin对应哪个字段\n    if(auth === 'admin')  new User(name, 1)\n    if(auth === user)  new User(name, 2)\n  }\n}\n\nconst admin = UserFactory.createUser('admin');\nconst user = UserFactory.createUser('user');\n \n")])])]),n("h2",{attrs:{id:"_4-观察者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-观察者模式"}},[t._v("#")]),t._v(" 4. 观察者模式")]),t._v(" "),n("p",[t._v("观察者模式算是前端最常用的设计模式了，观察者模式概念很简单：观察者监听被观察者的变化，被观察者发生改变时，通知所有的观察者。观察者模式被广泛用于监听事件的实现，有关观察者模式的详细应用，可以看我另一篇讲解"),n("a",{attrs:{href:"https://juejin.im/post/5def4831e51d45584b585000#heading-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux实现的文章"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//观察者\nclass Observer {    \n  constructor (fn) {      \n    this.update = fn    \n  }\n}\n//被观察者\nclass Subject {    \n    constructor() {        \n        this.observers = []          //观察者队列 \n    }    \n    addObserver(observer) {          \n        this.observers.push(observer)//往观察者队列添加观察者 \n    }    \n    notify() {                       //通知所有观察者,实际上是把观察者的update()都执行了一遍 \n        this.observers.forEach(observer => {        \n            observer.update()            //依次取出观察者,并执行观察者的update方法 \n        })    \n    }\n}\n\nvar subject = new Subject()       //被观察者\nconst update = () => {console.log('被观察者发出通知')}  //收到广播时要执行的方法\nvar ob1 = new Observer(update)    //观察者1\nvar ob2 = new Observer(update)    //观察者2\nsubject.addObserver(ob1)          //观察者1订阅subject的通知\nsubject.addObserver(ob2)          //观察者2订阅subject的通知\nsubject.notify()                  //发出广播,执行所有观察者的update方法\n \n")])])]),n("p",[t._v("有些文章也把观察者模式称为发布订阅模式，其实二者是有所区别的，发布订阅相较于观察者模式多一个调度中心。")]),t._v(" "),n("h2",{attrs:{id:"_5-装饰器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-装饰器模式"}},[t._v("#")]),t._v(" 5. 装饰器模式")]),t._v(" "),n("p",[t._v("装饰器模式，可以理解为对类的一个包装，动态地拓展类的功能，ES7的"),n("code",[t._v("装饰器")]),t._v("语法以及React中的"),n("code",[t._v("高阶组件")]),t._v("（HoC）都是这一模式的实现。react-redux的connect()也运用了装饰器模式，这里以ES7的装饰器为例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function info(target) {\n  target.prototype.name = '张三'\n  target.prototype.age = 10\n}\n\n@info\nclass Man {}\n\nlet man = new Man()\nman.name // 张三\n \n")])])]),n("h2",{attrs:{id:"_6-适配器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-适配器模式"}},[t._v("#")]),t._v(" 6. 适配器模式")]),t._v(" "),n("p",[t._v("适配器模式，将一个接口转换成客户希望的另一个接口，使接口不兼容的那些类可以一起工作。我们在生活中就常常有使用适配器的场景，例如出境旅游插头插座不匹配，这时我们就需要使用转换插头，也就是适配器来帮我们解决问题。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Adaptee {\n  test() {\n      return '旧接口'\n  }\n}\n \nclass Target {\n  constructor() {\n      this.adaptee = new Adaptee()\n  }\n  test() {\n      let info = this.adaptee.test()\n      return `适配${info}`\n  }\n}\n \nlet target = new Target()\nconsole.log(target.test())\n \n")])])]),n("h2",{attrs:{id:"_7-代理模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-代理模式"}},[t._v("#")]),t._v(" 7. 代理模式")]),t._v(" "),n("p",[t._v("代理模式，为一个对象找一个替代对象，以便对原对象进行访问。即在访问者与目标对象之间加一层代理，通过代理做授权和控制。最常见的例子是经纪人代理明星业务，假设你作为一个投资者，想联系明星打广告，那么你就需要先经过代理经纪人，经纪人对你的资质进行考察，并通知你明星排期，替明星本人过滤不必要的信息。事件代理、"),n("code",[t._v("JQuery的$.proxy")]),t._v("、ES6的"),n("code",[t._v("proxy")]),t._v("都是这一模式的实现，下面以ES6的proxy为例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const idol = {\n  name: 'sera',\n  phone: 10086,\n  price: 1000000  //报价\n}\n\nconst agent = new Proxy(idol, {\n  get: function(target) {\n    //拦截明星电话的请求,只提供经纪人电话\n    return '经纪人电话:10010'\n  },\n  set: function(target, key, value) {\n    if(key === 'price' ) {\n      //经纪人过滤资质\n      if(value < target.price) throw new Error('报价过低')\n      target.price = value\n    }\n  }\n})\n\nagent.phone        //经纪人电话:10010\nagent.price = 100  //Uncaught Error: 报价过低\n \n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);