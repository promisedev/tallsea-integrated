let slides = document.querySelectorAll(".slides");

slides.forEach(function(slide, index){
    slide.style.bottom= `-${index * 100}%`;
});

let counter = 0;
setInterval(nextslide, 9000);

function nextslide(){
counter++;
if(counter === slides.length){counter = 0;}

slides.forEach(function(slide){
slide.style.transform = `translateY(-${counter * 100}%)` ;
});

}

let slide_text1 = document.querySelector(".txt1");
let slide_text2 = document.querySelector(".txt2");
let slide_text3 = document.querySelector(".txt3");
let slide_text4 = document.querySelector(".txt4");

window.addEventListener("DOMContentLoaded", function(){
// console.log(slide_text1);
slide_text1.classList.add("txt1_display"); 
setInterval(function(){
 slide_text1.classList.toggle("txt1_display");  
 
//  setTimeout(function(){
//  slide_text.classList.remove("txt1_display");}, 9005);

},9040);
// /////////////////////////////////////////////////
// console.log(slide_text2);
// //////////////////////////////////////////
setInterval(function(){
 slide_text2.classList.toggle("txt2_display");  
 
//  setTimeout(function(){
//  slide_text2.classList.toggle("txt2_display");}, 9005);

},9040);
// //////////////////////////////////////////
slide_text3.classList.add("txt3_display"); 
setInterval(function(){
 slide_text3.classList.toggle("txt3_display");  
 
//  setTimeout(function(){
//  slide_text2.classList.toggle("txt2_display");}, 9005);

},9040);
// //////////////////////////////////////////
setInterval(function(){
 slide_text4.classList.toggle("txt4_display");  
 
//  setTimeout(function(){
//  slide_text2.classList.toggle("txt2_display");}, 9005);

},9040);
// /////////////////////////////////////
});

// ////////////////////////////////////////////
let serve_array = [
    {
      "id":1,
      "desc":"Major Pipeline Inspection",  
    },
{
      "id":2,
      "desc":"Survey Inspection",  
    },
{
      "id":3,
      "desc":"Maintenance and repair",  
    },
{
      "id":4,
      "desc":"Construction Support",  
    },
{
      "id":5,
      "desc":"Seabed survey",  
    },   

{
      "id":6,
      "desc":"pipe laying ",  
    },
{
      "id":7,
      "desc":"platform inspection ",  
    },    
{
      "id":7,
      "desc":"freespan correction ",  
    },     
];
let serve_parent =  document.querySelector(".serve_list_item");

let single_serve = serve_array.map(function(serve){
return `<li> ${serve.desc}</li>`;
}).join("");
serve_parent.innerHTML = single_serve;


// //////////////////////////////////////////////
let service_array = [
    {
      "id":1,
      "title": "Subsea Engineering",
      "desc":"some little description about the services tall sea integrated offers to the general public and more other some", 
      "link": "../home/service.php?id=1",
      "bg":"../src/service1.png",
    },
{
      "id":2,
      "title": "Offshore Installation",
      "desc":"some little description about the services tall sea integrated offers to the general public and more other some ", 
      "link": "../home/service.php?id=2",
      "bg":"../src/service2.png",
    },
{
      "id":3,
      "title": "Subsea Intervention/maintenance services",
      "desc":"some little description about the services tall sea integrated offers to the general public and more other some", 
      "link": "../home/service.php?id=3",
      "bg":"../src/service3.png",
    },
{
      "id":4,
      "title": "Construction/Commisioning Services",
      "desc":"some little description about the services tall sea integrated offers to the general public and more other some  ", 
      "link": "../home/service.php?id=4",
      "bg":"../src/service4.png",
    },
{
      "id":5,
      "title": "Procurement Services",
      "desc":"some little description about the services tall sea integrated offers to the general public and more other some  ", 
      "link": "../home/service.php?id=5",
      "bg":"../src/service5.png",
    }, 
{
      "id":6,
      "title": "Drill Support Operation",
      "desc":"This range from Exploravion Drilling where the ROV provide a basic level of observation and inspection, through Developement...  ", 
      "link": "../home/service.php?id=6",
      "bg":"../src/service6.png",
    }, 
{
      "id":7,
      "title": "Offshore Vessle Service",
      "desc":"some little description about the services tall sea integrated offers to the general some little description", 
      "link": "../home/service.php?id=7",
      "bg":"../src/service7.png",
    }, 
{
      "id":8,
      "title": "Manpower supply Services",
      "desc":"some little description about the services tall sea integrated offers to the general some little description", 
      "link": "../home/service.php?id=8",
      "bg":"../src/service8.png",
    },    
           
];

