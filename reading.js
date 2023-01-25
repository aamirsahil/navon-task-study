const readingCard=document.getElementById('readingTask');
const readingIntro=document.getElementById('readingIntro');
const btnShowPassage=document.getElementById('btnShowPassage');
const btnCompRead=document.getElementById('btnCompRead');
readingCard.style.visibility = "hidden";
btnCompRead.style.visibility = "hidden";
let grade = 9;

let passageText = [ 
    [`The Golgi apparatus, first described by Camillo Golgi, consists of a system of membrane-bound vesicles (flattened sacs) arranged approximately parallel to each other in stacks called cisterns. These membranes often have connections with the membranes of ER and therefore constitute another portion of a complex cellular membrane system. The material synthesised near the Endoplasmic Reticulum is packaged and dispatched to various targets inside and outside the cell through the Golgi apparatus. Its functions include the storage, modification, and packaging of products in vesicles. In some cases, complex sugars may be made from simple sugars in the Golgi apparatus. The Golgi apparatus is also involved in the formation of lysosomes.`],
    [`An important characteristic of all communities is that their composition and structure constantly change in response to the changing environmental conditions. This change is orderly and sequential, parallel with the changes in the physical environment. These changes lead finally to a community that is in near equilibrium with the environment and that is called a climax community. The gradual and fairly predictable change in the species composition of a given area is called ecological succession. During succession some species colonise an area and their population become more numerous whereas populations of other species decline and even disappear.`],
    [`Carbon and energy requirements of the autotrophic organism are fulfilled by photosynthesis. It is the process by which autotrophs take in substances from the outside and convert them into stored forms of energy. This material is taken in the form of carbon dioxide and water which is converted into carbohydrates in the presence of sunlight and chlorophyll. Carbohydrates are utilised for providing energy to the plant. The carbohydrates which are not used immediately are stored in the form of starch, which serves as the internal energy reserve to be used as and when required by the plant. A somewhat similar situation is seen in us where some of the energy derived from the food we eat is stored in our body in the form of glycogen.`],
];

 let passageCode=window.localStorage.getItem("passage");
 readingCard.innerText=passageText[passageCode];
//  let passageId=window.localStorage.getItem("passage"); // this generates the random index
 
//readingCard.innerText=passageText[passageId[0]];
//passageCode=passageId[0];

function random(a, A) {
    return Math.floor(Math.random() * (A - a + 1)) + a;
}
 


function gradeBasedPassage(){
    let gradeId;
    if(grade==='9'){
        gradeId = random(0, 1);
        console.log(gradeId);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
    if(grade==='10'){
        gradeId = random(2, 3);
        readingCard.innerText=passageText[gradeId];
        passageCode=gradeId;
    }
    window.localStorage.setItem('paragraph_type', 'Text Book');
}

// gradeBasedPassage();


function showReadingCard() {
    readingCard.style.visibility = "visible";
    btnCompRead.style.visibility = "visible";
    readingIntro.style.display = "none";
    btnShowPassage.style.display = "none";
    startTimer();
  }

 function completedReadingCard(){
     stopTimer();
     displayTime();
     window.open("./navon-intro2.html","_self");
 } 

 function startTimer(){
    sTime = Date.now(); 
}

let diff;

function stopTimer(){
    diff=Date.now()-sTime;
    window.localStorage.setItem("reading", diff);
    window.localStorage.setItem("reading-passageCode", passageText[passageCode]);
}


function displayTime(){
    console.log("The reaction time was:"+diff);
}



function shufflePassageId(){
    let imgId= [0, 1, 2,3,4,5];
    let newId= [];
    while (imgId.length!==0){
        let randomIndex=Math.floor(Math.random()*imgId.length );
        newId.push(imgId[randomIndex]);
        imgId.splice(randomIndex,1);
    }
    imgId=newId;
    return imgId;    
}