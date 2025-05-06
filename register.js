const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (e){
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.email === email);
    if(userExists){
        alert('Email Already exists');
    } else {
        users.push({fullName, email, password});
        localStorage.setItem('users',JSON.stringify(users));
        alert('registration successful!');
        window.location.href = 'login.html';
    }
})