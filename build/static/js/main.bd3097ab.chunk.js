(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),s=c.n(n),i=c(28),r=c.n(i),o=(c(62),c(50)),l=c(8),d=(c(63),c(64),c(51)),j=c.n(d),u=c(52),m=c.n(u),b=c(15),h=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(h.Provider,{value:Object(n.useReducer)(t,c),children:s})},p=function(){return Object(n.useContext)(h)},x=c(36),_=x.a.initializeApp({apiKey:"AIzaSyBz6O7RHbbFB7qCp4mRQaoK8t4l9SlgJ9A",authDomain:"clone-76ac3.firebaseapp.com",projectId:"clone-76ac3",storageBucket:"clone-76ac3.appspot.com",messagingSenderId:"91574016567",appId:"1:91574016567:web:6254e4df378cb81f657db2",measurementId:"G-LKXPZLQXHV"}).firestore(),g=x.a.auth();var v=function(){var e=p(),t=Object(l.a)(e,1)[0],c=t.basket,n=t.user;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"headerLogo"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(j.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(b.b,{to:!n&&"/login",children:Object(a.jsxs)("div",{onClick:function(){n&&g.signOut()},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",n?n.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(a.jsx)(b.b,{to:"/orders",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(b.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(m.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})};c(73),c(74);var f=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),d=o[0].basket,j=o[1];return console.log("this is the basket >>> ",d),Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))})]}),Object(a.jsx)("img",{alt:"Gaming Accessories",src:n,class:"landscape-image","data-a-hires":"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_2X._SY608_CB432517394_.jpg"}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to Basket"})]})};var N=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg",alt:"",height:"600px",width:"1500px"}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"2121151564",title:"DualSense Wireless Controller",price:69.99,image:"https://m.media-amazon.com/images/I/71y+UGuJl5L._AC_UY218_.jpg",rating:5}),Object(a.jsx)(f,{id:"2121151514",title:"Nintendo Switch Pro Controller",price:49.99,image:"https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UY218_.jpg",rating:5})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"22541211515",title:"Logitech G502 Hero High Performance Gaming Mouse",price:39.99,image:"https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg",rating:5}),Object(a.jsx)(f,{id:"2121151589",title:"Xbox Core Controller - Robot White",price:49.99,image:"https://m.media-amazon.com/images/I/51gNmD2-otL._AC_UY218_.jpg",rating:5}),Object(a.jsx)(f,{id:"2121151520",title:"RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatib...",price:39.99,image:"https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg",rating:5})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(f,{id:"2123615",title:"Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Ba...",price:159.99,image:"https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg",rating:5})})]})})},y=c(10);c(75),c(76);var k=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=e.rating,r=e.hideButton,o=p(),d=Object(l.a)(o,2),j=(d[0].basket,d[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))}),!r&&Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},S=(c(77),c(24)),C=c.n(S),A=c(37),E=c(21),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(A.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in the basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:a});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});default:return e}};var B=function(){var e=Object(y.f)(),t=p(),c=Object(l.a)(t,1)[0].basket;return Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:T(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};var I=function(){var e=p(),t=Object(l.a)(e,1)[0],c=t.basket,n=t.user;return Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"amazon AD"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Hello, ",null===n||void 0===n?void 0:n.email]}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(B,{})})]})};c(79);var P=function(){var e=Object(y.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(b.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{className:"login__signInButton",type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(s,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to the Amazon Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(s,d).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},z=c(26),L=c.n(z),R=c(35),M=(c(81),c(23)),D=c(53),U=c.n(D).a.create({baseURL:"https://us-central1-clone-76ac3.cloudfunctions.net/api"});var G=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user,r=t[1],o=Object(M.useStripe)(),d=Object(M.useElements)(),j=Object(n.useState)(!1),u=Object(l.a)(j,2),m=u[0],h=u[1],O=Object(n.useState)(""),x=Object(l.a)(O,2),g=x[0],v=x[1],f=Object(n.useState)(null),N=Object(l.a)(f,2),S=N[0],A=N[1],E=Object(n.useState)(!0),w=Object(l.a)(E,2),B=w[0],I=w[1],P=Object(n.useState)(!0),z=Object(l.a)(P,2),D=z[0],G=z[1],Y=Object(y.f)();Object(n.useEffect)((function(){(function(){var e=Object(R.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({method:"post",url:"/payments/create?total=".concat(100*T(s))}).catch((function(e){return alert(e.message)}));case 2:t=e.sent,G(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("The SECRET IS >>> ",D);var H=function(){var e=Object(R.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.next=4,o.confirmCardPayment(D,{payment_method:{card:d.getElement(M.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:s,amount:t.amount,created:t.created}),h(!0),A(null),v(!1),r({type:"EMPTY_BASKET"}),Y.replace("/orders")})).catch((function(e){return alert(e.message)}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"payment",children:Object(a.jsxs)("div",{className:"payment__container",children:[Object(a.jsxs)("h1",{children:["Checkout (",Object(a.jsxs)(b.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Delivery Address"})}),Object(a.jsxs)("div",{className:"payment__address",children:[Object(a.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(a.jsx)("p",{children:"123 React Street"}),Object(a.jsx)("p",{children:"Belgium, Brussels"})]})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Review items and delivery"})}),Object(a.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Payment Method"})}),Object(a.jsx)("div",{className:"payment__details",children:Object(a.jsxs)("form",{onSubmit:H,children:[Object(a.jsx)(M.CardElement,{onChange:function(e){I(e.empty),A(e.error?e.error.message:"")}}),Object(a.jsxs)("div",{className:"payment__priceContainer",children:[Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:T(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{disabled:g||B||m,children:Object(a.jsx)("span",{children:g?Object(a.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),S&&Object(a.jsx)("div",{children:S})]})})]})]})})},Y=c(54),H=(c(98),c(55)),K=c.n(H);var F=function(e){var t,c=e.order;return Object(a.jsxs)("div",{className:"order",children:[Object(a.jsx)("h2",{children:"Order"}),Object(a.jsx)("p",{children:K.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(a.jsx)("p",{className:"order__id",children:Object(a.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};c(100);var W=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=(c.basket,c.user),i=(t[1],Object(n.useState)([])),r=Object(l.a)(i,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){s?_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[s]),Object(a.jsxs)("div",{className:"orders",children:[Object(a.jsx)("h1",{children:"Your Orders"}),Object(a.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(a.jsx)(F,{order:e})}))})]})},X=Object(Y.a)("pk_test_51HyiggKjmECxXMJEG7HiUqacttvDrxHcLqNJeasm7jqmTGHXv3ImAWG8y0IP0wOM6RZIw3UAIsjyKPorxuXtCyTQ007JgIQV2q");var J=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("The user is >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(b.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{path:"/login",children:Object(a.jsx)(P,{})}),Object(a.jsxs)(y.a,{path:"/checkout",children:[Object(a.jsx)(v,{}),Object(a.jsx)(I,{})]}),Object(a.jsxs)(y.a,{path:"/payment",children:[Object(a.jsx)(v,{}),Object(a.jsx)(M.Elements,{stripe:X,children:Object(a.jsx)(G,{})})]}),Object(a.jsxs)(y.a,{path:"/orders",children:[Object(a.jsx)(v,{}),Object(a.jsx)(W,{})]}),Object(a.jsxs)(y.a,{path:"/",children:[Object(a.jsx)(v,{}),Object(a.jsx)(N,{})]})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:w,children:Object(a.jsx)(J,{})})}),document.getElementById("root")),q()},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.bd3097ab.chunk.js.map