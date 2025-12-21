document.getElementById("burger-menu").addEventListener("click", () => {
    document.getElementById("burger-nav").style. height = "100vh" ;
    document.getElementById("burger-nav").style. fontSize = "10.68vw" ;
    document.getElementById("X").style. fontSize = "6.7vw" ;
    document.getElementById("main").style. display = "none" ;
    document.getElementById("footer").style. display = "none" ;
})

document.getElementById("X").addEventListener("click", () => {
    document.getElementById("burger-nav").style. height = "0" ;
    document.getElementById("burger-nav").style. fontSize = "0" ;
    document.getElementById("X").style. fontSize = "0" ;
    document.getElementById("main").style. display = "block" ;
    document.getElementById("footer").style. display = "block" ;
})