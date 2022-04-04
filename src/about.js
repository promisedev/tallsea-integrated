let about_slide_array=[
    {"id":1,
    "image":"../src/about3.png",
    },
{"id":2, 
    "image":"../src/about4.png",
    },
{"id":3,
    "image":"../src/about1.png",
    },
{"id":4,
    "image":"../src/about2.png",
    },    
{"id":5,
    "image":"../src/about5.png",
    }, 
{"id":6,
    "image":"../src/about6.png",
    },    
];

let about_slides_parent = document.querySelector(".about_image_div");

let single_about_slide = about_slide_array.map(function(slide, index){
    return `<article class="about_slides" style="background:url('${slide.image}')
    ; background-size:100% 100%; background-repeat:no-repeat; left:${index*100}%"></article>`;
}).join("");

about_slides_parent.innerHTML = single_about_slide;


let about_slides = document.querySelectorAll(".about_slides");
let about_count = 0;
setInterval(nextslide, 6000);

function nextslide(){
about_count++;
if(about_count == about_slides.length){about_count = 0;}
about_slides.forEach(function(slide){
slide.style.transform = `translateX(-${about_count*100}%)`
});

}

// -----------------------------------------------

let stats_array = [
{"id":1,
"icon":"../src/serve1.png",
"name":"Served Clients",
"count":200,
},
{"id":2,
"icon":"../src/serve2.png",
"name":"Completed Projects",
"count":139,
},
{"id":3,
"icon":"../src/serve3.png",
"name":"Satisfied Clients",
"count":233,
},
{"id":4,
"icon":"../src/serve4.png",
"name":"Certifications",
"count":4,
},
];

let stats_parent = document.querySelector(".stats_cont");

let single_stats= stats_array.map(function(stats){

    let stat_count = 0;
    let count = stats.count;
    let mycount = 0; 
    

    // console.log(stat_count);


        return `<div class="stats_items">
    <article class="stats_avatar" style="background:url('${stats.icon}');
    background-repeat:no-repeat; background-size:100% 100%;"></article>
    <article class="stats_count">${count}</article>
    <article class="stats_title">${stats.name}</article>
      </div>`;
        

    
}).join("");

stats_parent.innerHTML=single_stats;

// ///////////////////



window.addEventListener("scroll", function(){

let stat_div = document.querySelector(".stats_div");

let stat_div_prop = stat_div.getBoundingClientRect().top;
//  console.log(stat_div_prop);

if(stat_div_prop > 600){ 
    // console.log("posi");
// ///////////////////////////////////////////////////
let stats_count_parent =document.querySelectorAll(".stats_count");

stats_count_parent.forEach(function(stat){
    let count_ele = stat;
    let value = stat.textContent;
    let count = 0;
// console.log(count_ele);

    
 let ab_incr = setInterval(function increase(){      
            if(count != value){
                count+=1;
                // console.log(count);
                count_ele.textContent = count;}

    
    }, 30); 
    return () => clearInterval(ab_incr);
});
// ////////////////////////////////////////////////////////////////
}

// else{ 
//   // console.log("posi");
// // ///////////////////////////////////////////////////
// let stats_count_parent =document.querySelectorAll(".stats_count");

// stats_count_parent.forEach(function(stat){
//   let count_ele = stat;
//   let value = stat.textContent;
//   let count = 0;
// // console.log(count_ele);

//   count_ele.textContent = count;

  
// });
// // ////////////////////////////////////////////////////////////////
// }

});
// //////////////////////////////////////////////////
// //////////////////////// expert////////////////////////////////

let expert_array2 =[
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


let expert_parents = document.querySelector(".about_expert_container");
let single_experts = expert_array2.map(function(expert, index){
    return `<div class="expert_items" key="${expert.id}" style="left:${index*30}%">
    <article class="avatar" style="background:url('${expert.avatar}');
    background-repeat:no-repeat; background-size:100% 100%"></article>
    <article class="expert_name">${expert.name}</article>
    <article class="expert_role">${expert.role}</article>
    <article class="expert_bio">${expert.bio}</article>
  </div>`;
}).join("");

expert_parents.innerHTML = single_experts;

let h_expert_item2 = document.querySelectorAll(".expert_items");
let h_ex_counter2 = 0;

setInterval(h_ex_item, 3000);

function h_ex_item(){
    h_ex_counter2++;
    // console.log(project_counter);
    if(h_ex_counter2 === h_expert_item2.length){h_ex_counter2 = 0;}

    h_expert_item2.forEach(function(ex){
        ex.style.transform = `translateX(-${h_ex_counter2 * 45}%)`;
    });
}


// ///////////////////////////////////////////////////////////
let = expert_parents2 = document.querySelector(".about_expert_container2");
let single_experts2 = expert_array2.map(function(expert,index){
    return `<div class="expert_items2" key="${expert.id}" style="left:${index*100}%">
    <article class="avatar" style="background:url('${expert.avatar}');
    background-repeat:no-repeat; background-size:100% 100%"></article>
    <article class="expert_name">${expert.name}</article>
    <article class="expert_role">${expert.role}</article>
    <article class="expert_bio">${expert.bio}</article>
  </div>`;
}).join("");

expert_parents2.innerHTML = single_experts2;

let my_s_expert = document.querySelectorAll(".expert_items2");

my_s_expert.forEach(function(expert){
  let expert_count = 0;
  setInterval(next_expert, 3000);
  
  function next_expert(){
  expert_count++;
  if(expert_count === my_s_expert.length){expert_count=0;}
  
  expert.style.transform = `translateX(-${expert_count*100}%)`;
  
  }  });





