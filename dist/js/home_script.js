let faq = document.getElementsByClassName('faq--card');
let faqP = document.getElementsByClassName('faq--card--p');
let faqCardSym = document.getElementsByClassName('faq--card-sym');

for (let i = 0; i < faq.length; i++) {
    faq[i].getElementsByTagName('h3')[0].addEventListener('click',()=>{
        faqP[i].classList.toggle('display');
        faqP[i].classList.toggle('faqAni');
        faqCardSym[i].classList.toggle('rotate');
    });
}


scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
});


let mobile = document.getElementsByClassName('mobile')[0];

window.onload = function (){
    mobile.classList.add('mobileEntry');
}
