
// console.log(id);

let service_array_db = [
    {"id":1,
    "title": "Subsea Engineering",
    "service_bg":"../src/service1.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.",
    
    },
    {"id":2,
    "title": "Offshore Installation",
    "service_bg":"../src/service2.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.",
    
    },
{"id":3,
    "title": "Subsea Intervention/maintenance servicese",
    "service_bg":"../src/service3.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.",
   
    },
{"id":4,
    "title": "Construction/Commisioning Services",
    "service_bg":"../src/service4.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.",
    },
{"id":5,
    "title": "Procurement Services",
    "service_bg":"../src/service5.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.",
    },
{"id":6,
    "title": "Drill Support Operation",
    "service_bg":"../src/service6.png",
    "overview":"This range from Exploration Drilling where the ROV provide a basic level of observation and inspection, through Developement or Production Drilling where the ROV is often the Primary means of intervention for hhighly complex tasks. Our work class ROV are often used for deploying specialist tools and modules.",
    },   
     {"id":7,
    "title": "Offshore Vessle Service",
    "service_bg":"../src/service7.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.",
        },    
  {"id":8,
    "title": "Manpower supply Services",
    "service_bg":"../src/service7.png",
    "overview":"Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about. Some dummy text about what the company do goes here and many other details about the dummy text will all go here some lorem ipsum containing the details of the company, there are other more dummy text that can be added to the dummy text. things about the companies about will be added here too for proper description. this is just a line of text containing things about the about.", 
    },    
];

let new_service =service_array_db.filter(function(new_service){
    if(new_service.id ===id){return new_service;}

});


 new_service.forEach(function(service){
let title = service.title;
let service_bg = service.service_bg;
let overview = service.overview;


let serv_txt = document.querySelector(".serv_txt");
serv_txt.textContent = title;
let serv_image = document.querySelector(".serv_item_image");
serv_image.innerHTML =`<article class="serv_item_img"style="background:url('${service_bg}');
background-size:100% 100%; background-repeat:no-repeat;"></article>`;

let overview_desc = document.querySelector(".overview_desc");
overview_desc.textContent = overview;

 });

//  /////////////////////////////////////////////////
let portfolio_arrays = [{
  "portfolio":[{"portfolio":"../src/s1_port1.png",}, 
{"portfolio":"../src/s1_port2.png",}, 
{"portfolio":"../src/s1_port3.png",},
{"portfolio":"../src/s1_port4.png",},
],

"list":[
  {"list":"EXXON MOBILE"},
  {"list":"SHARAWAK SHELL BERHAD"},
  {"list":"PATRA DINAMIKA"},
{"list":"IONEER PEGASUS"},
{"list":"SIGUR ROS"},
{"list":"BUMIAMADA"},
{"list":"SAPURAKENKANA PETROLEUM"},
{"list":"PIT EXPLORATION AND PRODUCTION COMPANY LIMITED"},
{"list":"TALISMAN ENERGY"},
{"list":"HYDRODIVE"},
],
"port_desc":"We are highly experienced in conducting major Pipeline Inspection, survey inspection, Maintenance and Repair, Construction Support, Seabed Survey, Pipe Laying, Platform Inspection and Freespan correction. We have good track record of delivering quality services to our clients.we have work with top companies like; "
}
];

 portfolio_arrays.forEach(function(item){
   
 let portfolio = item.portfolio;
 let port_desc = item.port_desc;
 let list = item.list;



 let portfolio_desc = document.querySelector(".p_desc_desc");
portfolio_desc.textContent=port_desc;

let list_parent = document.querySelector(".port_list");

let single_p_list = list.map(function(list){

return `<li>${list.list}</li>`;
}).join("");

list_parent.innerHTML = single_p_list;


let portfolio_img = document.querySelector(".portfolio_img");

let single_portfolio = portfolio.map(function(port, index){

return `<article class="port_slide" style="background:url('${port.portfolio}');
background-size:100% 100%; background-repeat:no-repeat; left: ${index*100}%;"></article>`;
}).join("");
//console.log(single_portfolio);
portfolio_img.innerHTML = single_portfolio;

 let port_slide = document.querySelectorAll(".port_slide");

 port_slide.forEach(function(p_slide){

let port_counter = 0;
setInterval(next_port, 3000);

function next_port(){
    port_counter++;
    if(port_counter == port_slide.length){port_counter=0}
    p_slide.style.transform = `translateX(-${port_counter*100}%)`;
}

let prev= document.querySelector(".prev");


prev.addEventListener("click", function (){

    port_counter--;

    if(port_counter < 0){port_counter=port_slide.length-1;
    }
    p_slide.style.transform = `translateX(-${port_counter*100}%)`;
});

let next= document.querySelector(".next");


next.addEventListener("click", function (){

    port_counter++;

    if(port_counter == port_slide.length){port_counter =0;
    }
    p_slide.style.transform = `translateX(-${port_counter*100}%)`;
});

 });
});















