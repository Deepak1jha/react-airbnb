(this.webpackJsonpairbnb=this.webpackJsonpairbnb||[]).push([[0],{51:function(e,t,a){e.exports=a(80)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),c=(a(56),a(57),a(58),a(24)),l=(a(59),a(94)),s=(a(60),a(61),a(62),a(42)),m=a(43),u=a.n(m);function d(){var e=Object(n.useState)(new Date),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(new Date),m=Object(c.a)(o,2),d=m[0],p=m[1],h={startDate:a,endDate:d,key:"selection"};return r.a.createElement("div",{className:"search"},r.a.createElement(s.DateRangePicker,{ranges:[h],onChange:function(e){i(e.selection.startDate),p(e.selection.endDate)}}),r.a.createElement("h2",null,"Number Of Guest",r.a.createElement(u.a,null)),r.a.createElement("input",{min:0,defaultValue:2,type:"number"}),r.a.createElement(l.a,null,"Search Airbnb"))}function p(e){var t=e.prop;console.log("bannnnneeeerrrr"),console.log(t),console.log("banner");var a=Object(n.useState)(!1),i=Object(c.a)(a,2),o=i[0],s=i[1];return r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner_search"},o&&r.a.createElement(d,null),r.a.createElement(l.a,{className:"banner_searchButton",variant:"outlined",onClick:function(){s(!o)}},o?"Hide":"Search Date")),r.a.createElement("div",{className:"banner_info"},r.a.createElement("h1",null,"Banner quote"),r.a.createElement("h5",null,"Banner quote put her and description"),r.a.createElement(l.a,{onClick:function(){t.history.push("/search"),console.log(t)},variant:"outlined"},"Explore Nearby Hotels")))}a(73);function h(e){var t=e.src,a=e.title,n=e.description,i=e.price;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:"icons"}),r.a.createElement("div",{className:"home_section"},r.a.createElement("div",{className:"card_info"},r.a.createElement("h2",null,a),r.a.createElement("h4",null,n),r.a.createElement("h3",null,i))))}function b(e){return r.a.createElement("div",{className:"home"},r.a.createElement(p,{prop:e}),r.a.createElement("div",{className:"home_section"},r.a.createElement(h,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),r.a.createElement(h,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),r.a.createElement(h,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})),r.a.createElement("div",{className:"home_section"},r.a.createElement(h,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),r.a.createElement(h,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),r.a.createElement(h,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Super-host with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})))}a(74);var g=a(44),E=a.n(g),f=a(45),v=a.n(f),_=a(46),w=a.n(_),N=a(95);function y(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"header_icon",src:"https://firebasestorage.googleapis.com/v0/b/airbnb-61db1.appspot.com/o/airbnblogo.png?alt=media&token=5bd4b036-dca3-472e-85c1-9d540123fc09",alt:"logo"}),r.a.createElement("div",{className:"header_center"},r.a.createElement("input",{type:"text"}),r.a.createElement(E.a,null)),r.a.createElement("div",{className:"header_right"},r.a.createElement("p",null,"Be a host"),r.a.createElement(N.a,null),r.a.createElement(v.a,null),r.a.createElement(w.a,null)))}a(75);function j(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"),r.a.createElement("p",null,"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"))}var P=a(30),S=a(4),k=(a(76),a(77),a(47)),F=a.n(k),x=a(48),B=a.n(x);function L(e){var t=e.img,a=e.location,n=e.title,i=e.description,o=e.star,c=e.price,l=e.total;return r.a.createElement("div",{className:"searchResult"},r.a.createElement("img",{src:t,alt:""}),r.a.createElement(F.a,{className:"searchResult_heart"}),r.a.createElement("div",{className:"searchResult_info"},r.a.createElement("div",{className:"searchResult_infoTop"},r.a.createElement("p",null,a),r.a.createElement("h3",null,n),r.a.createElement("p",null,"____"),r.a.createElement("p",null,i)),r.a.createElement("div",{className:"searchResult_infoBottom"},r.a.createElement("div",{className:"searchResult_stars"},r.a.createElement(B.a,{className:"searchResult_star"}),r.a.createElement("p",null,r.a.createElement("strong",null,o))),r.a.createElement("div",{className:"searchResults_price"},r.a.createElement("h2",null,c),r.a.createElement("p",null,l)))))}function W(e){return console.log(e),r.a.createElement("div",{className:"searchPage"},r.a.createElement("div",{className:"searchPage_info"},r.a.createElement("p",null,"62 stays \xb7 26 august to 30 august \xb7 2 guest"),r.a.createElement("h1",null,"Stays nearby"),r.a.createElement(l.a,{variant:"outlined"},"Cancellation Flexibility"),r.a.createElement(l.a,{variant:"outlined"},"Type of place"),r.a.createElement(l.a,{variant:"outlined"},"Price"),r.a.createElement(l.a,{variant:"outlined"},"Rooms and beds"),r.a.createElement(l.a,{variant:"outlined"},"More filters")),r.a.createElement(L,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\xa330 / night",total:"\xa3117 total"}),r.a.createElement(L,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\xa340 / night",total:"\xa3157 total"}),r.a.createElement(L,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),r.a.createElement(L,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),r.a.createElement(L,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\xa360 / night",total:"\xa3450 total"}),r.a.createElement(L,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),r.a.createElement(L,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\xa390 / night",total:"\xa3650 total"}))}var A=function(){return r.a.createElement(P.a,null,r.a.createElement(y,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(b,e)}}),r.a.createElement(S.a,{path:"/search",exact:!0,component:W})),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.b9e6dd49.chunk.js.map