"use strict";(self.webpackChunksinsawad=self.webpackChunksinsawad||[]).push([[790],{8008:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(1883),l=t(7294),c=t(2246);var r=e=>{let{lineId:a}=e;const t=(0,c.e)(a);return l.createElement("a",{href:t,className:"line-qr"},l.createElement("img",{src:`/images/line-qr--${a}.jpg`,alt:`lineID: ${a}`}))};var m=()=>{const e=(0,n.useStaticQuery)("1055294533"),{sinsawad:a}=e;return l.createElement("div",{className:"company-info-wrapper"},l.createElement("div",{className:"company-info-container"},l.createElement("div",{className:"company-info-header"},l.createElement("h2",null,a.companyName)),l.createElement("div",{className:"company-info-body"},l.createElement("div",{className:"company-info-body-item"},a.companyAddress.join(" "))),l.createElement("div",{className:"company-info-footer"},l.createElement("div",{className:"company-info-footer-item"},l.createElement("div",null,"เวลาทำการ"),l.createElement("div",null,a.workingHours)),l.createElement("div",{className:"company-info-footer-item"},a.phone.map((e=>l.createElement("div",{className:"company-contact-media",key:`phone-${e}`},l.createElement("i",{className:(e.replace(/-/g,"").startsWith("02")?"fa-solid fa-square-phone":"fa-solid fa-mobile-alt")+" contact-media"}),l.createElement("a",{href:`tel:${e.replace(/-/g,"")}`},e))))),l.createElement("div",{className:"company-info-footer-item"},l.createElement("div",{className:"company-contact-media email"},l.createElement("i",{className:"fa-solid fa-at"}),l.createElement("a",{href:`mailto:${a.email}`},a.email))),l.createElement("div",{className:"company-info-footer-item"},l.createElement("div",{className:"company-contact-media line"},a.lineIds.map((e=>l.createElement(r,{lineId:e,key:`line-id--${e}`}))))))))}},4875:function(e,a,t){var n=t(1883),l=t(7294);a.Z=e=>{let{limit:a=1/0,productList:t=[]}=e,c=(0,n.useStaticQuery)("725724024").allProduct.nodes.slice(0,a);return t.length>0&&(c=t),l.createElement("div",null,c.map((e=>l.createElement("div",{key:e.key,className:"product-listing"},l.createElement("div",{className:"product-image"},l.createElement("img",{src:e.productImageUrl,alt:e.productName})),l.createElement("div",{className:"product-info"},l.createElement("h2",null,e.productName),l.createElement("p",null,l.createElement("span",{className:"mr"},"กลุ่มผลิตภัณฑ์:"),e.categories.map((e=>l.createElement("a",{key:e.key,className:"button button-outline-primary mr",href:`/category/${e.key}`},e.categoryName)))),l.createElement("p",null,l.createElement("span",{className:"mr"},"คำค้น:"),e.keywords.map((e=>l.createElement("a",{key:e.key,className:"button button-outline-primary mr",href:`/keyword/${e.key}`},e.keyword)))),l.createElement("p",null,l.createElement(n.Link,{to:`/product/${e.key}`,className:"button button-primary"},"รายละเอียด")))))))}},180:function(e,a,t){var n=t(7294),l=t(9340),c=t(1699);a.Z=e=>{let{children:a,title:t="",text:r="",heroClassName:m}=e;return n.createElement(l.Z,null,n.createElement(c.Z,{header:t,text:r,className:m}),a)}},4611:function(e,a,t){t.r(a);var n=t(7294),l=t(8008),c=t(5191),r=t(4875),m=t(180);a.default=e=>{const{pageContext:a,location:t}=e;return n.createElement(m.Z,{title:a.keyword,text:"คำค้นผลิตภัณฑ์",heroClassName:"banner-static banner-2"},n.createElement(c.Z,{location:t,description:`คำค้นหา - ${a.keyword}`}),n.createElement(r.Z,{productList:a.products}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-templates-keyword-js-bd77c20a5eed1ecedc16.js.map