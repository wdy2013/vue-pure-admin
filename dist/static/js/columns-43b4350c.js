import{m as s}from"./message-7116a117.js";import{b as r}from"./data-fe7da62c.js";import"./index-8c77f9cd.js";function m(a){const t=Vue.ref(""),o=[{label:"ID",prop:"id",width:80},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],n=Vue.reactive({pageSize:5,currentPage:1,layout:"prev, pager, next",total:r.length,background:!0,small:!0});function l({row:{name:e}}){return{cursor:"pointer",background:e===t.value?"#f5f7fa":""}}function u(e){t.value=e.name,a.value.blur(),s(`当前选中行的数据为：${JSON.stringify(e)}`,{type:"success"})}return{columns:o,pagination:n,selectValue:t,tableDataEdit:r,rowStyle:l,onRowClick:u}}export{m as useColumns};
