const readingCard=document.getElementById('readingTask');
const readingIntro=document.getElementById('readingIntro');
const btnShowPassage=document.getElementById('btnShowPassage');
const btnCompRead=document.getElementById('btnCompRead');
readingCard.style.visibility = "hidden";
btnCompRead.style.visibility = "hidden";
let grade = window.localStorage.getItem("grade");

let passageText = [ 
    [`The Golgi apparatus, first described by Camillo Golgi, consists of a system of membrane-bound vesicles (flattened sacs) arranged approximately parallel to each other in stacks called cisterns. These membranes often have connections with the membranes of ER and therefore constitute another portion of a complex cellular membrane system. The material synthesised near the Endoplasmic Reticulum is packaged and dispatched to various targets inside and outside the cell through the Golgi apparatus. Its functions include the storage, modification, and packaging of products in vesicles. In some cases, complex sugars may be made from simple sugars in the Golgi apparatus. The Golgi apparatus is also involved in the formation of lysosomes.`],
    [`A system of membrane-bound vesicles (flattened sacs) arranged approximately parallel to each other in stacks called “cisterns” forms the golgi apparatus which takes after the name of its discoverer, Camillo Golgi. These membranes often are connected with the membranes of Endoplasmic Reticulum and therefore constitute another portion of a complex cellular membrane system. Through the Golgi apparatus, the material synthesised near the Endoplasmic Reticulum is packaged and dispatched to various targets inside and outside the cell. It stores, modifies, and packages products in vesicles. In some cases, simple sugars are converted into complex sugars in the Golgi apparatus. The Golgi apparatus is also involved in the formation of lysosomes.`],
    [`An important characteristic of all communities is with changing environmental conditions, the composition and structure of all communities constantly change.  This change occurs in an order and a sequence, as the physical environment changes. These changes lead finally to a community that is in near equilibrium with the environment and that is called a climax community. The species composition of a given area changes gradually and in a fairly predictable way, this is called ecological succession. During succession some species colonise an area and their population become more numerous whereas populations of other species decline and even disappear.`],
    [`The autotrophic organism fulfills its Carbon and energy requirements by photosynthesis. It is the process by which autotrophs take in substances from the outside and convert them into stored forms of energy. The plant takes this material in the form of carbon dioxide and water and converts it into carbohydrates when sunlight and chlorophyll are present. The plants use these carbohydrates to provide them with energy. We will study how this takes place in the next section. The plant stores the carbohydrates which are not used immediately in the form of starch and uses them as internal energy reserves as and when required. In a somewhat similar situation we store some of the energy derived from the food we eat in our body in the form of glycogen.`]      
];

 let passageCode;
 let passageId=shufflePassageId(); // this generates the random index
 
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
    window.localStorage.setItem('paragraph_type', (gradeId % 2 == 0) ? 'Text Book' : 'Modified');
}

gradeBasedPassage();


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