var a = document.querySelector("img")
var love = document.querySelector("i")
a.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8;
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },2000)
})