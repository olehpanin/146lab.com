document.addEventListener('DOMContentLoaded', function(){
    var loginButton = document.getElementsByClassName("enter")[0],
        loginForm = document.getElementById( "loginForm"),
        loginFormVisibility = undefined;

    loginButton.onclick = function(e){
        e.preventDefault();

        loginFormVisibility = loginForm.style.display;

        if( loginFormVisibility === "block" ){
            closeForm();
        } else {
            loginForm.style.display = "block";
        }
    };

    document.getElementById('button').onclick = function() {
        closeForm();
    };


    function closeForm() {
        loginForm.style.display = "none";
    }

    $(document).ready(function() {
        $('a.animated').hover(
            function() {
                $(this).addClass('pulse'); // Добавляем класс bounce
            },
            function() {
                $(this).removeClass('pulse'); // Убираем класс
            }
        )})

}, false);
