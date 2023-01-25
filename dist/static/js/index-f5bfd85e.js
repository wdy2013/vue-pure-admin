import{j as N,G as c,J as a,g as K}from"./index-8c77f9cd.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const d="stay",i="hs-on",h="hs-off",f="hs-range",m="both-left-sides",y="both-right-sides";let x="right",g=[],l=[];const w={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},B=Vue.defineComponent({name:"ReSelector",props:w,emits:["selectedVal"],setup(s,{emit:V}){const r=Vue.getCurrentInstance(),_=s.value,S=Vue.computed(()=>s.disabled),b=Vue.computed(()=>{const e=[];let t=0,n=_;for(_!==Math.floor(_)&&n--;t<n;t++)e.push(i);for(;t<s.max.length;t++)e.push(h);return e}),q=e=>{if(!s.disabled){if(l.length===1){g.length<1&&g.push({index:e});let t=g[0].index;if(e>t)for(x="right",N(!1,y,document.querySelector(".hs-select__item"+l[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),f),t++;else for(x="left",N(!0,y,document.querySelector(".hs-select__item"+l[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),f),t--}c(document.querySelector("."+h+e),i)}},u=e=>{if(s.disabled)return;const t=document.querySelector("."+h+e);if(t.className.includes(d))return!1;if(a(t,i),l.length===1){const n=g[0].index;if(e>=n)for(let o=0;o<=e;o++)a(document.querySelector(".hs-select__item"+o),f);else for(;e<=n;)a(document.querySelector(".hs-select__item"+e),f),e++}},v=(e,t)=>{if(s.disabled)return;const n=l.length;n<2?(l.push({item:t,index:e}),c(document.querySelector("."+h+e),d),c(document.querySelector(".hs-select__item"+l[0].index),m),l[1]&&(x==="right"?c(document.querySelector(".hs-select__item"+l[1].index),y):c(document.querySelector(".hs-select__item"+l[1].index),m)),n===1&&(x==="right"?V("selectedVal",{left:l[0].item,right:l[1].item,whole:l}):V("selectedVal",{left:l[1].item,right:l[0].item,whole:l}))):Vue.nextTick(()=>{l.forEach(o=>{a(document.querySelector("."+h+o.index),i,d),a(document.querySelector(".hs-select__item"+o.index),m,y)}),l=[],g=[];for(let o=0;o<=s.max.length;o++){const C=document.querySelector(".hs-select__item"+o);C&&a(C,f)}l.push({item:t,index:e}),c(document.querySelector("."+h+e),d),c(document.querySelector(".hs-select__item"+l[0].index),m)})},H=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"传入的数组长度必须是2";for(e.sort((t,n)=>t-n),c(r.refs["hsdiv"+s.HsKey+e[0]],i,d),c(r.refs["hstd"+s.HsKey+e[0]],m),c(r.refs["hsdiv"+s.HsKey+e[1]],i,d),c(r.refs["hstd"+s.HsKey+e[1]],y);e[1]>=e[0];)c(r.refs["hstd"+s.HsKey+e[0]],f),e[0]++}};return Vue.onBeforeMount(()=>{Vue.nextTick(()=>{H(s.echo)})}),()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode("table",{cellspacing:"0",cellpadding:"0"},[Vue.createVNode("tbody",null,[Vue.createVNode("tr",null,[s.max.map((e,t)=>Vue.createVNode("td",{"data-index":s.HsKey,ref:`hstd${s.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>q(t),onMouseleave:()=>u(t),onClick:()=>v(t,e),style:{cursor:Vue.unref(S)?"auto":"pointer",textAlign:"center"},key:t},[Vue.createVNode("div",{ref:`hsdiv${s.HsKey}${t}`,class:`hs-item ${[Vue.unref(b)[t]+t]}`},[Vue.createVNode("span",null,[e])])]))])])])])}}),$=K(B),D=$,E={class:"card-header"},L={key:0,class:"mt-3"},R=Vue.defineComponent({name:"Selector"}),k=Vue.defineComponent({...R,setup(s){const V=Vue.ref(""),r=Vue.ref([{title:"基本使用",echo:[],disabled:!1},{title:"回显模式",echo:[2,7],disabled:!0}]),_=({left:S,right:b})=>{V.value=`${S}-${b}`};return(S,b)=>{const q=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createElementBlock("div",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r.value,(u,v)=>(Vue.openBlock(),Vue.createBlock(q,{class:"box-card",key:v},{header:Vue.withCtx(()=>[Vue.createElementVNode("div",E,[Vue.createElementVNode("span",null,Vue.toDisplayString(u.title),1)])]),default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(D),{HsKey:v,echo:u.echo,onSelectedVal:_,disabled:u.disabled},null,8,["HsKey","echo","disabled"]),u.disabled?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("h4",L,"选中范围："+Vue.toDisplayString(V.value),1))]),_:2},1024))),128))])}}});const A=p(k,[["__scopeId","data-v-4f97eb42"]]);export{A as default};
