import './polyfills.server.mjs';
import{A as y,F as B,I as q,K as M,L as k,M as N,N as h,O as $,P as R,S as U,Y as G,Z as Q,_ as A,a as D,b as T,c as l,d as j,e as O,f as C,g as L,h as d,i as a,j as g,k as v,l as s,m as F,n as i,o,p as u,q as E,r as I,s as P,t as S,u as w,v as p,w as V,x,y as m,z}from"./chunk-3ODW3P3B.mjs";var b=(()=>{class e{currentLanguageSubject=new D(this.getInitialLanguage());currentLanguage$=this.currentLanguageSubject.asObservable();constructor(){}getInitialLanguage(){return this.isBrowser()&&localStorage.getItem("language")||"en"}switchLanguage(){let t=this.currentLanguageSubject.value==="en"?"ar":"en";this.currentLanguageSubject.next(t),this.isBrowser()&&localStorage.setItem("language",t)}get currentLang(){return this.currentLanguageSubject.value}isBrowser(){return typeof window<"u"&&typeof localStorage<"u"}static \u0275fac=function(n){return new(n||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var re=(e,c)=>({"text-right":e,"text-left":c}),J=(()=>{class e{translationService;currentLanguage="en";constructor(t){this.translationService=t}ngOnInit(){this.translationService.currentLanguage$.subscribe(t=>{this.currentLanguage=t})}static \u0275fac=function(n){return new(n||e)(g(b))};static \u0275cmp=l({type:e,selectors:[["app-about-me"]],standalone:!0,features:[m],decls:5,vars:6,consts:[[1,"max-w-4xl","mx-auto",3,"ngClass"],[1,"text-light","text-4xl","font-bold","mb-4"],[1,"text-[#EAFF00]","font-mono","text-2xl","leading-relaxed"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"h2",1),p(2),o(),i(3,"p",2),p(4),o()()),n&2&&(s("ngClass",y(3,re,r.currentLanguage==="ar",r.currentLanguage==="en")),a(2),x(" ",r.currentLanguage==="en"?"About me":"\u0646\u0628\u0630\u0629 \u0639\u0646\u064A"," "),a(2),x(" ",r.currentLanguage==="en"?"I'm a full-stack web developer with strong experience in Angular and a solid background in ASP.NET. I enjoy building efficient and user-friendly applications, focusing on attention to detail and problem-solving. I work well on both front-end and back-end development, delivering scalable and maintainable solutions. I enjoy collaborating with teams and always aim to contribute to team success and company goals using modern web technologies.":"\u0623\u0646\u0627 \u0645\u0637\u0648\u0631 \u0648\u064A\u0628 \u0645\u062A\u0643\u0627\u0645\u0644 \u0623\u0645\u062A\u0644\u0643 \u062E\u0628\u0631\u0629 \u0642\u0648\u064A\u0629 \u0641\u064A Angular \u0648\u062E\u0644\u0641\u064A\u0629 \u0642\u0648\u064A\u0629 \u0641\u064A ASP.NET. \u0623\u0633\u062A\u0645\u062A\u0639 \u0628\u0628\u0646\u0627\u0621 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0641\u0639\u0627\u0644\u0629 \u0648\u0633\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u060C \u0648\u0623\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A. \u0623\u0639\u0645\u0644 \u062C\u064A\u062F\u0627\u064B \u0641\u064A \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629 \u0648\u0627\u0644\u062E\u0644\u0641\u064A\u0629\u060C \u062D\u064A\u062B \u0623\u0642\u062F\u0645 \u062D\u0644\u0648\u0644 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639 \u0648\u0633\u0647\u0644\u0629 \u0627\u0644\u0635\u064A\u0627\u0646\u0629. \u0623\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u0627\u0644\u0641\u0631\u0642 \u0648\u0623\u0647\u062F\u0641 \u062F\u0627\u0626\u0645\u064B\u0627 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064A \u0646\u062C\u0627\u062D \u0627\u0644\u0641\u0631\u064A\u0642 \u0648\u062A\u062D\u0642\u064A\u0642 \u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0634\u0631\u0643\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u062D\u062F\u064A\u062B\u0629."," "))},dependencies:[h,M,A]})}return e})();function ae(e,c){if(e&1&&(E(0),u(1,"img",5),I()),e&2){let t=c.$implicit;a(),s("src","assets/skilles/"+t,d)}}function ue(e,c){if(e&1&&(E(0),u(1,"img",5),I()),e&2){let t=c.$implicit;a(),s("src","assets/skilles/"+t,d)}}var K=(()=>{class e{skillImages=["git.svg","image 4.svg","image 5.svg","image 8.svg","image 17-1.svg","image 17.svg","image 18.svg","image2.svg","image3.svg","laravel.svg","MySQL.svg","PHP.svg"];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=l({type:e,selectors:[["app-skills"]],standalone:!0,features:[m],decls:7,vars:2,consts:[[1,"container","mx-auto","px-2","sm:px-4","py-4","sm:py-8","overflow-hidden"],[1,"text-light","text-2xl","sm:text-3xl","md:text-4xl","font-bold","mb-2","sm:mb-4","text-center"],[1,"marquee-wrapper","overflow-hidden","relative"],[1,"marquee-content","flex","items-center","space-x-4","sm:space-x-6","md:space-x-8"],[4,"ngFor","ngForOf"],["alt","Skill",1,"h-12","w-12","sm:h-16","sm:w-16","md:h-20","md:w-20","hover:scale-110","transition-transform","duration-500",3,"src"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"h2",1),p(2,"Skills"),o(),i(3,"div",2)(4,"div",3),v(5,ae,2,1,"ng-container",4)(6,ue,2,1,"ng-container",4),o()()()),n&2&&(a(5),s("ngForOf",r.skillImages),a(),s("ngForOf",r.skillImages))},dependencies:[h,k],styles:[".marquee-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;mask-image:linear-gradient(to right,transparent,black 20%,black 80%,transparent)}@keyframes _ngcontent-%COMP%_marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}.marquee-content[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_marquee 20s linear infinite alternate;white-space:nowrap}"]})}return e})();var W=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=l({type:e,selectors:[["app-certifications"]],standalone:!0,features:[m],decls:3,vars:1,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"text-center","py-16"],["alt","Sadiq Aldubaisi",1,"w-full","max-w-sm","sm:max-w-md","md:max-w-lg","lg:max-w-4xl","xl:max-w-5xl","2xl:max-w-6xl","mx-auto","rounded-3xl","shadow-lg","animate-fade-in","transform","transition-transform","duration-500","hover:scale-105",3,"src"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"section",1),u(2,"img",2),o()()),n&2&&(a(2),s("src","assets/img/arabic-image.png",d))}})}return e})();var X=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=l({type:e,selectors:[["app-contact-me"]],standalone:!0,features:[m],decls:2,vars:0,template:function(n,r){n&1&&(i(0,"p"),p(1,"contact-me works!"),o())}})}return e})();var se=(e,c)=>({"-translate-x-full":e,"translate-x-0":c}),le=()=>["/"];function me(e,c){if(e&1&&(i(0,"a",13),p(1),o()),e&2){let t=c.$implicit,n=w();s("href",t.path,d),a(),x(" ",t.label[n.currentLanguage]," ")}}function ce(e,c){if(e&1&&(i(0,"a",20),p(1),o()),e&2){let t=c.$implicit,n=w(2);s("routerLink",z(3,le))("fragment",t.path),a(),x(" ",t.label[n.currentLanguage]," ")}}function pe(e,c){if(e&1){let t=P();i(0,"div",14)(1,"button",15),S("click",function(){j(t);let r=w();return O(r.toggleMobileMenu())}),C(),i(2,"svg",16),u(3,"path",17),o()(),L(),i(4,"div",18),v(5,ce,2,4,"a",19),o()()}if(e&2){let t=w();s("ngClass",y(4,se,!t.isMobileMenuOpen,t.isMobileMenuOpen)),a(4),F("flex-row-reverse",t.currentLanguage==="ar"),a(),s("ngForOf",t.navLinks)}}var Y=(()=>{class e{translationService;isMobileMenuOpen=!1;navLinks=[{label:{en:"About me",ar:"\u0646\u0628\u0630\u0629 \u0639\u0646\u064A"},path:"#about-me"},{label:{en:"Skills",ar:"\u0645\u0647\u0627\u0631\u0627\u062A\u064A"},path:"#skills"},{label:{en:"Projects",ar:"\u0645\u0634\u0627\u0631\u064A\u0639\u064A"},path:"#projects"},{label:{en:"Experience",ar:"\u0627\u0644\u062E\u0628\u0631\u0629"},path:"#experience"},{label:{en:"Certifications",ar:"\u0627\u0644\u0634\u0647\u0627\u062F\u0627\u062A"},path:"#certifications"},{label:{en:"CV",ar:"\u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629"},path:"#cv"},{label:{en:"Contact me",ar:"\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A"},path:"#contact-me"}];constructor(t){this.translationService=t}switchLanguage(){this.translationService.switchLanguage()}get currentLanguage(){return this.translationService.currentLang}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}static \u0275fac=function(n){return new(n||e)(g(b))};static \u0275cmp=l({type:e,selectors:[["app-header"]],standalone:!0,features:[m],decls:15,vars:5,consts:[[1,"bg-dark-blue","w-full","max-w-[1500px]","h-[50px]","md:h-[70px]","rounded-[15px]","md:rounded-[40px]","mx-auto","my-2","shadow-lg"],[1,"flex","items-center","h-full","px-4","md:px-6","justify-between"],[1,"text-white","lg:hidden","flex","items-center","space-x-2",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["d","M4 6H20M4 12H14M4 18H9","stroke","#ffffff","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"hidden","lg:flex","items-center","space-x-4","lg:space-x-8"],["class","text-white hover:text-gray-300 text-lg font-semibold px-3 border-b-4 border-transparent hover:border-accent transition-all duration-300",3,"href",4,"ngFor","ngForOf"],[1,"text-white","flex","items-center","space-x-2","border-b-2","border-transparent","hover:border-accent","hover:text-neutral-200","transition-all","duration-300",3,"click"],["fill","#ffffff","width","20px","height","20px","viewBox","0 0 36 36","xmlns","http://www.w3.org/2000/svg"],["d","M30,3H14v5h2V5h14c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H17v7h-5.3L8,27.9V25H5c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h13v-2H5c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1H19v-7h11c1.7,0,3-1.3,3-3V6C33,4.3,31.7,3,30,3z"],["d","M6.2,22.9h2.4l0.6-1.6h3.1l0.6,1.6h2.4L11.9,14H9.5L6.2,22.9z M10.7,16.5l1,3.1h-2L10.7,16.5z"],["d","M20,17c1.1,0,2.6-0.3,4-1c1.4,0.7,3,1,4,1v-2c0,0-1,0-2.1-0.4c1.2-1.2,2.1-3,2.1-5.6V8h-3V6h-2v2h-3v2h5.9c-0.2,1.8-1,2.9-1.9,3.6c-0.6-0.5-1.2-1.2-1.6-2.1h-2.1c0.4,1.3,1,2.3,1.8,3.1C21.1,15,20.2,15,20,15V17z"],["class","fixed inset-y-0 left-0 w-64 bg-dark-blue shadow-lg z-50 p-6 lg:hidden transition-transform duration-300 transform",3,"ngClass",4,"ngIf"],[1,"text-white","hover:text-gray-300","text-lg","font-semibold","px-3","border-b-4","border-transparent","hover:border-accent","transition-all","duration-300",3,"href"],[1,"fixed","inset-y-0","left-0","w-64","bg-dark-blue","shadow-lg","z-50","p-6","lg:hidden","transition-transform","duration-300","transform",3,"ngClass"],[1,"absolute","top-4","right-4","text-white","z-50","flex","items-center","justify-center","w-10","h-10",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","stroke","#ff0000",1,"w-6","h-6"],["d","M18 7L7 18M7 7L18 18","stroke","#ff0000","stroke-width","1.2"],[1,"mt-8","flex","flex-col","space-y-4"],["class","text-white hover:text-gray-300 text-lg font-semibold px-3 border-b-4 border-transparent hover:border-accent transition-all duration-300",3,"routerLink","fragment",4,"ngFor","ngForOf"],[1,"text-white","hover:text-gray-300","text-lg","font-semibold","px-3","border-b-4","border-transparent","hover:border-accent","transition-all","duration-300",3,"routerLink","fragment"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"nav",1)(2,"button",2),S("click",function(){return r.toggleMobileMenu()}),C(),i(3,"svg",3),u(4,"path",4),o()(),L(),i(5,"div",5),v(6,me,2,2,"a",6),o(),i(7,"button",7),S("click",function(){return r.switchLanguage()}),i(8,"span"),p(9),o(),C(),i(10,"svg",8),u(11,"path",9)(12,"path",10)(13,"path",11),o()()(),v(14,pe,6,7,"div",12),o()),n&2&&(a(5),F("flex-row-reverse",r.currentLanguage==="ar"),a(),s("ngForOf",r.navLinks),a(3),V(r.currentLanguage==="en"?"\u0627\u0644\u0639\u0631\u0628\u064A\u0629":"English"),a(5),s("ngIf",r.isMobileMenuOpen))},dependencies:[h,M,k,N,A,G]})}return e})();var _=(()=>{class e{translationService;currentLanguage="en";constructor(t){this.translationService=t}ngOnInit(){this.translationService.currentLanguage$.subscribe(t=>{this.currentLanguage=t})}static \u0275fac=function(n){return new(n||e)(g(b))};static \u0275cmp=l({type:e,selectors:[["app-home"]],standalone:!0,features:[m],decls:3,vars:1,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"text-center","py-16","relative"],["alt","Sadiq Aldubaisi",1,"w-full","max-w-sm","sm:max-w-md","md:max-w-lg","lg:max-w-[1500px]","xl:max-w-[1536px]","2xl:max-w-[1800px]","mx-auto","rounded-3xl","shadow-lg","animate-fade-in","transform","transition-transform","duration-500","hover:scale-105",3,"src"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"section",1),u(2,"img",2),o()()),n&2&&(a(2),s("src",r.currentLanguage==="en"?"assets/img/english-image.png":"assets/img/arabic-image.png",d))}})}return e})();var ee=(()=>{class e{title="my-portfolio";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:18,vars:0,consts:[[1,"container","mx-auto","px-4"],[1,"fixed","inset-0","-z-10","bg-[#150C2B]","bg-cover","bg-center"],[1,"w-full","h-[1px]","bg-white","opacity-50","my-8"],["id","about-me"],[1,"mt-8"],["id","certifications"],["id","contact-me"],["id","skills"]],template:function(n,r){n&1&&(i(0,"div",0),u(1,"div",1)(2,"app-header")(3,"app-home")(4,"div",2),i(5,"section",3),u(6,"app-about-me"),o(),u(7,"div",2),i(8,"main",4)(9,"section",5),u(10,"app-certifications"),o(),u(11,"div",2),i(12,"section",6),u(13,"app-contact-me"),o(),u(14,"div",2),i(15,"section",7),u(16,"app-skills"),o(),u(17,"div",2),o()())},dependencies:[J,K,W,X,Y,_]})}return e})();var te=[{path:"",component:_},{path:"**",redirectTo:"",pathMatch:"full"}];var ne={providers:[B({eventCoalescing:!0}),Q(te),R()]};var de={providers:[U()]},ie=q(ne,de);var fe=()=>$(ee,ie),tt=fe;export{tt as a};
