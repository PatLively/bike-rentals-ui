"use strict";(self["webpackChunkbike_rentals"]=self["webpackChunkbike_rentals"]||[]).push([[886],{7886:function(n,t,a){a.r(t),a.d(t,{default:function(){return z}});var s=a(6252),e=a(3577),i=a(2262),o=a(6183),u=a(813),l=(a(7658),a(360));const c={key:0,class:"confirm-dialog"},r={class:"confirmation-header"},d={key:1},v={class:"station-row"},w=["onClick"];var _={__name:"ReturnStationButtons",props:{sessionId:String,bikeId:String},setup(n){const t=n,a=(0,i.iH)([]),o=(0,i.iH)([]);async function _(){const n="api/locations/stations";a.value=(await(0,l.I)(n)).data}async function p(){const n="api/locations/bikes/"+station.name+"/count",t=await(0,l.I)(n);o.value.push(t.data[0].string)}(0,s.bv)((async()=>{await _(),await p()}));const k=(0,i.iH)(!1),m=(0,i.iH)("");function b(){k.value=!1}async function f(){const n="api/rentals/return/"+m.value+"/"+t.sessionId+"/"+t.bikeId(await(0,l.O)(n));u.Z.push({path:"/"})}function h(n){m.value=n,k.value=!0}return(n,t)=>k.value?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("h5",r,"Confirm you want to return the bike to "+(0,e.zw)(m.value)+" Station",1),(0,s._)("button",{class:"confirmation-btn margin-right",onClick:t[0]||(t[0]=n=>b())},"Cancel"),(0,s._)("button",{class:"confirmation-btn",onClick:t[1]||(t[1]=n=>f())},"Confirm")])):((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.value,((n,t)=>((0,s.wg)(),(0,s.iD)("button",{key:n.id,class:"station-btn",onClick:t=>h(n.name)},[(0,s._)("h4",null,(0,e.zw)(n.name)+" Station",1),(0,s._)("p",null,"( "+(0,e.zw)(o.value[t])+" / "+(0,e.zw)(n.total_stalls)+")",1)],8,w)))),128))])]))}},p=a(3744);const k=(0,p.Z)(_,[["__scopeId","data-v-13524eca"]]);var m=k;const b=n=>((0,s.dD)("data-v-823501a6"),n=n(),(0,s.Cn)(),n),f={class:"session"},h=b((()=>(0,s._)("img",{alt:"Vue logo",src:o},null,-1))),I={class:"station-row"},g=b((()=>(0,s._)("h5",null,"Extend Session",-1))),S=[g];var C={__name:"SessionView",setup(n){const t=u.Z.currentRoute.value.params.sessionId,a=u.Z.currentRoute.value.params.startTime,o=(0,i.iH)(u.Z.currentRoute.value.params.sessionLength),c=u.Z.currentRoute.value.params.bikeId;async function r(){const n="api/rentals/extend/"+t(await(0,l.O)(n));o.value=parseInt(o.value)+15}return(n,u)=>((0,s.wg)(),(0,s.iD)("div",f,[h,(0,s._)("h2",null,"Session Id: "+(0,e.zw)((0,i.SU)(t)),1),(0,s._)("h3",null,"Start Time: "+(0,e.zw)((0,i.SU)(a))+"   Session Length: "+(0,e.zw)(o.value)+"min",1),(0,s.Wm)(m,{sessionId:(0,i.SU)(t),bikeId:(0,i.SU)(c)},null,8,["sessionId","bikeId"]),(0,s._)("div",I,[(0,s._)("button",{class:"extend-btn",onClick:u[0]||(u[0]=n=>r())},S)])]))}};const y=(0,p.Z)(C,[["__scopeId","data-v-823501a6"]]);var z=y}}]);
//# sourceMappingURL=886.2797bb9e.js.map