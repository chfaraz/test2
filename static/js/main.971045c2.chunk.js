(this["webpackJsonptest-2"]=this["webpackJsonptest-2"]||[]).push([[0],{23:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),u=i(16),a=i.n(u),l=(i(23),i(10)),c=i(2),o=i(7),r=i(1),d=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],s=t[1],u=Object(n.useState)([]),a=Object(o.a)(u,2);a[0],a[1];console.log(i);var l=Object(r.jsxs)("div",{id:"popup",children:[Object(r.jsx)("h1",{children:"enter some text"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("textarea",{}),Object(r.jsxs)("div",{className:"flex justify-around",children:[Object(r.jsx)("button",{onClick:function(){return s(!1)},children:"Close"}),Object(r.jsx)("button",{onClick:function(){return s(!1)},children:"Add"})]})]})]});return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{id:"ele2",onMouseUp:function(e){return function(e){if(window.getSelection().toString().length>1){var t=document.getElementById("tooltip"),n=window.getSelection(),u=document.createRange();u.selectNode(document.getElementById("cal1"));var a=document.createRange();a.selectNode(document.getElementById("cal2")),i||window.addEventListener("mouseup",(function(){if(!n.isCollapsed){var e=n.getRangeAt(0).getBoundingClientRect(),i=u.getBoundingClientRect(),s=a.getBoundingClientRect();t.style.top=100*(e.bottom-s.top)/(i.top-s.top)+"px",t.style.left=100*(e.left-s.left)/(i.left-s.left)+"px",t.style.display="block"}})),t.addEventListener("mousedown",(function(){s(!0),setTimeout((function(){t.style.display="none"}),400)})),window.addEventListener("mousedown",(function(){t.style.display="none"}))}}()},children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"})]}),Object(r.jsx)("div",{id:"cal1",children:"\xa0"}),Object(r.jsx)("div",{id:"cal2",children:"\xa0"}),Object(r.jsx)("button",{id:"tooltip",onClick:function(){return console.log("ghsagdj dsahgd")},children:"+"}),i?l:null]})},m=i(17);var p=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],s=t[1],u=Object(n.useState)([]),a=Object(o.a)(u,2),l=a[0],c=a[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),b=p[0],g=p[1],j=Object(n.useState)(""),v=Object(o.a)(j,2),h=v[0],f=v[1];console.log(l);var x=Object(r.jsxs)("div",{id:"popup",children:[Object(r.jsx)("h1",{children:"enter some text"}),Object(r.jsx)("textarea",{value:b,onChange:function(e){return function(e){g(e.target.value)}(e)}}),Object(r.jsx)("button",{onClick:function(){return s(!1)},children:"Close"}),Object(r.jsx)("button",{onClick:function(e){return console.log(b),console.log(h),c(l.concat(Object(m.a)({},h,b))),s(!1),void(document.getElementById("aa").style.display="none")},children:"Add"})]});return Object(r.jsxs)("div",{className:"container mx-auto relative",children:[Object(r.jsxs)("div",{id:"ele2",onMouseUp:function(e){return function(e){var t=document.getElementById("aa"),i=e.clientX,n=e.clientY,s=window.getSelection().toString();s.length>0&&(t.style.display="block",t.style.top=n-210+"px",t.style.left=i-150+"px"),f(s)}(e)},children:[Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque equat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, eque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"})]}),Object(r.jsx)("button",{id:"aa",onClick:function(){s(!0),document.getElementById("aa").style.display="none"},children:"+"}),i?x:null]})};var b=function(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{className:"App container mx-auto relative",children:[Object(r.jsxs)("div",{className:"flex text-4xl my-20 font-bold justify-center px-44",children:[Object(r.jsx)("h1",{className:"pr-44",children:Object(r.jsx)(l.b,{to:"/",children:"First Method"})}),Object(r.jsx)("h1",{children:Object(r.jsx)(l.b,{to:"/second",children:"Second Method"})})]}),Object(r.jsxs)(c.c,{children:[Object(r.jsx)(c.a,{exact:!0,path:"/",children:Object(r.jsx)(d,{})}),Object(r.jsx)(c.a,{exact:!0,path:"/second",children:Object(r.jsx)(p,{})})]})]})})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,31)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,u=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),u(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),g()}},[[30,1,2]]]);
//# sourceMappingURL=main.971045c2.chunk.js.map