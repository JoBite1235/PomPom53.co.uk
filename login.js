function login(){

input = parseInt(document.getElementById('pass').value);

console.log(input);


if (input == 123456){
    window.location.assign('https://pompom53.co.uk/logedin.html');
    sessionStorage.setItem('login?', '1');


}

}
