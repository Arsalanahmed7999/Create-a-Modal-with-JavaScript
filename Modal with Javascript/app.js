let modalBtn = document.querySelector('.modal-btn');
let modalClose = document.querySelector('.modal-close');
let modalBg = document.querySelector('.modal-bg');

modalBtn.addEventListener('click', function(){
modalBg.classList.add('bg-active')
})

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')
})

//  now our modal is complete however if you wish we can also get out filled details saved to our local storage 
//  so let's start. 

let submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', ()=>{
    let message = document.querySelector('.message');
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);

    message.innerHTML = `You form has been submitted`
})

// now we will give a pop-up message that the form has been submitted