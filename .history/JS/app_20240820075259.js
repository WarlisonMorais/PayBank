// scroll header


function scrollHeader(){

    const nav = document.getElementById("header");

    if(this.scrollY >= 50){
        nav.classList.add('active-header');
    }else{
        nav.classList.remove('active-header');
    }

}

window.addEventListener('scroll', scrollHeader);

//bx



const showMenu = (toggleId, navId) =>{



    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId);


    if(toggle){

        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('active-menu-mobile')
            toggle.classList.toggle('active-bx')
        })
    }
}



showMenu('bx', 'menu-mobile')




// abrir modal de pergutas 

let cartModal = document.getElementById('car-modal');

let cartBtn = document.getElementById('grupo-perguntas');



cartBtn.addEventListener('click', function(){






})