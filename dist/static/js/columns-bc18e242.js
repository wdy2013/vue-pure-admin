import{P as f}from"./print-a6e42845.js";import{b}from"./data-fe7da62c.js";import{d as c}from"./index-8c77f9cd.js";function m(e){const a=Vue.ref(c(b,!0)),t=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],o=()=>{f(e.value.getTableDoms().tableWrapper).toPrint};function n({column:{property:r},rowIndex:d}){if(r==="id")return d<3?{background:"#87baf9"}:{background:"#87e8de"}}function l({columnIndex:r}){return r===0?{background:"#f3b2d0"}:{background:"#fafafa"}}function u({rowIndex:r}){return r%2===1?{background:"#ffa39e"}:{background:"#91d5ff"}}return{columns:t,dataList:a,print:o,rowStyle:u,cellStyle:n,headerCellStyle:l}}export{m as useColumns};