let service_parent = document.querySelector(".service_cont");

let single_service = service_array.map(function(service){
return `<article class="service_item">
<div class="service_img" style="background:url('${service.bg}'); background-size:100% 100%;
background-repeat:no-repeat"></div>
<div class="service_title">${service.title}</div>
<div class="service_desc">${service.desc}</div>
<div class="service_more">
    <a href="${service.link}" class="service_anchor">Read More</a>
</div> 
</article>`;
}).join("");

service_parent.innerHTML = single_service;

let service_item = document.querySelectorAll(".service_item");
service_item.forEach(function(item){


item.addEventListener("mouseover",function(e){

// let title = document.querySelectorAll(".service_title");
  
   let myele = e.currentTarget;

    // console.log(myele);
   let ele_anchor = myele.children[3].children[0];
//    console.log(ele_anchor);
    ele_anchor.classList.add("change_anchor_bg");
   let ele_children = myele.children[1];
   ele_children.classList.add("change_title_color");
// console.log(ele_children);

   myele.classList.add("change_service_bg"); 
  
});

item.addEventListener("mouseout",function(e){

   let myele = e.currentTarget;
   let ele_anchor = myele.children[3].children[0];
//    console.log(ele_anchor);
    ele_anchor.classList.remove("change_anchor_bg");
   let ele_children = myele.children[1];
   ele_children.classList.remove("change_title_color");
// console.log(ele_children);
   myele.classList.remove("change_service_bg"); 

  let title = document.querySelectorAll(".service_title");


});
});

let project_array = [
    {
"id":1,
"bg":"../src/project1.png",
"title":"UWILD FSO Hull Inspection/Mooring Inspection.",
"location":"Yetagun Field, Offshore Myanmmar.",
"rov":"Ultimate Dragon 2 100HP.",
    },
{
"id":2,
"bg":"../src/project2.png",
"title":" 18'' Gas Pipeline CKC to CKR Inspection.",
"location":"Cakerawala Field.",
"rov":"Super Intan 75HP.",
    },
{
"id":3,
"bg":"../src/project3.png",
"title":"Pipeline Survey, Installation.",
"location":"Kinyaly, Turkmenistan.",
"rov":"Super Intan 75HP.",
    },
 {
"id":4,
"bg":"../src/project4.png",
"title":"Kinabalu Freespan Correction.",
"location":"Kinabalu.",
"rov":"Dragon 3 40HP/ Ultimate Dragon 2 100HP.",
    },
{
"id":5,
"bg":"../src/project5.png",
"title":"FPSO Mooring Chain inspection,GO/NO-GO Gauge measurement of chain/ wire rope, marine growth Cleaning. BUMI ARMADA FPSO, OYO Field/ PEM.",
"location":"OFFSHORE Nigeria.",
"rov":"",
    },    
{
"id":6,
"bg":"../src/project6.png",
"title":"Petronas Campaign 2011-2014.",
"location":"East and West Malaysia.",
"rov":"Dragon 1/Dragon 3/ Dragon 4- 40HP.",
    },    
{
"id":7,
"bg":"../src/project7.png",
"title":"Removal of lift bags, bolt removal, tie in spool, pre installation survey, spool survey and installation.",
"location":"Northern Arthith PLEM, Cakerawala Field, Thailand.",
"rov":"Super Intan- 75HP.",
    }, 
{
"id":8,
"bg":"../src/project8.png",
"title":"Provision of Underwater Inspection for PM-3 CAA Jackets and Pipelines and PM-305 Jacket Operation ",
"location":"Kemaman Supply Base, Malaysia.",
"rov":"Super Itan 1 c/w TMS System 75HP.",
    }, 
{
"id":9,
"bg":"../src/project10.png",
"title":"ROV Pipeline, Riser Survey.",
"location":"",
"rov":"Super Intan 1.",
    },
    {
"id":10,
"bg":"../src/project9.png",
"title":"Forcados Export Pipeline Inspection, ARIS 3000 Sonar, Leak Point inspection and survey.",
"location":"SHELL/Forcados Shallow Offshore, Nigeria.",
"rov":"Seaeye Falcon",
    },    
{
"id":11,
"bg":"../src/project10.png",
"title":"Field Maintenance Vessel Services.",
"location":"MPN Field, Nigeria",
"rov":"",
    },
{
"id":12,
"bg":"../src/project11.png",
"title":"SBM Chain inspection, wellhead inspection, GVI, CP, FMD, riser inspection, LCOT SBM inspection, structure inspection, wellhead subsea tree inspection with CP.",
"location":"LCOT, South Furious Field, Bintulu, Serai WH1, M1DR CRA GAS P/L, E11R B, V A, M3 field, Saderi Wellhead 101-102 A, F23 Q A, F6 KA, 28”.",
"rov":"Viper 04 40HP.",
    },    
];

