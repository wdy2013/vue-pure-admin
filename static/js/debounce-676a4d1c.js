import{m as p}from"./message-ceee817c.js";import{f as i,O as f}from"./index-e24b4c59.js";import{h as _,a3 as r,j as h,k as C,D as t,x as e,u as c,B as a,l as o}from"./runtime-core.esm-bundler-1f6332ae.js";import"./index-3b260c80.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./style-8cd62612.js";import"./index-70a76fbd.js";import"./index-17991776.js";import"./vue.runtime.esm-bundler-7c6ab200.js";const k=o("div",null,"防抖：debounce",-1),b=o("div",{class:"mb-5"}," 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。 ",-1),v=o("div",null,"节流：throttle",-1),x=o("div",{class:"mb-5"}," 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。 ",-1),B=_({name:"Debounce"}),A=_({...B,setup(D){const n=()=>p("恭喜你，这是一条成功消息",{type:"success"}),d=i(n,1e3,!0),m=i(n,1e3),u=f(n);return(N,V)=>{const s=r("el-button"),l=r("el-card");return h(),C("div",null,[t(l,{class:"mb-5"},{header:e(()=>[k]),default:e(()=>[b,t(s,{onClick:c(d)},{default:e(()=>[a(" 连续点击我，只会执行第一次点击事件，立即执行 ")]),_:1},8,["onClick"]),t(s,{onClick:c(m)},{default:e(()=>[a(" 连续点击我，只会执行最后一次点击事件，延后执行 ")]),_:1},8,["onClick"])]),_:1}),t(l,null,{header:e(()=>[v]),default:e(()=>[x,t(s,{onClick:c(u)},{default:e(()=>[a(" 连续点击我，每一秒只会执行一次点击事件 ")]),_:1},8,["onClick"])]),_:1})])}}});export{A as default};
