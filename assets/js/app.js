const navbar = document.querySelector('.navbar');

window.onscroll = ()=>{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop> 20){
        Object.assign(navbar.style, {
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            background: 'black',
            marginRight: '50px',
            Transition: 'all .3s'
        })
    }else{
        Object.assign(navbar.style, {
            position: 'relative',
            background: 'none',
        })
    }
}