let project_cont = document.querySelector(".project_container");

let single_project = project_array.map(function(project, index){
    
    return `<article class="project_items" style="left:${index*25}%;" key="${project.id}">
     <div class="project_desc_img" style=" background:url('${project.bg}'); baackground-repeat:no-repeat;
     background-size:100% 100%"></div>
     <div class="project_desc_cont">
         <article class="project_title">${project.title}</article>
        <article class="project_desc">
         <p><b>Location:</b>  ${project.location}</p>
         <p><b>ROV System:</b>  ${project.rov}</p>
         </article>
            
     </div>
    </article>`;
    
}).join("");

project_cont.innerHTML= single_project;


let project_items = document.querySelectorAll(".project_items");

let project_counter = 0;

setInterval(next_project, 2000);

function next_project(){
    project_counter++;
    // console.log(project_counter);
    if(project_counter === (project_items.length)+9){setTimeout(function(){project_counter = 0},1000);}

    project_items.forEach(function(project){
        project.style.transform = `translateX(-${project_counter*45}%)`;
    });
}

// /////////////////////////////////////////
let project_cont2 = document.querySelector(".project_container2");

let single_project2 = project_array.map(function(project, index){
    
    return `<article class="project_items2" style="left:${index*100}%;">
    <div class="project_desc_img" style=" background:url('${project.bg}'); baackground-repeat:no-repeat;
    background-size:100% 100%"></div>
    <div class="project_desc_cont">
        <article class="project_title">${project.title}</article>
       <article class="project_desc">
       <p><b>Location:</b>  ${project.location}</p>
         <p><b>ROV System:</b>  ${project.rov}</p>
       </article>
         
     </div>
    </article>`;
    
}).join("");

project_cont2.innerHTML= single_project2;


let project_items2 = document.querySelectorAll(".project_items2");

let project_counter2 = 0;

setInterval(next_project2, 3000);

function next_project2(){
    project_counter2++;
    // console.log(project_counter);
    if(project_counter2 === project_items2.length){project_counter2 = 0;}

    project_items2.forEach(function(project){
        project.style.transform = `translateX(-${project_counter2 * 100}%)`;
    });
} 

// //////////////////////// expert////////////////////////////////

