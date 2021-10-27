window.addEventListener("scroll",function(){
    if (this.document.documentElement.scrollTop >= 400){
        document.getElementById("menu").style.backgroundColor="rgba(255, 255, 255, 0.562)"
    }else{
        document.getElementById("menu").style.backgroundColor=""
    }
})
document.getElementById('bosta').addEventListener('click', function(){
    alert('nada')
})