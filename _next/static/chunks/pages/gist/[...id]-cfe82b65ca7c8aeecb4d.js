(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{3445:function(n,e,t){"use strict";t.d(e,{y:function(){return u},Z:function(){return s}});var i=t(9008),r=t(3064),a=t(4608),c=t.n(a),o=t(5893),u="Quantum Tracer";function s(n){var e=n.children;n.home;return(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:u}),(0,o.jsx)("link",{rel:"icon",href:r.basePath+"/favicon.ico"})]}),(0,o.jsx)("div",{className:c().main,children:e}),(0,o.jsx)("div",{className:c().footer,children:(0,o.jsxs)("a",{href:r.basePath,rel:"noopener noreferrer",children:[" ",(0,o.jsx)("img",{src:"https://raw.githubusercontent.com/guenp/quantum-tracer/main/public/quantum.png",alt:"Microsoft Azure Quantum",className:c().logo})]})})]})}},6084:function(n,e,t){"use strict";t.d(e,{S:function(){return h},q:function(){return m}});var i=t(8120),r=t.n(i),a=t(2503),c=t(7294),o=t(7828),u=t(3064),s=t(5893),d="https://api.github.com",l="circuit.json",f=function(n){return fetch(n).then((function(n){return n.json()}))},h=function(n){var e=(0,a.ZP)(function(n){return"".concat(d,"/users/").concat(n,"/gists")}(n),f),t=e.data,i=void 0===t?[]:t;if(e.error)return(0,s.jsx)("div",{children:"Failed to load gists"});if(!i.length)return(0,s.jsx)("div",{children:"loading..."});return i.filter((function(n){return l in n.files})).map((function(e){return(0,s.jsx)("div",{children:(0,s.jsxs)("a",{href:(t="https://gist.github.com/"+n+"/"+e.id,"".concat(u.basePath,"?url=").concat(t)),children:[" ",e.description]})},e.id);var t}))},m=function(n){var e=(0,a.ZP)(n?function(n){return"".concat(d,"/gists/").concat(n)}(n[1]):null,f),i=e.data,u=void 0===i?{}:i,h=e.error;return(0,c.useEffect)((function(){t.e(408).then(t.t.bind(t,4408,23)).then((function(n){return h?(0,s.jsx)("div",{children:"Failed to load gist"}):u.files?Object.keys(u.files).map((function(e){var t=u.files[e],i=document.getElementById("qvizid");if(l==t.filename){var r=JSON.parse(t.content);n.draw(r,i,n.STYLES.Default)}})):(0,s.jsx)("div",{children:"loading..."})}))})),h?(0,s.jsx)("div",{children:"Failed to load gist"}):u.files?Object.keys(u.files).map((function(n){var e=u.files[n];return"README.md"==e.filename?(0,s.jsx)("div",{className:r().readme,children:(0,s.jsx)(o.Z,{children:e.content})},n):l!=e.filename?(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:e.raw_url,children:e.filename})},n):void 0})):(0,s.jsx)("div",{children:"loading..."})}},3064:function(n){n.exports={assetPrefix:"/quantum-tracer/",basePath:"/quantum-tracer"}},9652:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var i=t(3445),r=t(6084),a=t(1163),c=t(5893);function o(){var n=(0,a.useRouter)(),e=n.query.id,t=(0,r.q)(e);return n.isReady?function(n,e,t){return(0,c.jsxs)(i.Z,{children:[n,"'s quantum program ",e,(0,c.jsx)("div",{id:"qvizid"}),t]})}(e[0],e[1],t):(0,c.jsx)("div",{children:"loading..."})}},3531:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gist/[...id]",function(){return t(9652)}])},4608:function(n){n.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp",main:"layout_main__26dVU",description:"layout_description__2cPef",footer:"layout_footer__127N0",logo:"layout_logo__EKJ3d"}},8120:function(n){n.exports={readme:"github_readme__3p5dL"}}},function(n){n.O(0,[774,717,888,179],(function(){return e=3531,n(n.s=e);var e}));var e=n.O();_N_E=e}]);