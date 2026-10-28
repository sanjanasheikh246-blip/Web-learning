const loginBtn = document.getElementById('login-btn');
const userName = document.getElementById('username');
const passWord = document.getElementById('password');
loginBtn.addEventListener('click', function () {
    console.log('testing');
    console.log(userName.value);
    if (userName.value != "sanjanasheikh1234" || passWord.value != 12345) 
    {
       alert(`You have given wrong pass`)
    }
    else
    {
       alert(`You are most welcome`)
    }
            
});
