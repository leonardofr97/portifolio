window.onload = function() {
    var menuicon = document.getElementsByClassName("menu-icon");
    for(var i = 0; i < menuicon.length; i++){
        menuicon[i].addEventListener("click", function(e) {
            e.preventDefault();
            setaClasse();
        });
    };

    function setaClasse() {
        var menu = document.getElementsByClassName("menu");
        for(var i = 0; i < menu.length; i++){
            menu[i].classList.toggle("menu-active");
        };
    }
}