//recupération du bouton
const btn = document.querySelector('.back-to-top')

//au scroll, le bouton apparait 
window.addEventListener('scroll', () => {
    if (window.scrollY > 400){
        btn.style.opacity = "1";
        
    } else {
        btn.style.opacity = "0";
    }
//au click sur le bouton la fenetre remonte
    btn.addEventListener('click', () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:"smooth"
        })
    })
})



