const form = document.getElementById('form');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const fam = document.getElementById('fam');
const mas = document.getElementById('mas');
const select = document.getElementById('select');
const group1 = document.getElementById('group1');
const group2 = document.getElementById('group2');
const group3 = document.getElementById('group3');
const group4 = document.getElementById('group4');
const group5 = document.getElementById('group5');
let values = [];
let formValid = true;

form.addEventListener('submit', e => {
    e.preventDefault();
    values = [];
    formValid = true
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    formValid = false;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    
};

const isValidEmail = email => {
    const re = /^([a-zA-Z]+.+[a-zA-Z]+(@ofppt.ma))$/gm;
    return re.test(String(email).toLowerCase());
}
const isValidtelephone = telephone => {
    const re = /^07|06|05[0-9]{8}$/;
    return re.test(String(telephone).toLowerCase());

}
const isValidusername = username => {
    const re = /^[a-z_-]{3,30}$/;
    return re.test(String(username).toLowerCase());
}

const isValidusername2 = username2 => {
    const re = /^[a-zA-Z]{3,30}$/;
    return re.test(String(username2).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const telephoneValue = telephone.value.trim();
    const famValue = fam.value.trim();
    const masValue = mas.value.trim();
    const selectValue = select.value.trim();
    

    // USERNAME
    if(usernameValue === '') {
        setError(username, ' Le nom est nécessaire');
    } else if (!isValidusername(usernameValue)) {
        setError(username, 'Le nom ne doit contenir que des lettres sans espace');
    } else if (usernameValue.length > 30 ) {
        setError(username, 'le nom ne doivent pas dépasser 30 caractères.')
    } else {
        setSuccess(username);
    }
    // USERNAME2
    if(username2Value === '') {
        setError(username2, 'Le prénom est nécessaire');
    } else if (!isValidusername2(username2Value)) {
        setError(username2, 'Le prénom ne doit contenir que des lettres sans espace');
    } else if (username2Value.length > 30 ) {
        setError(username2, 'le prénom ne doivent pas dépasser 30 caractères.')
    } else {
        setSuccess(username2);
    }
    
    // EMAIL
    if(emailValue === '') {
        setError(email, 'Email est nécessaire');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'écrivez un email sous la form (prenom.nom@ofppt.ma)');
    } else {
        setSuccess(email);
    }
    
    // PHONE
    if(telephoneValue === '') {
        setError(telephone, 'telephone est nécessaire');
    } else if (!isValidtelephone(telephoneValue)) {
        setError(telephone, 'écrivez un email sous la form (05 ou 06 ou 07)');
    } else if (telephoneValue.length < 10 ) {
        setError(telephone, 'telephone must be at least 10 character.')
    } else if (telephoneValue.length > 10 ) {
        setError(telephone, 'telephone must be at least 10 character.')
    } else {
        setSuccess(telephone);
    }
    
    // GENRE
    if (fam.checked==false&&mas.checked==false){
        document.getElementById("error").innerHTML="choisie ton genre"
    } else { document.getElementById("error").innerHTML = "";
        
    }
    
    // GROUPE
    if (group1.checked==false&&group2.checked==false&&group3.checked==false&&group4.checked==false&&group5.checked==false){
        document.getElementById("error2").innerHTML="choisie un groupe"
    } else { document.getElementById("error2").innerHTML = "";

    }
    

    // select
    for(let i=0;i<select.options.length;i++){
        if(select.options[i].selected){
            values.push(select.options[i])
        }
        // alert(values);
    }
    if(values.length<1){
        setError(select,'choisie un club(s)')
    }
    else if(values.length>3){
        setError(select,'La limite maximale est 3 clubs')
    }
    else{
        setSuccess(select);
    }

    
    if(formValid){
        window.location = "http://127.0.0.1:5500/index%20.html";
    }

}