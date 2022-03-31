const mail = prompt ("inserisci mail");
let arrayMail = ['mail1@mail.it','mail2@mail.it','mail3@mail.it','mail4@mail.it','mail5@mail.it'];
document.getElementById('check').addEventListener('click',function(){
const utente = document.getElementById('accesso-email').value
let convalida = false;
for (let i = 0; i< arrayMail.length; i++){
    if(mail === arrayMail){
        convalida = true
        
    } 
    if(convalida){
        alert('accesso consentito')
    }else {
        alert('accesso negato')
    }
}//alert('accesso consentito')
 //alert('accesso negato')
})