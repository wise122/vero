(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{285:function(t,e,r){"use strict";r.r(e);r(3),r(2),r(1),r(4),r(5);var n=r(14),o=r(0),l=(r(42),r(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={middleware:"landing",data:function(){return{toggle1:!0,type1:"text",form:{email:"",password:""},validation:{email:null,password:null},loading:!1}},methods:d(d({},Object(l.b)({userLogin:"auth/userLogin"})),{},{login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in t.loading=!0,t.validation)t.validation[r]=null;return e.next=4,t.$axios.post("/user/login",t.form).then((function(e){console.log(e.data.data),t.userLogin(e.data.data),t.$cookies.set("token",e.data.token),t.$router.push({name:"community-forum"})})).catch((function(e){e.response&&e.response.data.errors.forEach((function(e){t.validation[e.param]=!1}))}));case 4:t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}}),computed:{handleIcon1:function(){return this.toggle1?(this.type1="password","eye-slash-fill"):(this.type1="text","eye-fill")}}},f=r(27),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row vh-100 pt-5"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center"},[r("b-card",{staticClass:"w-100 bg-glass p-md-5"},[r("h1",{staticClass:"text-center my-5"},[t._v("Masuk")]),t._v(" "),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1"}},[r("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-1",type:"email",placeholder:"Masukkan email",state:t.validation.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validation.email}},[t._v("\n                        Email tidak valid\n                    ")])],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Kata Sandi:","label-for":"input-2"}},[r("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[r("b-icon",{staticStyle:{position:"absolute",right:"17px",top:"10px"},attrs:{icon:t.handleIcon1},on:{click:function(e){t.toggle1=!t.toggle1}}})]},proxy:!0}])},[t._v(" "),r("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-2",type:t.type1,placeholder:"Password",state:t.validation.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validation.password}},[t._v("\n                        password tidak valid\n                    ")])],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-3","label-for":"input-3"}},[r("b-form-checkbox",{attrs:{id:"checkbox-3",name:"checkbox-3",value:"1","unchecked-value":"0"},model:{value:t.form.rememberMe,callback:function(e){t.$set(t.form,"rememberMe",e)},expression:"form.rememberMe"}},[t._v("\n                        Remember Me\n                    ")])],1),t._v(" "),r("p",{staticClass:"text-center"},[r("b-button",{staticClass:"mb-3 px-5",attrs:{variant:"primary",pill:"",type:"submit",disabled:t.loading}},[t._v("Login")])],1),t._v(" "),r("b-link",{staticClass:"text-center"},[r("small",[t._v("Lupa Sandi? Klik disini")])]),t._v(" "),r("br"),t._v(" "),r("nuxt-link",{staticClass:"text-center",attrs:{to:"/register"}},[r("small",[t._v("Belum punya akun? Daftar disini!")])])],1)],1)],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-6 text-center text-white mt-5 d-flex justify-content-center align-items-center"},[r("h1",{staticClass:"mitrapabrik"},[t._v("SELAMAT "),r("br"),t._v(" DATANG")])])}],!1,null,"db672ba4",null);e.default=component.exports}}]);