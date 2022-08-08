let billinput = document.querySelector("#billinput");
let tipAmount = document.querySelectorAll(".button_container button");
let tip;
let people = document.querySelector("#personinput");
let tipPerPerson = document.querySelector("#tipPerPerson")
let billPerPerson = document.querySelector("#billPerPerson");
let customTip = document.querySelector("#custom");
let invalidText = document.querySelector(".invalidtext");
let resetButton = document.querySelector("#resetB");

let numberOfPeople;
let totalBill;

for (b of tipAmount){
    b.addEventListener('click',(event)=>{
        let button = event.target;
        let text =button.innerText
        tip = text.slice(0,text.length-1);
        selected(text);
        updateResult(allClear());
       
    })
}

people.addEventListener('change',()=>{
    numberOfPeople = parseInt(people.value);

    updateResult(allClear());
})
billinput.addEventListener('change',()=>{
    totalBill = parseFloat(billinput.value);
    
    updateResult(allClear()); 
})

customTip.addEventListener('change',()=>{
    tip = parseInt(customTip.value);
})

function updateResult(isClear){
    if (isClear ){
        tipPerPerson.innerText = "$"+calTip(totalBill,numberOfPeople,tip);
        billPerPerson.innerText = "$"+calTotal(totalBill,numberOfPeople,tip);
    }
    else{
        console.log("Not Clear");
    }
}
// Function to calculate Tip
function calTip(bill,people,tip){
    let amount = (bill/people)*(tip/100);
    return amount.toFixed(2);
}

// Function to calculate bill
function calTotal(bill,people,tip){
    console.log(`Bill ${bill}, People ${people} , tip ${tip}`)
    let totalTip = (bill *tip)/100;
    let tbill = bill+ totalTip;

    let amount = tbill /people;
    console.log(amount.toFixed(2));
    return amount.toFixed(2);
}

// Function to select and deselect buttons
function selected(text) {
    btnTxt = text;
    for (buttons of tipAmount){
        if (buttons.innerText === btnTxt)
            buttons.classList.add('buttonselected');
        else
        buttons.classList.remove('buttonselected');
    }
  }


function allClear(){
    console.log("heyyy");
    checkPeople();  
    if (tip == undefined){
        console.log("oyyyy");
        return false;}
        
    else if ((numberOfPeople == undefined) || (numberOfPeople == 0)) {
        return false;}
        
    else if ((totalBill == undefined)  || (numberOfPeople == 0)){
         return false;}
        console.log(calTip(totalBill,numberOfPeople,tip));
    return true;
}

console.log(billinput.value)


function checkPeople(){
    if ((numberOfPeople == undefined) || (numberOfPeople == 0) ){
        invalidText.classList.remove('hidden');
        people.classList.add('invalidinput');
    }
    else{
        invalidText.classList.add('hidden');
        people.classList.remove('invalidinput');
    }
}

resetButton.addEventListener('click',()=>{
    billinput.value = "";
    for (buttons of tipAmount){
        if (buttons.classList.length === 2)
            buttons.classList.remove('buttonselected');
    };
    tip = 0;
    people.value = "";
    tipPerPerson.innerText = 0;
    billPerPerson.innerText = 0;
    customTip.value = "";
    numberOfPeople = "";
    totalBill = 0;
})