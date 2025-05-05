const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if(!currentUser) {
    window.location.href = 'login.html';
} else{
    userName.textContent = `welcome, ${currentUser.fullName}`;
}

logoutBtn.addEventListener('click',() => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
});



