(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{3445:function(e,n,i){"use strict";i.d(n,{y:function(){return u},Z:function(){return o}});var t=i(9008),r=i(3064),s=i(4608),a=i.n(s),c=i(5893),u="Quantum Tracer";function o(e){var n=e.children;e.home;return(0,c.jsxs)("div",{className:a().container,children:[(0,c.jsxs)(t.default,{children:[(0,c.jsx)("title",{children:u}),(0,c.jsx)("link",{rel:"icon",href:r.basePath+"/favicon.ico"})]}),(0,c.jsx)("div",{className:a().main,children:n}),(0,c.jsx)("div",{className:a().footer,children:(0,c.jsxs)("a",{href:r.basePath,rel:"noopener noreferrer",children:[" ",(0,c.jsx)("img",{src:"https://raw.githubusercontent.com/guenp/quantum-tracer/main/public/quantum.png",alt:"Microsoft Azure Quantum",className:a().logo})]})})]})}},6084:function(e,n,i){"use strict";i.d(n,{S:function(){return x},q:function(){return g}});var t=i(5988),r=i(8120),s=i.n(r),a=i(2503),c=i(7294),u=i(7828),o=(i(3064),i(5893)),d="https://api.github.com",l="circuit.json",f="README.md",h=[l,f],j=(0,o.jsxs)("div",{className:"jsx-686044481 loading",children:["loading gist...",(0,o.jsx)(t.default,{id:"686044481",children:[".loading.jsx-686044481{padding:50px;}"]})]}),m=function(e){return fetch(e).then((function(e){return e.json()}))},x=function(e){var n=(0,a.ZP)(function(e){return"".concat(d,"/users/").concat(e,"/gists")}(e),m),i=n.data,t=void 0===i?[]:i;if(n.error)return(0,o.jsx)("div",{children:"Failed to load gists"});if(!t.length)return j;var r=t.filter((function(e){return l in e.files}));return r.length?r.map((function(n){return(0,o.jsx)("div",{children:(0,o.jsxs)("a",{href:e+"/"+n.id,children:[" ",n.description]})},n.id)})):(0,o.jsxs)("div",{children:["No gists found! ",(0,o.jsx)("a",{href:"https://gist.github.com/",children:"Create a new gist"}),"."]})},g=function(e){var n=(0,a.ZP)(e?function(e){return"".concat(d,"/gists/").concat(e)}(e[1]):null,m),t=n.data,r=void 0===t?{}:t,x=n.error;if((0,c.useEffect)((function(){i.e(408).then(i.t.bind(i,4408,23)).then((function(e){if(!x&&r.files&&Object.keys(r.files).includes(l)){var n=r.files[l],i=document.getElementById("quantum-viz"),t=JSON.parse(n.content);e.draw(t,i,e.STYLES.Default)}}))})),x)return(0,o.jsx)("div",{children:"Failed to load gist"});if(!r.files)return j;var g=[];if(Object.keys(r.files).includes(f)){var _=r.files[f];g.push((0,o.jsx)("div",{className:s().readme,children:(0,o.jsx)(u.Z,{children:_.content})},f))}return g.push(Object.keys(r.files).map((function(e){var n=r.files[e];if(!h.includes(n.filename))return n.filename.match(/.(jpg|jpeg|png|gif)$/i)?(0,o.jsx)("div",{children:(0,o.jsx)("a",{href:n.raw_url,children:(0,o.jsx)("img",{src:n.raw_url})})},e):(0,o.jsx)("div",{children:(0,o.jsx)("a",{href:n.raw_url,children:n.filename})},e)}))),g}},3064:function(e){e.exports={assetPrefix:"/quantum-tracer/",basePath:"/quantum-tracer"}},9652:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}});var t=i(5988),r=i(3445),s=i(6084),a=i(1163),c=i(3064),u=i(5893);function o(){var e=(0,a.useRouter)(),n=e.query.id,i=(0,s.q)(n);return e.isReady?function(e,n,i){return(0,u.jsxs)(r.Z,{children:[(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("a",{href:c.basePath+"/gist/"+e,children:e}),"'s gist:",(0,u.jsx)("pre",{children:(0,u.jsx)("a",{href:"https://gist.github.com/"+e+"/"+n,children:n})})]}),(0,u.jsx)("div",{id:"quantum-viz",className:"trace"}),i]})}(n[0],n[1],i):(0,u.jsxs)("div",{className:"jsx-2920891019 loading",children:["loading gist...",(0,u.jsx)(t.default,{id:"2920891019",children:[".loading.jsx-2920891019{padding:50px;}"]})]})}},3531:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gist/[...id]",function(){return i(9652)}])},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp",main:"layout_main__26dVU",description:"layout_description__2cPef",footer:"layout_footer__127N0",logo:"layout_logo__EKJ3d"}},8120:function(e){e.exports={readme:"github_readme__3p5dL"}}},function(e){e.O(0,[774,375,581,888,179],(function(){return n=3531,e(e.s=n);var n}));var n=e.O();_N_E=n}]);