(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(t,v,_){t.exports=_.p+"assets/img/af539b94085ce4ce.c0e4c94a.png"},202:function(t,v,_){"use strict";_.r(v);var s=_(0),p=Object(s.a)({},function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("React 的优势")])]),t._v(" "),s("p",[t._v("1.提升开发效率、代码可维护性和可阅读性增强")]),t._v(" "),s("p",[t._v("2.减少重绘次数(将多次数据操作汇集成一次 DOM 更新)")]),t._v(" "),s("p",[t._v("3.减少手动操作 DOM 操作(不用再像以前写 jQuery 那样，先获取 DOM 元素，再设置属性)")]),t._v(" "),s("p",[t._v("4.以框架规范代码，使项目工程化，提高可维护性")]),t._v(" "),s("p",[t._v("5.操作 data，与其说是管理 data 的状态，从整个组件生命周期角度出发，可以更好地维护我们的代码")]),t._v(" "),s("p",[t._v("6.因为搜索引擎的爬虫程序依赖的是服务端响应而不是 JavaScript 的执行，预渲染你的应用有助于搜索引擎优化")]),t._v(" "),s("p",[t._v("7.虚拟 DOM，高效速度快，跨浏览器兼容")]),t._v(" "),s("p",[s("strong",[t._v("Jsx 本质")])]),t._v(" "),s("p",[t._v("1.jsx 其实是语法糖,需要被解析成 js 才能运行")]),t._v(" "),s("p",[t._v("2.开发环境会将 jsx 编译成 js 代码")]),t._v(" "),s("p",[t._v("3.JSX 是 React 引入的，但不是 React 独有的")]),t._v(" "),s("p",[t._v("4.React.createElement 是核心函数，相当于 vdom 内的 h 函数")]),t._v(" "),s("p",[s("strong",[t._v("什么是元素")])]),t._v(" "),s("p",[t._v("React 元素其实就是一个简单 JavaScript 对象，一个 React 元素和界面上的一部分 DOM 对应，描述了这部分 DOM 的结构及渲染效果。")]),t._v(" "),s("p",[t._v("模块与组件以及模块化与组件化")]),t._v(" "),s("p",[t._v("模块：向外提供特定功能的 JS 文件，便于复用 JS，简化 JS，提升 JS 效率")]),t._v(" "),s("p",[t._v("组件：用来实现特定布局功能效果的代码与资源集合，包含 html、css、js、图片资源等，例如一个页面中头部区域的资源集合")]),t._v(" "),s("p",[t._v("模块化：形容项目编码方式，即按模块编写与组织的项目")]),t._v(" "),s("p",[t._v("组件化：形容项目的编码方式，即按组件方式编写实现的项目")]),t._v(" "),s("p",[s("strong",[t._v("定义组件")])]),t._v(" "),s("p",[t._v("方式 1：工厂函数组件（一种简单组件：没有状态的组件）")]),t._v(" "),s("p",[t._v("方式 2：ES6 类组件（一种复杂组件：有状态的组件）")]),t._v(" "),s("p",[s("strong",[t._v("初始化状态")])]),t._v(" "),s("p",[t._v("（1）在组件的 constructor 中")]),t._v(" "),s("p",[t._v("注：在 constructor 中不要忘记使用 super(props)来调用父类的 constructor。默认的 constructor（当创建一个 class 时，如果我们没有显式的声明 constructor，JS 会默认提供一个）会自动调用 super，将将所有的参数传入")]),t._v(" "),s("p",[t._v("（2）直接在 class 中利用属性赋值的方式")]),t._v(" "),s("p",[t._v("注：没有定义 constructor")]),t._v(" "),s("p",[t._v("state 属性是直接引用的，并不是通过 this.state 来引用的")]),t._v(" "),s("p",[t._v("state 的作用域是在 Class 内部，并不是一个方法的内部")]),t._v(" "),s("p",[t._v("仍然可以使用 this.props 和 this.context")]),t._v(" "),s("p",[t._v("state 是 class 的实例属性，并不是静态属性，不需要添加 static 关键字（就像为 static propTypes {...}）")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("定义组件有两个要求：")]),t._v(" "),s("p",[t._v("组件名称必须以大写字母开头")]),t._v(" "),s("p",[t._v("组件的返回值只能有一个根元素")])]),t._v(" "),s("p",[s("strong",[t._v("函数组件和类组件的区别")]),t._v(" "),s("img",{attrs:{src:_(183),alt:"An image"}})]),t._v(" "),s("p",[s("strong",[t._v("阻止默认行为和冒泡")])]),t._v(" "),s("p",[t._v("React 中无法用 return false 去阻止事件的默认响应行为")]),t._v(" "),s("p",[t._v("必须用 event.preventDefault();阻止浏览器默认行为，例如标签不跳转")]),t._v(" "),s("blockquote",[s("p",[t._v("注： IE 不认，在 IE 下需要用 window.event.returnValue = false;")]),t._v(" "),s("p",[t._v("event.stopPropagation();阻止冒泡； 例如上级点击事件不生效")])]),t._v(" "),s("p",[s("strong",[t._v("this 的绑定方法")])]),t._v(" "),s("p",[t._v("1.bind()返回一个新的函数对象，该函数的 this 被绑定到 thisArg 上，并向事件处理器中传入参数。")]),t._v(" "),s("p",[t._v("2.在构造函数 constructor 内绑定 this，好处是仅需要绑定一次，避免每次渲染时都要重新绑定，函数在别处复用时也无需再次绑定")]),t._v(" "),s("p",[t._v("3.箭头函数则会捕获其所在上下文的 this 值，作为自己的 this 值，使用箭头函数就不用担心函数内的 this 不是指向组件内部了")]),t._v(" "),s("p",[t._v("4.如果你使用的是 React 15 及以下的版本，你可能使用过 React.createClass 函数来创建一个组件。你在里面创建的所有函数的 this 将会自动绑定到组件上。")])])},[],!1,null,null,null);v.default=p.exports}}]);