(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{3445:function(n,e,t){"use strict";t.d(e,{y:function(){return u},Z:function(){return s}});var r=t(9008),i=t(3064),a=t(4608),o=t.n(a),c=t(5893),u="Quantum Tracer";function s(n){var e=n.children;n.home;return(0,c.jsxs)("div",{className:o().container,children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("title",{children:u}),(0,c.jsx)("link",{rel:"icon",href:i.basePath+"/favicon.ico"})]}),(0,c.jsx)("div",{className:o().main,children:e}),(0,c.jsx)("div",{className:o().footer,children:(0,c.jsxs)("a",{href:"https://microsoft.com/quantum",target:"_blank",rel:"noopener noreferrer",children:[" ",(0,c.jsx)("img",{src:"https://raw.githubusercontent.com/guenp/quantum-tracer/main/public/quantum.png",alt:"Microsoft Azure Quantum",className:o().logo})]})})]})}},6084:function(n,e,t){"use strict";t.d(e,{S:function(){return h},q:function(){return m}});var r=t(8120),i=t.n(r),a=t(2503),o=t(7294),c=t(7828),u=t(3064),s=t(5893),d="https://api.github.com",l="circuit.json",f=function(n){return fetch(n).then((function(n){return n.json()}))},h=function(n){var e=(0,a.ZP)(function(n){return"".concat(d,"/users/").concat(n,"/gists")}(n),f),t=e.data,r=void 0===t?[]:t;if(e.error)return(0,s.jsx)("div",{children:"Failed to load gists"});if(!r.length)return(0,s.jsx)("div",{children:"loading..."});return r.filter((function(n){return l in n.files})).map((function(e){return(0,s.jsx)("div",{children:(0,s.jsxs)("a",{href:(t="https://gist.github.com/"+n+"/"+e.id,"".concat(u.basePath,"?url=").concat(t)),children:[" ",e.description]})},e.id);var t}))},m=function(n){var e=(0,a.ZP)(n?function(n){return"".concat(d,"/gists/").concat(n)}(n[1]):null,f),r=e.data,u=void 0===r?{}:r,h=e.error;return(0,o.useEffect)((function(){t.e(408).then(t.t.bind(t,4408,23)).then((function(n){return h?(0,s.jsx)("div",{children:"Failed to load gist"}):u.files?Object.keys(u.files).map((function(e){var t=u.files[e],r=document.getElementById("qvizid");if(l==t.filename){var i=JSON.parse(t.content);n.draw(i,r,n.STYLES.Default)}})):(0,s.jsx)("div",{children:"loading..."})}))})),h?(0,s.jsx)("div",{children:"Failed to load gist"}):u.files?Object.keys(u.files).map((function(n){var e=u.files[n];return"README.md"==e.filename?(0,s.jsx)("div",{className:i().readme,children:(0,s.jsx)(c.Z,{children:e.content})},n):l!=e.filename?(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:e.raw_url,children:e.filename})},n):void 0})):(0,s.jsx)("div",{children:"loading..."})}},3064:function(n){n.exports={assetPrefix:"/quantum-tracer/",basePath:"/quantum-tracer"}},9652:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var r=t(3445),i=t(6084),a=t(1163),o=t(5893);function c(){var n=(0,a.useRouter)(),e=n.query.id,t=(0,i.q)(e);return n.isReady?function(n,e,t){return(0,o.jsxs)(r.Z,{children:[n,"'s quantum program ",e,(0,o.jsx)("div",{id:"qvizid"}),t]})}(e[0],e[1],t):(0,o.jsx)("div",{children:"loading..."})}},3531:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gist/[...id]",function(){return t(9652)}])},4608:function(n){n.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp",main:"layout_main__26dVU",description:"layout_description__2cPef",footer:"layout_footer__127N0",logo:"layout_logo__EKJ3d"}},8120:function(n){n.exports={readme:"github_readme__3p5dL"}}},function(n){n.O(0,[774,717,888,179],(function(){return e=3531,n(n.s=e);var e}));var e=n.O();_N_E=e}]);