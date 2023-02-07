let navbar=document.getElementById("navbar");
let bottom=document.getElementById("Bottom")

window.addEventListener("scroll",()=>{
    if(window.scrollY>(bottom.offsetTop-(navbar.offsetHeight)))
    {
         navbar.classList.add("active")
    }
    else
    {
        navbar.classList.remove("active")
    }
})
