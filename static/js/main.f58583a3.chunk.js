(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(8),i=n.n(s),r=(n(18),n(9)),o=n(10),l=n(11),j=n(13),b=n(12),d=(n(19),n(1));var u=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{children:[Object(d.jsxs)("h2",{children:[" ",t]}),n]})},h=n(7),p=n.n(h),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(d.jsx)("div",{className:p.a.container,children:t.map((function(e){return Object(d.jsx)("button",{type:"button",name:e,className:p.a.button,onClick:function(){return n(e)},children:e},e)}))})},x=n(3),m=n.n(x),f=n(4),v=function(e){var t=e.total;var n=Array.from({length:t-1}).map((function(e,t){return t}));return Object(d.jsx)(d.Fragment,{children:n.map((function(e){return Object(d.jsx)("span",{children:Object(d.jsx)(f.a,{color:"#"+(Math.random().toString(16)+"000000").substring(2,8).toUpperCase(),size:"30px"})},e)}))})},g=n(5),k=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(d.jsxs)("ul",{className:m.a.list,children:[Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{className:m.a.description,children:"Good:"}),Object(d.jsx)("span",{children:t}),Object(d.jsx)("span",{children:Object(d.jsx)(g.a,{color:"green",size:"24px"})})]}),Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{className:m.a.description,children:"Neutral:"}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("span",{children:Object(d.jsx)(g.a,{color:"grey",size:"24px"})})]}),Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{className:m.a.description,children:"Bad:"}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("span",{children:Object(d.jsx)(g.a,{color:"red",size:"24px"})})]}),Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{className:m.a.description,children:"Total:"}),Object(d.jsx)("span",{children:a}),Object(d.jsx)(f.a,{color:"green",size:"24px"})]}),Object(d.jsx)("li",{className:m.a.itemCapsTotal,children:Object(d.jsx)(v,{total:a})}),Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{children:"Positive feedback:"}),Object(d.jsxs)("span",{children:[s," %"]})]})]})};var _=function(e){var t=e.message;return Object(d.jsx)("p",{children:t})},F=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=100*e.state.good/e.countTotalFeedback();return Math.ceil(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.countTotalFeedback(),n=this.state.good,c=this.state.neutral,a=this.state.bad;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{title:"Please leave feedback",children:Object(d.jsx)(O,{options:e,onLeaveFeedback:this.onLeaveFeedback})}),0===t?Object(d.jsx)(_,{message:"No feedback given"}):Object(d.jsx)(u,{title:"Statistics",children:Object(d.jsx)(k,{good:n,neutral:c,bad:a,total:t,positivePercentage:this.countPositiveFeedbackPercentage(),generateRandomColor:this.generateRandomColor})})]})}}]),n}(c.Component),N=F,C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),C()},3:function(e,t,n){e.exports={list:"Statistics_list__3CfhR",item:"Statistics_item__2l2Ra",description:"Statistics_description__2TEvX",itemCapsTotal:"Statistics_itemCapsTotal__3lUx_"}},7:function(e,t,n){e.exports={container:"FeedbackOptions_container__2tPZL",button:"FeedbackOptions_button__1VbJ6"}}},[[21,1,2]]]);
//# sourceMappingURL=main.f58583a3.chunk.js.map