let expert_array =[
    {
      "id":1,
      "avatar": "../src/expert1.png",
      "name":"Mdm Yvonne Yeo",
      "role": "Managing Director (Subsea Robotics)",
      "bio":"Yvonne came from the building and construction sector where she developed superior project management and negotiation skills...",
    },
    {
        "id":2,
        "avatar": "../src/expert2.png",
        "name":"Mr Philippe Chew",
        "role": "ROV Director",
        "bio":"Philippe has had more than 20 years experience in the Oil and Gas industry...",
      },

      {
        "id":3,
        "avatar": "../src/expert3.png",
        "name":"Mr Junior Richard Dias",
        "role": "ROV Workshop Manager",
        "bio":"Over 25 years in the ROV industry having worked in Myanmar, China, India, Thailand, Indonesia, Malaysian offshore sector...",
      },
{
        "id":4,
        "avatar": "../src/expert4.png",
        "name":"Mr Joseph Ashafa",
        "role": "Nigeria Base Manager",
        "bio":"Over 10 years experience in the ROV Industry. Major projects involved in - Dredging DOP intervention/valve function, Hot Stab, pipeline survey and leak detection...",
      },
 {
        "id":5,
        "avatar": "../src/expert5.png",
        "name":"Mr Prosper Ordu",
        "role": "ROV Manager/Document Controller",
        "bio":"Over 5 years of experience in the ROV Industry, Equipment operated and maintained over his career are Dynacon/Lawson launch and recovery system, Flying lead Oriented tool...",
      },     
];

let expert_parent = document.querySelector(".expert_container");
let single_expert = expert_array.map(function(expert, index){
    return `<div class="expert_items" key="${expert.id}" style="left:${index*30}%">
    <article class="avatar" style="background:url('${expert.avatar}');
    background-repeat:no-repeat; background-size:100% 100%"></article>
    <article class="expert_name">${expert.name}</article>
    <article class="expert_role">${expert.role}</article>
    <article class="expert_bio">${expert.bio}</article>
  </div>`;
}).join("");

expert_parent.innerHTML = single_expert;

let h_expert_item = document.querySelectorAll(".expert_items");
let h_ex_counter = 0;

setInterval(h_ex_item, 3000);

function h_ex_item(){
    h_ex_counter++;
    // console.log(project_counter);
    if(h_ex_counter === h_expert_item.length){h_ex_counter = 0;}

    h_expert_item.forEach(function(ex){
        ex.style.transform = `translateX(-${h_ex_counter * 45}%)`;
    });
}


// ------------------------------------------------//
let expert_parent2 = document.querySelector(".expert_container2");
let single_expert2 = expert_array.map(function(expert,index){
    return `<div class="expert_items2" key="${expert.id}" style="left:${index*100}%;">
    <article class="avatar" style="background:url('${expert.avatar}');
    background-repeat:no-repeat; background-size:100% 100%;"></article>
    <article class="expert_name">${expert.name}</article>
    <article class="expert_role">${expert.role}</article>
    <article class="expert_bio">${expert.bio}</article>
  </div>`;
}).join("");

expert_parent2.innerHTML = single_expert2;

let my_expert_items2 = document.querySelectorAll(".expert_items2");

my_expert_items2.forEach(function(expert){
let expert_counter = 0;
setInterval(nextexpert, 3000);

function nextexpert(){
expert_counter++;
if(expert_counter === my_expert_items2.length){expert_counter=0;}

expert.style.transform = `translateX(-${expert_counter*100}%)`;

}

});

// ////////////partner///////////////////////////

let partner_array = [
    {
        "id":1,
        "icon":"../src/partner1.png",
    },

];

let parent_partner = document.querySelector(".partner_item_cont");

let single_partner = partner_array.map(function(partner, index){

    return `<article class="partner_items" style="background:url('${partner.icon}');
    background-repeat: no-repeat; background-size:100% 100%;%"></article>`;
}).join("");

parent_partner.innerHTML = single_partner;

// /////////////////////////////////////////////
let parent_partner2 = document.querySelector(".partner_item_cont2");

let single_partner2 = partner_array.map(function(partner, index){

    return `<article class="partner_items2" style="background:url('${partner.icon}');
    background-repeat: no-repeat; background-size:100% 100%;left:${index*100}%"></article>`;
}).join("");

parent_partner2.innerHTML = single_partner2;


let partner_items2 =document.querySelectorAll(".partner_items2");


partner_items2.forEach(function(partner){
let partner_counter =0;
setInterval(next_partner, 3000);

function next_partner(){
   partner_counter++;
   if(partner_counter === partner_items2.length){partner_counter=0;} 
   partner.style.transform = `translateX(-${partner_counter*100}%)`;
}
});

