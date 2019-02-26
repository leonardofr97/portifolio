window.onload = function() {
    document.getElementById("menu-icon").onclick = function() {
        setaClasse()
    };

    function setaClasse() {
        var menu = document.getElementById("menu");
        var header = document.getElementById("header");
        menu.classList.toggle("menu-active");
        header.classList.toggle("menu-active");
    }
}