import './polyfills.server.mjs';
import{C as O,F as V,H as A,I as z,J as B,K as P,L as $,M as G,P as N,T as R,W as U,a as _,b as H,c as i,d as F,e as E,f as x,g as k,h as u,i as c,j as v,k as h,l,m as j,n as o,o as r,p as m,q as T,r as C,s as g,t as s,u as D,v as L,w as a,x as I}from"./chunk-FOTYU3S6.mjs";var q=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-about-me"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,p){t&1&&(o(0,"p"),s(1,"about-me works!"),r())}})}return e})();var Z=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-skills"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,p){t&1&&(o(0,"p"),s(1,"skills works!"),r())}})}return e})();var J=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-projects"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,p){t&1&&(o(0,"p"),s(1,"projects works!"),r())}})}return e})();var K=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-experience"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,p){t&1&&(o(0,"p"),s(1,"experience works!"),r())}})}return e})();var b=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-certifications"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,p){t&1&&(o(0,"p"),s(1,"certifications works!"),r())}})}return e})();var w=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-contact-me"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,p){t&1&&(o(0,"p"),s(1,"contact-me works!"),r())}})}return e})();var M=(()=>{class e{currentLanguageSubject=new _(this.getInitialLanguage());currentLanguage$=this.currentLanguageSubject.asObservable();constructor(){}getInitialLanguage(){return this.isBrowser()&&localStorage.getItem("language")||"en"}switchLanguage(){let n=this.currentLanguageSubject.value==="en"?"ar":"en";this.currentLanguageSubject.next(n),this.isBrowser()&&localStorage.setItem("language",n)}get currentLang(){return this.currentLanguageSubject.value}isBrowser(){return typeof window<"u"&&typeof localStorage<"u"}static \u0275fac=function(t){return new(t||e)};static \u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ne=(e,f)=>({"-translate-x-full":e,"translate-x-0":f});function oe(e,f){if(e&1&&(o(0,"a",13),s(1),r()),e&2){let n=f.$implicit,t=g();l("href",n.path,u),c(),L(" ",n.label[t.currentLanguage]," ")}}function re(e,f){if(e&1&&(o(0,"a",20),s(1),r()),e&2){let n=f.$implicit,t=g(2);l("href",n.path,u),c(),L(" ",n.label[t.currentLanguage]," ")}}function ie(e,f){if(e&1){let n=T();o(0,"div",14)(1,"button",15),C("click",function(){F(n);let p=g();return E(p.toggleMobileMenu())}),x(),o(2,"svg",16),m(3,"path",17),r()(),k(),o(4,"div",18),h(5,re,2,2,"a",19),r()()}if(e&2){let n=g();l("ngClass",I(2,ne,!n.isMobileMenuOpen,n.isMobileMenuOpen)),c(5),l("ngForOf",n.navLinks)}}var S=(()=>{class e{translationService;isMobileMenuOpen=!1;navLinks=[{label:{en:"About me",ar:"\u0646\u0628\u0630\u0629 \u0639\u0646\u064A"},path:"#about"},{label:{en:"Skills",ar:"\u0645\u0647\u0627\u0631\u0627\u062A\u064A"},path:"#skills"},{label:{en:"Projects",ar:"\u0645\u0634\u0627\u0631\u064A\u0639\u064A"},path:"#projects"},{label:{en:"Experience",ar:"\u0627\u0644\u062E\u0628\u0631\u0629"},path:"#experience"},{label:{en:"Certifications",ar:"\u0627\u0644\u0634\u0647\u0627\u062F\u0627\u062A"},path:"#certifications"},{label:{en:"CV",ar:"\u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629"},path:"#cv"},{label:{en:"Contact me",ar:"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A"},path:"#contact"}];constructor(n){this.translationService=n}switchLanguage(){this.translationService.switchLanguage()}get currentLanguage(){return this.translationService.currentLang}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}static \u0275fac=function(t){return new(t||e)(v(M))};static \u0275cmp=i({type:e,selectors:[["app-header"]],standalone:!0,features:[a],decls:15,vars:5,consts:[[1,"bg-dark-blue","w-full","max-w-[1500px]","h-[50px]","md:h-[70px]","rounded-[15px]","md:rounded-[40px]","mx-auto","my-2","shadow-lg"],[1,"flex","items-center","h-full","px-4","md:px-6","justify-between"],[1,"text-white","lg:hidden","flex","items-center","space-x-2",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["d","M4 6H20M4 12H14M4 18H9","stroke","#ffffff","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"hidden","lg:flex","items-center","space-x-4","lg:space-x-8"],["class","text-white hover:text-gray-300 text-lg font-semibold px-3 border-b-4 border-transparent hover:border-accent transition-all duration-300",3,"href",4,"ngFor","ngForOf"],[1,"text-white","flex","items-center","space-x-2","border-b-2","border-transparent","hover:border-accent","hover:text-neutral-200","transition-all","duration-300",3,"click"],["fill","#ffffff","width","20px","height","20px","viewBox","0 0 36 36","xmlns","http://www.w3.org/2000/svg"],["d","M30,3H14v5h2V5h14c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H17v7h-5.3L8,27.9V25H5c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h13v-2H5c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1H19v-7h11c1.7,0,3-1.3,3-3V6C33,4.3,31.7,3,30,3z"],["d","M6.2,22.9h2.4l0.6-1.6h3.1l0.6,1.6h2.4L11.9,14H9.5L6.2,22.9z M10.7,16.5l1,3.1h-2L10.7,16.5z"],["d","M20,17c1.1,0,2.6-0.3,4-1c1.4,0.7,3,1,4,1v-2c0,0-1,0-2.1-0.4c1.2-1.2,2.1-3,2.1-5.6V8h-3V6h-2v2h-3v2h5.9c-0.2,1.8-1,2.9-1.9,3.6c-0.6-0.5-1.2-1.2-1.6-2.1h-2.1c0.4,1.3,1,2.3,1.8,3.1C21.1,15,20.2,15,20,15V17z"],["class","fixed inset-y-0 left-0 w-64 bg-dark-blue shadow-lg z-50 p-6 lg:hidden transition-transform duration-300 transform",3,"ngClass",4,"ngIf"],[1,"text-white","hover:text-gray-300","text-lg","font-semibold","px-3","border-b-4","border-transparent","hover:border-accent","transition-all","duration-300",3,"href"],[1,"fixed","inset-y-0","left-0","w-64","bg-dark-blue","shadow-lg","z-50","p-6","lg:hidden","transition-transform","duration-300","transform",3,"ngClass"],[1,"absolute","top-4","right-4","text-white","z-50","flex","items-center","justify-center","w-10","h-10",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","stroke","#ff0000",1,"w-6","h-6"],["d","M18 7L7 18M7 7L18 18","stroke","#ff0000","stroke-width","1.2"],[1,"flex","flex-col","space-y-4","mt-10"],["class","text-white text-lg font-semibold border-b-4 border-transparent hover:border-accent transition-all duration-300",3,"href",4,"ngFor","ngForOf"],[1,"text-white","text-lg","font-semibold","border-b-4","border-transparent","hover:border-accent","transition-all","duration-300",3,"href"]],template:function(t,p){t&1&&(o(0,"div",0)(1,"nav",1)(2,"button",2),C("click",function(){return p.toggleMobileMenu()}),x(),o(3,"svg",3),m(4,"path",4),r()(),k(),o(5,"div",5),h(6,oe,2,2,"a",6),r(),o(7,"button",7),C("click",function(){return p.switchLanguage()}),o(8,"span"),s(9),r(),x(),o(10,"svg",8),m(11,"path",9)(12,"path",10)(13,"path",11),r()()(),h(14,ie,6,5,"div",12),r()),t&2&&(c(5),j("flex-row-reverse",p.currentLanguage==="ar"),c(),l("ngForOf",p.navLinks),c(3),D(p.currentLanguage==="en"?"\u0627\u0644\u0639\u0631\u0628\u064A\u0629":"English"),c(5),l("ngIf",p.isMobileMenuOpen))},dependencies:[P,A,z,B]})}return e})();var y=(()=>{class e{translationService;currentLanguage="en";constructor(n){this.translationService=n}ngOnInit(){this.translationService.currentLanguage$.subscribe(n=>{this.currentLanguage=n})}static \u0275fac=function(t){return new(t||e)(v(M))};static \u0275cmp=i({type:e,selectors:[["app-home"]],standalone:!0,features:[a],decls:3,vars:1,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"text-center","py-16"],["alt","Sadiq Aldubaisi",1,"w-full","max-w-sm","sm:max-w-md","md:max-w-lg","lg:max-w-4xl","xl:max-w-5xl","2xl:max-w-6xl","mx-auto","rounded-3xl","shadow-lg",3,"src"]],template:function(t,p){t&1&&(o(0,"div",0)(1,"section",1),m(2,"img",2),r()()),t&2&&(c(2),l("src",p.currentLanguage==="en"?"assets/img/english-image.png":"assets/img/arabic-image.png",u))}})}return e})();var W=(()=>{class e{title="my-portfolio";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-root"]],standalone:!0,features:[a],decls:8,vars:0,consts:[[1,"container","mx-auto","px-4"],[1,"fixed","inset-0","-z-10","bg-[#150C2B]","bg-cover","bg-center"],[1,"mt-8"]],template:function(t,p){t&1&&(o(0,"div",0),m(1,"div",1)(2,"app-header")(3,"app-home"),o(4,"main",2),m(5,"router-outlet")(6,"app-certifications")(7,"app-contact-me"),r()())},dependencies:[R,b,w,S,y]})}return e})();var X=[{path:"about-me",component:q},{path:"skills",component:Z},{path:"projects",component:J},{path:"experience",component:K},{path:"certifications",component:b},{path:"contact-me",component:w},{path:"Header",component:S},{path:"Home",component:y},{path:"",redirectTo:"/about-me",pathMatch:"full"},{path:"**",redirectTo:"/about-me",pathMatch:"full"}];var Y={providers:[O({eventCoalescing:!0}),U(X),G()]};var ae={providers:[N()]},ee=V(Y,ae);var pe=()=>$(W,ee),et=pe;export{et as a};