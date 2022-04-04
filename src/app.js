// <?php 
// let id = $_GE
// ?>;

// let url = document.URL.slice(27);
let url = document.URL.slice(43);
console.log(url);

  if(url == "index.php"){document.title="Home - Tallsea integrated services"; 
  document.description="Tallsea Integrated Services LTD is a privately owned company in parnership with Subsea Robotics Services, a Singapore based ROV company located at Loyang Offshore Supply Base, Singapore. The company was formed in 2006 to provide Remoted Operated Vehicles (ROVs) designed and manufactured specifically for the Oil and Gas industry."; }  
else if(url == "about.php")
  {document.title="About Us"; document.description="Tallsea Integrated Services LTD is a privately owned company in parnership with Subsea Robotics Services, a Singapore based ROV company located at Loyang Offshore Supply Base, Singapore. The company was formed in 2006 to provide Remoted Operated Vehicles (ROVs) designed and manufactured specifically for the Oil and Gas industry."}
else if(url == "contact.php")
  {document.title="Contact Us"; document.description="Tallsea Integrated Services LTD is interested in providing quality services to all our esteem clients. Reach out to us for enquiries and suggestions, we will respond as soon as possible."}
else if(url == "expert.php")
  {document.title="Our Expert"; document.description="Our management staffs bring with them more than 20 years of experience in the Oil and Gas Industry. This assures our clients that we possess the technical expertise required for the most ardous task."}  
else if(url == "careers.php")
  {document.title="Career Opportunities"; document.description="At tallsea we give you the opportunity to Showcase your skills with our available positions."}  
else if(url = "service.php?id=")
  {document.title="Our Services"; document.description="We are highly experienced in conducting major Pipeline Inspection, survey inspection, Maintenance and Repair, Construction Support, Seabed Survey, Pipe Laying, Platform Inspection and Freespan correction. We have good track record of delivering quality services to our clients."}  
  
  // console.log(url);///////////////////////////////////



let head_link_array = [
    {
"id":1,
"name":"Contact Us",
"link": "../home/contact.php"
    },
 {
"id":2,
"name":"Careers", 
"link": "../home/careers.php"
    },
{
"id":3,
"name":"Experts",
"link": "../home/expert.php"
    },    
];

let head_link = document.querySelector(".head_link");
let single_head_link = head_link_array.map(function(link){
    return `<a href="${link.link}" key="${link.id}"> ${link.name}</a>`;
}).join("");

head_link.innerHTML = single_head_link;

// //////////////////////////////////////
let head_social_array = [
    {
"id":1,
"icon":"../src/fa.png",
"link": ""
    },
    { 
 "id":2,
"icon":"../src/tw.png",
"link": ""
    }, 
{ 
 "id":3,
"icon":"../src/lin.png",
"link": ""
    },    
{ 
 "id":4,
"icon":"../src/inst.png",
"link": ""
    },    

];
let head_social = document.querySelector(".head_social");
let single_head_social = head_social_array.map(function(link){
    return `<a href="${link.link}" class="head_social_icon" key="${link.id}"><img src="${link.icon}"/> </a>`;
}).join("");

head_social.innerHTML = single_head_social;


// //////////////////////////

let business_info_array = [
{"id":1,
"icon":"../src/phone1.png",
"desc": "Call Us Today",
"info":"(234)803 099 1254",
},
{"id":2,
"icon":"../src/clock.png",
"desc": "Working Hours",
"info":"Mon-Fri: 8am - 5pm",
},
{"id":3,
"icon":"../src/place.png",
"desc": "#1 Ahoada Street Rumuibekwe,",
"info":"Port Harcourt, Nigeria.",
},

];
let business_info_parent = document.querySelector(".h2_business_info");
let single_business_info = business_info_array.map(function(info){
return `<article class="business_info_item">
<div class="item_desc">
     <span><img src="${info.icon}" alt="${info.desc}" class="item_desc_img"/></span>
     <span>${info.desc}</span>
</div>

<div class="item_info"><a>${info.info}</a></div>   
</article>`;
}).join("");

business_info_parent.innerHTML = single_business_info;

let item_info = document.querySelectorAll(".item_info");
let h_add = item_info[2].children[0].setAttribute("href","https://goo.gl/maps/JnpXDYT6fZi1gW3q9");


// //////////////////////////

let pages_array = [
    {"id":1,
        "name": "HOME",
    "link":"../home/index.php",
    },
    {"id":2,
    "name": "ABOUT US",
    "link":"../home/about.php",
    },
    {"id":3,
    "name": "CONTACT",
    "link":"../home/contact.php",
    },
    // {"id":4,
    // "name": "SERVICES",
    // "link":"../home/pages/services.php",
    // },
    ];

    let head_page_parent = document.querySelector(".page_div");
    let scroll_menu_parent = document.querySelector(".scroll_menu");
    let single_page = pages_array.map(function(page){
    return `<a href="${page.link}" >${page.name}</a>`;
    }).join("");
    
    head_page_parent.innerHTML = single_page;
    scroll_menu_parent.innerHTML= single_page;
    // ////////////////////////////////////////////

    // /////////////////////////////////////////////////
