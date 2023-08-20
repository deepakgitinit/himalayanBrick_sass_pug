//==========================================================================//
// Select Form //
//==========================================================================//

let selectForm = document.querySelector('.select-form');
let select = document.querySelector('.select');
let options = document.querySelector('.options');


select.addEventListener('click',()=>{
    options.classList.toggle('options-display');
});

options.addEventListener('click',()=>{
    if(options.classList.contains('options-display') == true){
        options.classList.remove('options-display');
    }
});

const inputVal = (val) => {
    select.value = val;
}

// document.onclick = function (e){
//     if(e.target.className !== 'options'){
//         options.classList.remove('options-display');
//     }
// }

//==========================================================================//
// Select Form 2 //
//==========================================================================//

let selF = document.querySelector('.self');
let sel = document.querySelector('.sel');
let opt = document.querySelector('.opt');


sel.addEventListener('click',()=>{
    opt.classList.toggle('options-display');
});

opt.addEventListener('click',()=>{
    if(opt.classList.contains('options-display') == true){
        opt.classList.remove('options-display');
    }
});

const inVal = (val) => {
    sel.value = val;
}

//==========================================================================//
// Whatsapp Mailer
//==========================================================================//

const newDate = new Date();


const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;


const input1 = document.getElementById('input-name');
const input2 = document.getElementById('input-phoneno');
const input3 = document.getElementById('input-material');
const input4 = document.getElementById('input-quantity');
const input5 = document.getElementById('input-address');
const input6 = document.getElementById('input-date');

input6.value = formattedToday;

const whatsappFn = () =>{
    if(input1.value == "" || input2.value == ""){
        // alert("Can't be Empty");
    }
    else if(input3.value == "" &&  input4.value == "" && input5.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value}`, "_blank");
    }
    else if(input4.value == "" && input5.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Material:%20${input3.value}`, "_blank");
    }
    else if(input3.value == "" && input5.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Quantity:%20${input4.value}`, "_blank");
    }
    else if(input3.value == "" && input4.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Address:%20${input5.value}`, "_blank");
    }
    else if(input5.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Material:%20${input3.value},%20Quantity:%20${input4.value}`, "_blank");
    }
    else if(input4.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Material:%20${input3.value},%20Address:%20${input5.value}`, "_blank");
    }
    else if(input3.value == ""){
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Quantity:%20${input4.value},%20Address:%20${input5.value}`, "_blank");
    }
    else{
        window.open(`https://wa.me/918894068953?text=New%20Order%20Details%20:-%20Name:%20${input1.value},%20PhoneNumber:%20${input2.value},%20Material:%20${input3.value},%20Quantity:%20${input4.value},%20Address:%20${input5.value}`, "_blank");
    }

}

