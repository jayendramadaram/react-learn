(this.webpackJsonpmyfirstreactproject=this.webpackJsonpmyfirstreactproject||[]).push([[0],{21:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(5),c=a.n(s),r=(a(20),a(21),a(7)),o=a(8),d=a(10),h=a(9),l=a(4),m=(a(29),a(3)),u=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={selectdish:null},console.log("this is 1st part triffy"),i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("this is fonnal")}},{key:"onselect",value:function(e){null==this.state.selectdish||this.state.selectdish!==e?this.setState({selectdish:e}):this.setState({selectdish:null})}},{key:"renderdish",value:function(e){if(null!=e)return Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{top:!0,children:[Object(m.jsx)(l.c,{src:e.image,alt:e.name}),Object(m.jsx)(l.b,{children:Object(m.jsx)("h3",{children:e.name})}),Object(m.jsx)(l.e,{className:"p-4",children:Object(m.jsx)("span",{children:e.description})})]})});console.log("this is 2nd part triffy")}},{key:"renderdet",value:function(e){if(null!=e){var t=e.comments.map((function(e){return Object(m.jsxs)("div",{className:"ap",children:[Object(m.jsx)("p",{children:e.id}),Object(m.jsx)("p",{children:e.rating}),Object(m.jsx)("p",{children:e.comment}),Object(m.jsx)("p",{children:e.author}),Object(m.jsx)("p",{children:e.date})]})}));return Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{top:!0,children:[Object(m.jsx)(l.b,{children:Object(m.jsx)("h3",{children:e.name})}),Object(m.jsx)(l.e,{className:"p-4",children:t})]})})}return Object(m.jsx)("div",{})}},{key:"render",value:function(){var e=this,t=this.props.dishes.map((function(t){return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsxs)(l.a,{onClick:function(){return e.onselect(t)},children:[Object(m.jsx)(l.c,{width:"100%",src:t.image,alt:t.name}),Object(m.jsx)(l.d,{children:Object(m.jsx)(l.f,{children:t.name})})]},t.id)})}));return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row",children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-12 col-md-5 m-1 mt-5 mb-5",children:this.renderdish(this.state.selectdish)}),Object(m.jsx)("div",{className:"col-12 col-md-5 m-1 mt-5 mb-5 dubs",children:this.renderdet(this.state.selectdish)})]})]})}}]),a}(i.Component),j=(a(31),[{id:0,name:"Uthappizza",image:"assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:1,name:"Zucchipakoda",image:"assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:2,name:"Vadonut",image:"assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:3,name:"ElaiCheese Cake",image:"assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]}]),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={dishes:j},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(l.g,{dark:!0,color:"primary",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(l.h,{href:"/",children:"Sono Sharingan, Omae wa doko made mieteiru"})})}),Object(m.jsx)(u,{dishes:this.state.dishes})]})}}]),a}(i.Component);c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5767208e.chunk.js.map