let footer_contact_array = [
    { "id":1,
"icon":"../src/phone2.png",
"desc":"(234)803 099 1254",
"link":"",
},
  { "id":2,
"icon":"../src/email.png",
"desc":"info@tallseaintegrated.com",
"link":"",
},
 { "id":3,
"icon":"../src/place2.png",
"desc":"#1 Ahoada St. Rumuibekwe,Port Harcourt, Nigeria.",
"link":"",
},

];

let f_cont_parent = document.querySelector(".f_contact_items");

let f_single_contact = footer_contact_array.map(function(contact){
    return `<li><div class="f_cont_img"><img src="${contact.icon}" alt="${contact.desc}"/></div>
    <div> <a  class="f_contact_list">${contact.desc}</a></div></li>`;
    
}).join("");

f_cont_parent.innerHTML= f_single_contact;

let contact_add = document.querySelectorAll(".f_contact_list");
let address_ele = contact_add[2];
let contact_address = address_ele.setAttribute("href", "https://goo.gl/maps/JnpXDYT6fZi1gW3q9");


// ///////////////////////////////////

let footer_social_array = [
    {
        "id":1,
        "link":"",
        "icon":"../src/fa.png",
        "name":"facebook",
    },
{
        "id":2,
        "link":"",
        "icon":"../src/tw.png",
        "name":"twitter",
    },
{
        "id":3,
        "link":"",
        "icon":"../src/lin.png",
        "name":"linkedin",
    },  
 {
        "id":4,
        "link":"",
        "icon":"../src/inst.png",
        "name":"twitter",
    },  
     
];
let footer_social_parent = document.querySelector(".footer_contact_social");

let single_social = footer_social_array.map(function(social){
    return `<a href="${social.link}" class="social_icon"><img src="${social.icon}" alt="${social.name}"/></a>`;
}).join("");

footer_social_parent.innerHTML = single_social;

///////////////////////////////////////////

let footer_pages_array = [
{
  "id":1,
  "name":"HOME",
  "link":"../home/",  
},

{
  "id":2,
  "name":"ABOUT US",
  "link":"../home/about.php",  
},
{
  "id":3,
  "name":"CONTACT",
  "link":"../home/contact.php",  
},
];
let f_pages_parent = document.querySelector(".footer_pages");

let single_footer_page = footer_pages_array.map(function(page){
return `<a href="${page.link}" class="single_pages">${page.name} </a> `;
}).join("");

f_pages_parent.innerHTML = single_footer_page;

// /////////////////////////////////

let mydate = new Date().getFullYear();
 
let footer_copy = document.querySelector(".footer_copy");

footer_copy.innerHTML = "tallsea integrated services LTD " + "&copy; "+ mydate + " all rights reserved.";

// /////////////////////////////////

let menu_header_cont = document.querySelector(".header_three");
let scroll_header = document.querySelector(".scroll_header");
scroll_header.classList.add("hide_scroll_header");

window.addEventListener("scroll", function(){
let menu_info = menu_header_cont.getBoundingClientRect();     
let menu_position = menu_info.top;

if(menu_position <= -84){
    scroll_header.classList.remove("hide_scroll_header");

console.log("my position");

} else if(menu_position >= -84){
scroll_header.classList.add("hide_scroll_header");
console.log("other position");
}

// /////////////////////////
});
// //////////////////////////////////////
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let side_navigation = document.querySelector(".navigation");
let navigation_cont = document.querySelector(".navigation_cont");
open.addEventListener("click", function(){

open.classList.add("hide_open");
close.classList.add("show_close");
side_navigation.classList.add("show_nav");
navigation_cont.classList.add("show_nav_cont");
});

close.addEventListener("click", function(){

open.classList.remove("hide_open");
close.classList.remove("show_close");
side_navigation.classList.remove("show_nav");
navigation_cont.classList.remove("show_nav_cont");
});

let mobile_link_array = [
   {
"id":1,
"name":"HOME",
"link": "../home/index.php"
    },
 {
"id":2,
"name":"ABOUT US", 
"link": "../home/about.php"
    },
{
"id":3,
"name":"CONTACT US",
"link": "../home/contact.php"
    },      
    
    {
"id":4,
"name":"OUR EXPERT",
"link": "../home/expert.php"
    },
 {
"id":5,
"name":"CAREERS", 
"link": "../home/careers.php"
    },
    
];
let mobile_nav_list_parent = document.querySelector(".mobile_nav_list_cont");

let single_mobile_nav_list = mobile_link_array.map(function(link){
return `<a href="${link.link}">${link.name}</a>`;
}).join("");

mobile_nav_list_parent.innerHTML = single_mobile_nav_list;

