addEventListener('load',f1);

function f1() {
    document.getElementById('namex').focus();
    document.getElementById('registrar').addEventListener('click', comprobarUser);
    document.getElementById('registrar').addEventListener('click', comprobarSur);
    document.getElementById('registrar').addEventListener('click', comprobarTel);
    document.getElementById('registrar').addEventListener('click', comprobarEmail);
    document.getElementById('viewpass').addEventListener('click', viewPass);
    showPass = false;
}

function viewPass() {
    if (showPass) {
        showPass = false;
        document.getElementById('passx').type = "password";
        document.getElementById('viewpass').innerHTML = "Mostrar contraseña";
    } else {
        showPass = true;
        document.getElementById('passx').type = "text";
        document.getElementById('viewpass').innerHTML = "Ocultar contraseña";
    }
}

function comprobarUser() {
    let id = 'namex';
    let status = 'namStatus'
    let value = document.getElementById(id).value;
    if (value.length >= 3) {
        document.getElementById(id).style.border = "1px solid green";
        document.getElementById(status).innerHTML = "";
    } else {
        document.getElementById(id).style.border = "1px solid red";
        document.getElementById(status).innerHTML = "El campo es demasiado corto";
    }
}

function comprobarSur() {
    let id = 'surx';
    let status = 'surStatus'
    let value = document.getElementById(id).value;
    if (value.length >= 3) {
        document.getElementById(id).style.border = "1px solid green";
        document.getElementById(status).innerHTML = "";
    } else {
        document.getElementById(id).style.border = "1px solid red";
        document.getElementById(status).innerHTML = "El campo es demasiado corto";
    }
}

function comprobarTel() {
    let id = 'telx';
    let status = 'telStatus'
    let value = document.getElementById(id).value;
    var regex = new RegExp("^[0-9]*$");
    if (regex.test(value) && value.length >= 8) {
        document.getElementById(id).style.border = "1px solid green";
        document.getElementById(status).innerHTML = "";
    } else {
        document.getElementById(id).style.border = "1px solid red";
        document.getElementById(status).innerHTML = "El campo no contiene un teléfono válido";
    }
}

function comprobarEmail() {
    let id = 'mailx';
    let status = 'emailStatus'
    let value = document.getElementById(id).value;
    var regex = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z]+[.]{1}[a-zA-Z]+$");
    if (regex.test(value)) {
        document.getElementById(id).style.border = "1px solid green";
        document.getElementById(status).innerHTML = "";
    } else {
        document.getElementById(id).style.border = "1px solid red";
        document.getElementById(status).innerHTML = "El campo no contiene una dirección de email válida";
    }
}

function comprobarEmail() {
    let id = 'mailx';
    let status = 'emailStatus'
    let value = document.getElementById(id).value;
    var regex = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z]+[.]{1}[a-zA-Z]+$");
    if (regex.test(value)) {
        document.getElementById(id).style.border = "1px solid green";
        document.getElementById(status).innerHTML = "";
    } else {
        document.getElementById(id).style.border = "1px solid red";
        document.getElementById(status).innerHTML = "El campo no contiene una dirección de email válida";
    }
}



