let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", formCadastro);

function formCadastro(event) {
    event.preventDefault();
    let company = document.getElementById("company").value;
    let cnpj = document.getElementById("cnpj").value;
    let responsible = document.getElementById("responsible").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value;
}