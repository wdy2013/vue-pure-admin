import{a as i}from"./data-c667adbf.js";const V=Vue.defineComponent({__name:"fluidHeight",setup(p){const l=[{label:"日期",prop:"date",width:"260",fixed:!0},{label:"姓名",prop:"name",width:"260"},{label:"地区",prop:"state",width:"260"},{label:"城市",prop:"city",width:"260"},{label:"地址",prop:"address",width:"260"},{label:"邮编",prop:"post-code",width:"260"},{label:"操作",width:"120",fixed:"right",slot:"operation"}],e=new Date,t=Vue.ref(i),n=o=>{t.value.splice(o,1)},r=()=>{e.setDate(e.getDate()+1),t.value.push({date:dayjs(e).format("YYYY-MM-DD"),name:"Tom",address:"No. 189, Grove St, Los Angeles",state:"California",city:"Los Angeles","post-code":"CA 90036"})};return(o,c)=>{const a=Vue.resolveComponent("el-button"),s=Vue.resolveComponent("pure-table");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(s,{data:t.value,columns:l,maxHeight:"500"},{operation:Vue.withCtx(({$index:d})=>[Vue.createVNode(a,{link:"",type:"primary",size:"small",onClick:Vue.withModifiers(u=>n(d),["prevent"])},{default:Vue.withCtx(()=>[Vue.createTextVNode(" Remove ")]),_:2},1032,["onClick"])]),_:1},8,["data"]),Vue.createVNode(a,{class:"mt-4",style:{width:"100%"},onClick:r},{default:Vue.withCtx(()=>[Vue.createTextVNode(" Add Item ")]),_:1})])}}});export{V as _};
