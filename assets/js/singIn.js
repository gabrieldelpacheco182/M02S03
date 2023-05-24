let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);

function login(event) {
    event.preventDefault();
    let email =document.getElementById("email").value;
    let password =document.getElementById("pasword").value;
    console.log("email",email);
    console.log("senha",password);
}