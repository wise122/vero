(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{287:function(t,e,n){"use strict";n.r(e);n(3),n(2),n(1),n(4),n(5);var l=n(14),o=n(0),r=(n(42),n(49));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={middleware:"landing",data:function(){return{tahap:0,toggle1:!0,type1:"password",toggle2:!0,type2:"password",fileUrl1:null,fileUrl2:null,file1:null,file2:null,accepted:!1,listProfesi:[{value:"",text:"-- Pilih profesi anda --",disabled:!0},"Profesi 1","Profesi 2","Profesi 3"],listTujuan:[{value:"",text:"-- Pilih tujuan anda --",disabled:!0},"Tujuan 1","Tujuan 2","Tujuan 3"],listRole:[{value:"",text:"-- Pilih salah satu --",disabled:!0},"Prinsipal","Proffesional","Partner"],listKategori:[{value:"",text:"-- Pilih kategori --",disabled:!0},"Kategori 1","Kategori 2","Kategori 3"],form:{foto_profil:"",nama_depan:"",nama_belakang:"",role:"",no_hp:"",asal_kota:"",profesi:"",tujuan:"",minat:"",nama_perusahaan:"",kategori_perusahaan:"",alamat_perusahaan:"",foto_perusahaan:"",email:"",password:"",cpassword:""},validation:{foto_profil:null,nama_depan:null,nama_belakang:null,role:null,no_hp:null,asal_kota:null,profesi:null,tujuan:null,minat:null,nama_perusahaan:null,kategori_perusahaan:null,alamat_perusahaan:null,foto_perusahaan:null,email:null,password:null,cpassword:null},msg:{foto_profil:null,nama_depan:null,nama_belakang:null,role:null,no_hp:null,asal_kota:null,profesi:null,tujuan:null,minat:null,nama_perusahaan:null,kategori_perusahaan:null,alamat_perusahaan:null,foto_perusahaan:null,email:null,password:null,cpassword:null},loading:!1,showModal:!1}},computed:{handleIcon1:function(){return this.toggle1?(this.type1="password","eye-slash-fill"):(this.type1="text","eye-fill")},handleIcon2:function(){return this.toggle2?(this.type2="password","eye-slash-fill"):(this.type2="text","eye-fill")}},methods:d(d({},Object(r.b)({userLogin:"auth/userLogin"})),{},{register:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in t.loading=!0,t.validation)t.validation[n]=null;if(1!=t.tahap){e.next=7;break}return e.next=5,t.$axios.post("/user/register/validate/".concat(t.tahap),t.form).then((function(e){console.log(e.data),t.userLogin(e.data.data),t.$cookies.set("token",e.data.token),t.tahap++})).catch((function(e){e.response.data.errors.forEach((function(e){t.validation[e.param]=!1,t.msg[e.param]=e.msg}))}));case 5:e.next=9;break;case 7:return e.next=9,t.$axios.put("/user/register/validate/".concat(t.tahap),t.form,{headers:{"auth-token":t.$cookies.get("token")}}).then((function(){return t.tahap++})).catch((function(e){e.response.data.errors.forEach((function(e){t.validation[e.param]=!1,t.msg[e.param]=e.msg}))}));case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e)})))()},uploadPicture:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var form;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(form=new FormData).append("foto",e["file".concat(t)]),n.next=4,e.$axios.post("/user/upload",form,{headers:{"Content-Type":"multipart/form-data","auth-token":e.$cookies.get("token")}}).then((function(n){e.showAlert=!0,200==n.status&&(e["fileUrl".concat(t)]="http://localhost:4000/profile/".concat(n.data,"?").concat((new Date).getTime()),e.form.foto=n.data),e.uploadMsg=n.msg,console.log(e.fileUrl)})).catch((function(t){return console.log(t.response)}));case 4:case"end":return n.stop()}}),n)})))()}})},v=n(27),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row pt-5"},[n("div",{staticClass:"col-12 h-100"},[n("b-tabs",{staticClass:"bg-glass w-100 h-100",staticStyle:{margin:"70px 0px"},attrs:{pills:"",card:"",fill:"",align:"center","active-nav-item-class":"bg-transparent"},model:{value:t.tahap,callback:function(e){t.tahap=e},expression:"tahap"}},[n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t.tahap>=0?n("a",{staticClass:"nav-link active"},[t._v("Persetujuan")]):n("a",{staticClass:"nav-link"},[t._v("Persetujuan")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"row text-center mb-3"},[n("div",{staticClass:"col-12"},[n("h1",[t._v("Persetujuan")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8"},[n("p",{staticClass:"text-justify",staticStyle:{overflow:"auto","max-height":"85%"}},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem \n                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem \n                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore uer adipiscing elit, sed diam nonummy nibh euimod tincidunt ut \n                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit \n                                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem \n                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore uer adipiscing elit, sed diam nonummy nibh euimod tincidunt ut \n                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit \n                                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem \n                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore uer adipiscing elit, sed diam nonummy nibh euimod tincidunt ut \n                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit \n                                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem \n                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore uer adipiscing elit, sed diam nonummy nibh euimod tincidunt ut \n                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit \n                        amet, consectetuer adipiscing elit, sed diam nonummy nibh euimod tincidunt ut laoreet \n                        dolore magna aliquam eratconsectetuer adipiscing elit, sed diam nonummy nibh euimod \n                        tincidunt ut laoreet dolore magna alconsectetuer adipiscing elit, sed diam nonummy nibh \n                        euimod tincidunt u")]),t._v(" "),n("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1",value:!0,"unchecked-value":!1},model:{value:t.accepted,callback:function(e){t.accepted=e},expression:"accepted"}},[t._v("\n                            Saya Mengerti dan menyutujui syarat dan ketentuan yang diberikan\n                        ")])],1),t._v(" "),n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-12"})]),t._v(" "),n("div",{staticClass:"row my-3"},[n("div",{staticClass:"col-6"},[n("nuxt-link",{attrs:{to:"/login"}},[t._v("Kembali")])],1),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("b-button",{staticClass:"px-5",attrs:{pill:"",variant:"primary",disabled:!t.accepted},on:{click:function(e){t.tahap++}}},[t._v("Lanjut")])],1)])]),t._v(" "),n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t.tahap>=1?n("a",{staticClass:"nav-link active"},[t._v("Registrasi")]):n("a",{staticClass:"nav-link"},[t._v("Registrasi")])]},proxy:!0}])},[n("div",{staticClass:"row text-center mb-3"},[n("div",{staticClass:"col-12"},[n("h1",[t._v("Registrasi")])])]),t._v(" "),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8",staticStyle:{"min-height":"50vh"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("b-form-group",{attrs:{id:"input-group-1",label:"Nama Depan:","label-for":"input-1"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-1",placeholder:"Nama Depan",state:t.validation.nama_depan},model:{value:t.form.nama_depan,callback:function(e){t.$set(t.form,"nama_depan",e)},expression:"form.nama_depan"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.nama_depan}},[t._v("\n                                    "+t._s(t.msg.nama_depan)+"\n                                ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("b-form-group",{attrs:{id:"input-group-2",label:"Nama Belakang:","label-for":"input-2"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-2",placeholder:"Nama Belakang",state:t.validation.nama_belakang},model:{value:t.form.nama_belakang,callback:function(e){t.$set(t.form,"nama_belakang",e)},expression:"form.nama_belakang"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.nama_belakang}},[t._v("\n                                    "+t._s(t.msg.nama_belakang)+"\n                                ")])],1)],1)]),t._v(" "),n("b-form-group",{attrs:{id:"input-group-role",label:"Siapa Anda:","label-for":"input-role"}},[n("b-form-select",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-role",state:t.validation.role,options:t.listRole},model:{value:t.form.role,callback:function(e){t.$set(t.form,"role",e)},expression:"form.role"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.role}},[t._v("\n                                "+t._s(t.msg.role)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-email",label:"Alamat Email:","label-for":"input-email"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-email",type:"email",placeholder:"Masukkan email yang aktif",state:t.validation.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.email}},[t._v("\n                                "+t._s(t.msg.email)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-password",label:"Password:","label-for":"input-password"}},[n("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[n("b-icon",{staticStyle:{position:"absolute",right:"17px",top:"10px"},attrs:{icon:t.handleIcon1},on:{click:function(e){t.toggle1=!t.toggle1}}})]},proxy:!0}])},[t._v(" "),n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-password",type:t.type1,placeholder:"Password",state:t.validation.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.password}},[t._v("\n                                "+t._s(t.msg.password)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-cpass",label:"Konfirmasi Password:","label-for":"input-cpass"}},[n("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[n("b-icon",{staticStyle:{position:"absolute",right:"17px",top:"10px"},attrs:{icon:t.handleIcon2},on:{click:function(e){t.toggle2=!t.toggle2}}})]},proxy:!0}])},[t._v(" "),n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-cpass",type:t.type2,placeholder:"Konfirmasi password",state:t.validation.cpassword},model:{value:t.form.cpassword,callback:function(e){t.$set(t.form,"cpassword",e)},expression:"form.cpassword"}})],1),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.cpassword}},[t._v("\n                                "+t._s(t.msg.cpassword)+"\n                            ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-2"})]),t._v(" "),n("div",{staticClass:"row my-3"},[n("div",{staticClass:"col-6"},[n("b-link",{on:{click:function(e){t.tahap--}}},[t._v("Kembali")])],1),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("b-button",{staticClass:"px-5",attrs:{pill:"",variant:"primary"},on:{click:t.register}},[t._v("Lanjut")])],1)])]),t._v(" "),n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t.tahap>=2?n("a",{staticClass:"nav-link active"},[t._v("Data Diri")]):n("a",{staticClass:"nav-link"},[t._v("Data Diri")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"row text-center mb-3"},[n("div",{staticClass:"col-12"},[n("h1",[t._v("Data Diri")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-3 d-flex justify-content-center align-items-center"},[n("div",[n("p",{staticClass:"text-center"},[n("b-avatar",{staticClass:"border border-primary",attrs:{src:t.fileUrl1,size:"10rem"}})],1),t._v(" "),n("b-form-file",{staticClass:"mt-3",attrs:{state:t.validation.foto_profil,accept:"image/jpeg, image/png, image/jiff",name:"file1",placeholder:"No File"},model:{value:t.file1,callback:function(e){t.file1=e},expression:"file1"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.foto_profil}},[t._v("\n                                Format file yang diterima: .png .jpg .jpeg. jfif\n                            ")]),t._v(" "),n("b-button",{staticClass:"d-flex justify-content-center my-3 mx-auto",attrs:{variant:"primary",pill:"",block:""},on:{click:function(e){return t.uploadPicture(1)}}},[t._v("\n                                Upload Gambar\n                            ")])],1)]),t._v(" "),n("div",{staticClass:"col-md-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("b-form-group",{attrs:{id:"input-group-3",label:"no. HP:","label-for":"input-3"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-3",placeholder:"nomor HP yang aktif",state:t.validation.no_hp},model:{value:t.form.no_hp,callback:function(e){t.$set(t.form,"no_hp",e)},expression:"form.no_hp"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.no_hp}},[t._v("\n                                        "+t._s(t.msg.no_hp)+"\n                                    ")])],1)],1),t._v(" "),n("div",{staticClass:"col-6"},[n("b-form-group",{attrs:{id:"input-group-4",label:"Asal Kota:","label-for":"input-4"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-4",placeholder:"Kota domisili anda",state:t.validation.asal_kota},model:{value:t.form.asal_kota,callback:function(e){t.$set(t.form,"asal_kota",e)},expression:"form.asal_kota"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.asal_kota}},[t._v("\n                                        "+t._s(t.msg.asal_kota)+"\n                                    ")])],1)],1)]),t._v(" "),n("b-form-group",{attrs:{id:"input-group-5",label:"Profesi:","label-for":"input-5"}},[n("b-form-select",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-5",state:t.validation.profesi,options:t.listProfesi},model:{value:t.form.profesi,callback:function(e){t.$set(t.form,"profesi",e)},expression:"form.profesi"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.profesi}},[t._v("\n                                "+t._s(t.msg.profesi)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-6",label:"Tujuan:","label-for":"input-6"}},[n("b-form-select",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-6",state:t.validation.tujuan,options:t.listTujuan},model:{value:t.form.tujuan,callback:function(e){t.$set(t.form,"tujuan",e)},expression:"form.tujuan"}},[n("b-form-select-option",{attrs:{value:null,disabled:""}})],1),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.tujuan}},[t._v("\n                                "+t._s(t.msg.tujuan)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-7",label:"Minat:","label-for":"input-7"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-7",placeholder:"Minat anda",state:t.validation.minat},model:{value:t.form.minat,callback:function(e){t.$set(t.form,"minat",e)},expression:"form.minat"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.minat}},[t._v("\n                                "+t._s(t.msg.minat)+"\n                            ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-2"})]),t._v(" "),n("div",{staticClass:"row my-3"},[n("div",{staticClass:"col-6"},[n("b-link",{on:{click:function(e){t.tahap--}}},[t._v("Kembali")])],1),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("b-button",{staticClass:"px-5",attrs:{pill:"",variant:"primary"},on:{click:t.register}},[t._v("Lanjut")])],1)])]),t._v(" "),n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t.tahap>=3?n("a",{staticClass:"nav-link active"},[t._v("Lanjutan")]):n("a",{staticClass:"nav-link"},[t._v("Lanjutan")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"row text-center mb-3"},[n("div",{staticClass:"col-12"},[n("h1",[t._v("Profil Perusahaan")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8"},[n("b-form-group",{attrs:{id:"input-group-8",label:"Nama Perusahaan:","label-for":"input-8"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-8",placeholder:"Nama Perusahaan",state:t.validation.nama_perusahaan},model:{value:t.form.nama_perusahaan,callback:function(e){t.$set(t.form,"nama_perusahaan",e)},expression:"form.nama_perusahaan"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.nama_perusahaan}},[t._v("\n                                "+t._s(t.msg.nama_perusahaan)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-9",label:"Kategori:","label-for":"input-9"}},[n("b-form-select",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-9",state:t.validation.kategori_perusahaan,options:t.listKategori},model:{value:t.form.kategori_perusahaan,callback:function(e){t.$set(t.form,"kategori_perusahaan",e)},expression:"form.kategori_perusahaan"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.kategori_perusahaan}},[t._v("\n                                "+t._s(t.msg.kategori_perusahaan)+"\n                            ")])],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-10",label:"Alamat Perusahaan:","label-for":"input-10"}},[n("b-form-input",{staticClass:"rounded-pill bg-glass",attrs:{id:"input-10",placeholder:"Alamat Perusahaan",state:t.validation.alamat_perusahaan},model:{value:t.form.alamat_perusahaan,callback:function(e){t.$set(t.form,"alamat_perusahaan",e)},expression:"form.alamat_perusahaan"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.alamat_perusahaan}},[t._v("\n                                "+t._s(t.msg.alamat_perusahaan)+"\n                            ")])],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("p",{staticClass:"text-center"},[n("b-avatar",{staticClass:"border border-primary",attrs:{src:t.fileUrl2,size:"10rem"}})],1),t._v(" "),n("b-form-file",{staticClass:"mt-3",attrs:{state:t.validation.foto_perusahaan,accept:"image/jpeg, image/png, image/jiff",name:"file2",placeholder:"No File"},model:{value:t.file2,callback:function(e){t.file2=e},expression:"file2"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.validation.foto_perusahaan}},[t._v("\n                                    Format file yang diterima: .png .jpg .jpeg. jfif\n                                ")]),t._v(" "),n("b-button",{staticClass:"d-flex justify-content-center my-3 mx-auto",attrs:{variant:"primary",pill:"",block:""},on:{click:function(e){return t.uploadPicture(1)}}},[t._v("\n                                    Upload Gambar\n                                ")])],1)])],1),t._v(" "),n("div",{staticClass:"col-md-2"})]),t._v(" "),n("div",{staticClass:"row my-3"},[n("div",{staticClass:"col-6"},[n("b-link",{on:{click:function(e){t.tahap--}}},[t._v("Kembali")])],1),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("b-button",{staticClass:"px-5",attrs:{pill:"",variant:"primary"},on:{click:t.register}},[t._v("Lanjut")])],1)])]),t._v(" "),n("b-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[t.tahap>=4?n("a",{staticClass:"nav-link active"},[t._v("Verifikasi")]):n("a",{staticClass:"nav-link"},[t._v("Verifikasi")])]},proxy:!0}])},[n("div",{staticClass:"row text-center mb-3"},[n("div",{staticClass:"col-12"},[n("h1",[t._v("Verifikasi")])])]),t._v(" "),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8 text-center"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mt-5"},[n("p",[t._v("Silahkan cek email anda untuk memverifikasi bahwa email yang anda gunakan sudah benar")])])]),t._v(" "),n("div",{staticClass:"row justify-content-center my-5"},[n("div",{staticClass:"col-auto"},[n("b-badge",{staticClass:"position-absolute",staticStyle:{bottom:"0px",right:"0px"},attrs:{variant:"danger"}},[n("h5",{staticClass:"px-2"},[t._v("1")])]),t._v(" "),n("b-icon",{attrs:{icon:"envelope-fill",variant:"light","font-scale":"7em"}})],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mt-5"},[t._v("\n                                Belum menerima email? "),n("b-link",[t._v("kirim ulang")])],1)])]),t._v(" "),n("div",{staticClass:"col-md-2"})]),t._v(" "),n("div",{staticClass:"row my-3"},[n("div",{staticClass:"col-6"},[n("b-link",{on:{click:function(e){t.tahap--}}},[t._v("Kembali")])],1)])])],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);