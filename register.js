


function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');
    
    if (formType === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');
    }
}



document.getElementById('login-toggle').addEventListener('click', () => toggleForm('login'));
document.getElementById('register-toggle').addEventListener('click', () => toggleForm('register'));




document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign In successful! (Demo)');
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up successful! (Demo)');
});