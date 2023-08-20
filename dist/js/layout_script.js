//==========================================================================//
// Hamburger Menu //
//==========================================================================//


let navMenuHamburger = document.getElementsByClassName('nav-menu-hamburger')[0];
let navMenu = document.getElementsByClassName('nav-menu')[0];

navMenuHamburger.addEventListener('click', ()=>{
    navMenuHamburger.classList.toggle('nav-menu-hamburger-toggle');
    if(navMenu.classList.contains('nav-menu-fadein') == true){
        navMenu.classList.remove('nav-menu-fadein');
        navMenu.classList.add('nav-menu-fadeout');
        document.body.style.overflowY = 'scroll';
    }else{
        navMenu.classList.add('nav-menu-fadein');
        navMenu.classList.remove('nav-menu-fadeout');
        document.body.style.overflowY = 'hidden';
    }
});


let navLoginPage = document.querySelector('.nav-menu-login-page');
let navLoginButton = document.getElementById('nav-menu-login');

navLoginButton.addEventListener('click', ()=>{
    if(navLoginPage.classList.contains('login-entry') == true){
        navLoginPage.classList.remove('login-entry');
        navLoginPage.classList.add('login-outro');
    }else{
        navLoginPage.classList.add('login-entry');
        navLoginPage.classList.remove('login-outro');
    }
});


let navMenuLoginPageRemove = document.querySelector('.nav-menu-login-page-remove');

navMenuLoginPageRemove.addEventListener('click', ()=>{
    if(navLoginPage.classList.contains('login-entry') == true){
        navLoginPage.classList.remove('login-entry');
        navLoginPage.classList.add('login-outro');
    }
});

//==========================================================================//
// Speed Contact Width //
//==========================================================================//

const speedContact = document.getElementsByClassName('speed-contact')[0];
// const speedContactShow = document.querySelector('.speed-contact-show');



//==========================================================================//
// Scroll Button //
//==========================================================================//

let scrollBtn = document.getElementsByClassName('scroll-to-top')[0];

window.onscroll = () =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "flex";
        navLoginButton.style.display = 'flex';
        speedContact.classList.add('speed-contact-show');
    } else {
        scrollBtn.style.display = "none";
        navLoginButton.style.display = 'none';
        speedContact.classList.remove('speed-contact-show');
    }
    speedContact.style.left = ((screen.width - speedContact.clientWidth)/32)+ 'rem';
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollBtn.addEventListener('click', ()=>{
    topFunction();
});


//==========================================================================//
// BOT PAGE //
//==========================================================================//


let navMenuLogin = document.getElementById('nav-menu-login');
let botPage = document.querySelector('.bot-page');
let loginPageLogin = document.getElementById('login-page-login');
let loginPageInputOne = document.getElementById('login-page-input-one');

const objResponse = {
    Hello: "How are you!",
    hello: "how are you!",
    help: "How Can I help you"
}

loginPageInputOne.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      botInsert();
    }
});

function botInsert() {
    botPageValue = loginPageInputOne.value;
    botReturn(botPageValue);
    setTimeout(() => {
        botReturn(returnUserResponseBot(botPageValue));
        botPage.scrollTop = botPage.scrollHeight;
    }, 600);
    botPage.scrollTop = botPage.scrollHeight;
    loginPageInputOne.value = ""
}


const botReturn = (val) =>{
    const divElement = document.createElement('div');
    divElement.append(val);
    botPage.appendChild(divElement);
}


const returnUserResponse = (val) =>{
    if(objResponse[val] == undefined){
        return "This is not correct Value. Please Try Help, Order, or Hello";
    }else {
        return objResponse[val];
    }
}


const returnUserResponseBot = (val) =>{
    const res = returnUserResponse(val);
    return res;
}




