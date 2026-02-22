const signupBtn = document.getElementById('signupBtn');
const statusMessage = document.getElementById('statusMessage');

signupBtn.addEventListener('click', () => {
    signupBtn.disabled = true;
    statusMessage.textContent = "Creating account...";

    createAccount().then(() => {
        statusMessage.textContent = "Account created successfully!";
        signupBtn.disabled = false; 
    });
});

function createAccount() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000); 
    });
}