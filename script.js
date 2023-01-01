const header = document.querySelector('.header');

window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.backgroundColor = "#b68d40"
    }else{
        header.style.backgroundColor = "transparent"
    }
}
