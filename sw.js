if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const a=s=>l(s,i),o={module:{uri:i},exports:u,require:a};e[i]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-b8086290"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddAddressModal-9433beb5.js",revision:null},{url:"assets/AddProduct-18712231.css",revision:null},{url:"assets/AddProduct-cbf567c6.js",revision:null},{url:"assets/Addresses-587dd973.js",revision:null},{url:"assets/axios-28bc18a3.js",revision:null},{url:"assets/Backups-12eacf71.js",revision:null},{url:"assets/Cart-73ea4362.js",revision:null},{url:"assets/Checkout-43cb5f76.js",revision:null},{url:"assets/chunk-33PGJX5B-0bb99644.js",revision:null},{url:"assets/chunk-3V5HNFOM-3d294e74.js",revision:null},{url:"assets/chunk-3VH7AMBV-0c40d351.js",revision:null},{url:"assets/chunk-5FO2ZLZM-b613e64a.js",revision:null},{url:"assets/chunk-6XCF7NSR-7b933f42.js",revision:null},{url:"assets/chunk-ARKOWLPR-06cbcd87.js",revision:null},{url:"assets/chunk-BPJV7R7V-f60e18c4.js",revision:null},{url:"assets/chunk-DPSEBQMG-880911ac.js",revision:null},{url:"assets/chunk-GJO77I2I-6bc2c4b6.js",revision:null},{url:"assets/chunk-GYFRIY2Z-bed9457d.js",revision:null},{url:"assets/chunk-HFJCK6H7-706eea21.js",revision:null},{url:"assets/chunk-IJBC3YLI-6ce3e25a.js",revision:null},{url:"assets/chunk-IWVFML3N-6a374907.js",revision:null},{url:"assets/chunk-IXKZFKRY-440324a8.js",revision:null},{url:"assets/chunk-J356FWKS-1260d6a8.js",revision:null},{url:"assets/chunk-JMCRK7ZE-6c950521.js",revision:null},{url:"assets/chunk-KSQA4OTT-47b5c419.js",revision:null},{url:"assets/chunk-LB6CWFOC-afb3a818.js",revision:null},{url:"assets/chunk-MEU4ZZ42-6778153b.js",revision:null},{url:"assets/chunk-OEQDSMWZ-a5ca4fb9.js",revision:null},{url:"assets/chunk-OJ7ITIQ2-7bc14a1d.js",revision:null},{url:"assets/chunk-PVJ72NKC-aa1299e5.js",revision:null},{url:"assets/chunk-QJDVAY5Z-b603e486.js",revision:null},{url:"assets/chunk-QTKSMHLN-b3bed25b.js",revision:null},{url:"assets/chunk-RDQRB6BQ-1e8cf47f.js",revision:null},{url:"assets/chunk-RN6VKE3K-a344299b.js",revision:null},{url:"assets/chunk-S432VF2S-dbea8945.js",revision:null},{url:"assets/chunk-SRMZVY4F-2b1e74d1.js",revision:null},{url:"assets/chunk-UESP75NN-b90385c3.js",revision:null},{url:"assets/chunk-VJ54TX72-910cf7bc.js",revision:null},{url:"assets/chunk-W3H6TFKV-b1c9b2b3.js",revision:null},{url:"assets/chunk-WPAIWTI3-a4077d1e.js",revision:null},{url:"assets/chunk-YGVX4ESO-768d0041.js",revision:null},{url:"assets/chunk-YLPWWAYV-3e832c2d.js",revision:null},{url:"assets/chunk-Z3IFIKNA-5bb7d77a.js",revision:null},{url:"assets/chunk-Z47J5YMH-734426bc.js",revision:null},{url:"assets/Contact-a131c8b0.js",revision:null},{url:"assets/CreateSection-dba0aaee.js",revision:null},{url:"assets/Dashboard-5d92a645.js",revision:null},{url:"assets/descriptionblog-32f683fd.css",revision:null},{url:"assets/DescriptionBlog-61d05d22.js",revision:null},{url:"assets/DescriptionUser-3b2701dc.js",revision:null},{url:"assets/Encuestas-2295eb8e.js",revision:null},{url:"assets/Floatbutton-9fbdd1b8.js",revision:null},{url:"assets/Footer-1c4d8630.js",revision:null},{url:"assets/Home-42ec5c22.js",revision:null},{url:"assets/Home-737bf90c.css",revision:null},{url:"assets/icons8-altura-96-aeeb23ce.svg",revision:null},{url:"assets/icons8-de-acuerdo-100_2-c88c597c.svg",revision:null},{url:"assets/icons8-flor-64_2-f9ace148.svg",revision:null},{url:"assets/icons8-hospital-64_2-22b43651.svg",revision:null},{url:"assets/icons8-me-gusta-100_2-02fcae33.svg",revision:null},{url:"assets/icons8-oler-100_2-10d272db.svg",revision:null},{url:"assets/icons8-planta_2-8aea3fd7.svg",revision:null},{url:"assets/icons8-planta-100_1-6b5a4105.svg",revision:null},{url:"assets/icons8-regalo-64_2-c1f6951f.svg",revision:null},{url:"assets/index-4261abdc.js",revision:null},{url:"assets/index-53de60af.js",revision:null},{url:"assets/index-64bc36f3.js",revision:null},{url:"assets/index-6ec238a0.js",revision:null},{url:"assets/index-7e47b1d2.js",revision:null},{url:"assets/index-856c7563.js",revision:null},{url:"assets/index-921dcd7d.js",revision:null},{url:"assets/index-cd61ac83.css",revision:null},{url:"assets/index-d0bb2854.js",revision:null},{url:"assets/index-eaa72e81.js",revision:null},{url:"assets/LoggedUserNavbar-152c0576.js",revision:null},{url:"assets/Login-db427cc9.js",revision:null},{url:"assets/ModNavbar-7e3b2d22.js",revision:null},{url:"assets/Navbar-0ca1a6b7.js",revision:null},{url:"assets/NotFound-3973c983.js",revision:null},{url:"assets/notistack.esm-d132ee7a.js",revision:null},{url:"assets/page-6d91ebc3.js",revision:null},{url:"assets/page-7b3c8d0f.js",revision:null},{url:"assets/PrivacyPolicy-eebe5d8f.js",revision:null},{url:"assets/Product-8dcfa502.css",revision:null},{url:"assets/Product-e7fc4055.js",revision:null},{url:"assets/ProductCard-9c778ae4.js",revision:null},{url:"assets/ProductCard-a0712ef6.js",revision:null},{url:"assets/Products-a8870a22.js",revision:null},{url:"assets/Products-d6155efc.js",revision:null},{url:"assets/ProductsCardCategory-582881b2.js",revision:null},{url:"assets/ProductView-a08aaf6e.js",revision:null},{url:"assets/Security-1c252ca4.js",revision:null},{url:"assets/SecurityModal-f6d9e338.js",revision:null},{url:"assets/ShowSectionUser-efd4eb23.js",revision:null},{url:"assets/ShowSecttionAdmin-b77fa488.js",revision:null},{url:"assets/Signup-84c8afcd.js",revision:null},{url:"assets/slick-12459f22.svg",revision:null},{url:"assets/styles-compiled-21943111.css",revision:null},{url:"assets/styles-compiled-c2991737.js",revision:null},{url:"assets/UpdateSection-0f92065a.js",revision:null},{url:"assets/useFilter-d4612e16.js",revision:null},{url:"assets/usePrice-1387bd08.js",revision:null},{url:"assets/useProducts-380e3388.js",revision:null},{url:"assets/UserHeaderCard-7fde34f0.js",revision:null},{url:"assets/UserInformation-99758dea.js",revision:null},{url:"assets/UserInformationCards-674baae5.js",revision:null},{url:"assets/UserPersonalData-c6701306.js",revision:null},{url:"assets/UserProfile-e62eef8b.js",revision:null},{url:"assets/Users-521f25d5.js",revision:null},{url:"assets/UserUpdateModal-fc10127f.js",revision:null},{url:"assets/WhatsAppButton-84d711bd.js",revision:null},{url:"assets/yup-b18650ce.js",revision:null},{url:"Charco - Delete Trash.png",revision:"c63e895ec574eb95083fda6eb274f55f"},{url:"favicon.ico",revision:"6a2b7229996ef39a65816ddc3d31786e"},{url:"index.html",revision:"88bb2f95d2d48a6004123cae4129f5de"},{url:"registerSW.js",revision:"bf9e20dee70c0104b54bfb064a2391fa"},{url:"favicon.ico",revision:"6a2b7229996ef39a65816ddc3d31786e"},{url:"manifest.webmanifest",revision:"08b83054b94474ce85250b37a0d2fe40"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\.(?:png|jpg|jpeg|gif|svg)$/,new s.CacheFirst,"GET"),s.registerRoute(/^https:\/\/firebasestorage\.googleapis\.com\/.*$/,new s.StaleWhileRevalidate({cacheName:"firebase-storage",plugins:[]}),"GET")}));
