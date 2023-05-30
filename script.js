function showalert() {alert ('¡hola esta es un alerta de javascript' );}


const form = document.getElementById('myfrom');
 if (form){
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateform();
});
 }


function validateform(email)  {
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}


function validateform()  {
    const emailinput = document.getElementById('email');
    const email= emailinput.Value;


    if (!validateemail(email))  {
        alert('por favor ingrese un correo de electronico valido');}
        else {
            alert('correo electronico enviado correctamenete.');
        }
}


document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})