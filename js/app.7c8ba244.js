(function(){"use strict";var t={248:function(t,e,n){var a=n(963),o=n(252);const r={class:"container"},i=(0,o._)("h1",null,"Daily Weather",-1);function l(t,e,n,a,l,u){const c=(0,o.up)("WeatherTable");return(0,o.wg)(),(0,o.iD)("div",r,[i,(0,o.Wm)(c)])}var u=n(577);const c={class:"table"},m=(0,o._)("span",null,"℃",-1),s=(0,o._)("span",null,"℃",-1),d={class:"day"},p=(0,o.uE)('<option value="0">0 (today)</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>',7),v=[p],f=["onClick"],y=(0,o._)("span",null,"Remove",-1),_=[y];function h(t,e,n,r,i,l){return(0,o.wg)(),(0,o.iD)("table",c,[(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{onClick:e[0]||(e[0]=t=>r.sortItems("city"))},"City"),(0,o._)("th",{onClick:e[1]||(e[1]=t=>r.sortItems("min"))},[(0,o.Uk)("Min "),m]),(0,o._)("th",{onClick:e[2]||(e[2]=t=>r.sortItems("max"))},[(0,o.Uk)("Max "),s]),(0,o._)("th",d,[(0,o.Uk)(" Day "),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>r.day=t)},v,512),[[a.bM,r.day]])])])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.data,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,u.zw)(t.name),1),(0,o._)("td",null,(0,u.zw)(t.daily.temperature_2m_min[r.day]),1),(0,o._)("td",null,(0,u.zw)(t.daily.temperature_2m_max[r.day]),1),(0,o._)("td",{class:"remove-btn",onClick:e=>r.removeCity(t.name)},_,8,f)])))),128))])])}var w=n(262),b={setup(){const t=(0,w.iH)([{name:"Kyiv",latitude:50.45,longitude:30.52},{name:"New York",latitude:40.71,longitude:-74.01},{name:"Geneva",latitude:46.2,longitude:6.15},{name:"Tokyo",latitude:35.69,longitude:139.69},{name:"Honolulu",latitude:21.31,longitude:-157.86}]),e=(0,w.iH)([]),n=(0,w.iH)(0),a=async()=>{try{e.value=await Promise.all(t.value.map((async t=>{const e=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${t.latitude}&longitude=${t.longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Africa%2FCairo`);return{name:t.name,...await e.json()}})))}catch(n){}},r=t=>{e.value=e.value.filter((e=>e.name!==t))},i=t=>{e.value.sort(((e,n)=>"city"===t?e.name.localeCompare(n.name):"min"===t?e.daily.temperature_2m_min[0]-n.daily.temperature_2m_min[0]:n.daily.temperature_2m_max[0]-e.daily.temperature_2m_max[0]))};return(0,o.bv)((()=>{a()})),{data:e,day:n,removeCity:r,sortItems:i}}},g=n(744);const k=(0,g.Z)(b,[["render",h]]);var C=k,O={components:{WeatherTable:C}};const x=(0,g.Z)(O,[["render",l]]);var j=x;(0,a.ri)(j).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var i=1/0;for(m=0;m<t.length;m++){a=t[m][0],o=t[m][1],r=t[m][2];for(var l=!0,u=0;u<a.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(l=!1,r<i&&(i=r));if(l){t.splice(m--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var m=t.length;m>0&&t[m-1][2]>r;m--)t[m]=t[m-1];t[m]=[a,o,r]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],l=a[1],u=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var m=u(n)}for(e&&e(a);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(m)},a=self["webpackChunkdaily_weather"]=self["webpackChunkdaily_weather"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(248)}));a=n.O(a)})();
//# sourceMappingURL=app.7c8ba244.js.map