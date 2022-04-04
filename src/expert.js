// //////////////////////// expert////////////////////////////////

let ex_array =[
  {
    "id":1,
    "avatar": "../src/expert1.png",
    "name":"Mdm Yvonne Yeo",
    "role": "Managing Director (Subsea Robotics)",
    "bio":"Yvonne came from the building and construction sector where she developed superior project management and negotiation skills. After winning many tenders in the supply of building materials for many residential and hotel projects both locally and regionally, she is well aware of the intricacies of project bidding. '</br>'Since starting the company in 2006, she has made Subsea Robotics Services into a brand that is well recognized for inpeccably built ROV systems at competitive prices, and Experienced ROV project team who complete scheduled tasks on time, on target.",
  },
  {
      "id":2,
      "avatar": "../src/expert2.png",
      "name":"Mr Philippe Chew",
      "role": "ROV Director",
      "bio":"Philippe has had more than 20 years experience in the Oil and Gas industry. Prior to spearheading the operation and managing the fleet of ROVs at Subsea Robotics Services, he was the Operations Manager for Oceaneering International Pte Ltd, overseeing all ROV operations in the South East Asian region. At any one time, he would be managing 22 ROV systems deployed on projects for major oil operators like Exxon Mobil, Shell, Murphy Oil and many others. As the Operations Manager of Subsea Robotics Services Pte Ltd, his experience at the helm has steered the company to be recognized as a reliable ROV services provider.",
    },

    {
      "id":3,
      "avatar": "../src/expert3.png",
      "name":"Mr Junior Richard Dias",
      "role": "ROV Workshop Manager",
      "bio":"Over 25 years in the ROV industry having worked in Myanmar, China, India, Thailand, Indonesia, Malaysian offshore sector and also in Middle-east, off Qatar and Nigeria. Various projects involved in - pipeline survey, pipeline repair support, various offshore construction support projects, FPSO installations with coflexip hose installation together with SBM  chain installation, dive support and drill support.  Special equipment used for various projects Manipulator Schilling TII; Conan, Orian, 340 pipe tracker operation, TSS cable trackers also attended training courses on the Simrad Mesotech sonar and processors in Canada, Low light sit camara courses, also operations and maintenance of Sonardyne Acoustic Positions System APS3. ",
    },
{
      "id":4,
      "avatar": "../src/expert4.png",
      "name":"Mr Joseph Ashafa",
      "role": "Nigeria Base Manager",
      "bio":"Over 10 years experience in the ROV Industry. Major projects involved in - Dredging DOP intervention/valve function, Hot Stab, pipeline survey and leak detection; Subsea Pipe Laying Suport, subsea survey of anchor drop points, riser installation support; jacket inspection; Gas leak inspection; PLEM Installation; UNWILD Inspection; Sonar imaging. Equipment and Tools maintained over my career: Dynacon/ Lawson launch and recovery system, Torque tool, Flying lead oriented tool, T4 (seven function manipulator), Rig master (five function manipulator), Cathodic Protection Probe, CTD Probe,USBL/Mini SSBL beacons, Octants Gyro/Watson Gyro, Glycol injection Skid, Wellhead cleaning tool, VX/AX gasket tool, Methanol injection Pump, Methanol injection Skid, Hot stab, THEOCT.",
    },
{
      "id":5,
      "avatar": "../src/expert5.png",
      "name":"Mr Prosper Ordu",
      "role": "ROV Manager/Document Controller",
      "bio":"Over 5 years of experience in the ROV Industry, Equipment and Tools maintained over my career: Dynacon/ Lawson launch and recovery system, Torque tool, Flying lead oriented tool, T4 (seven function manipulator), Rig master (five function manipulator), Cathodic Protection Probe, CTD Probe,USBL/Mini SSBL beacons, Octants Gyro/Watson Gyro, Glycol injection Skid, Wellhead cleaning tool, VX/AX gasket tool, Methanol injection Pump, Methanol injection Skid, Hot stab, THEOCT.",
    },     
];


let ex_parent = document.querySelector(".ex_cont");
let single_ex = ex_array.map(function(expert){
    return `<article class="ex_item" key="${expert.id}">
    <div class="ex_avatar_cont">
        <article class="ex_avatar1"></article>
        <article class="ex_avatar2"style="background:url('${expert.avatar}');
    background-repeat:no-repeat; background-size:100% 100%"></article>
    </div>
    <div class="ex_name">${expert.name}</div>
    <div class="ex_role">${expert.role}</div>
    <div class="ex_bio">${expert.bio}</div>
   </article>`;
}).join("");

ex_parent.innerHTML = single_ex;