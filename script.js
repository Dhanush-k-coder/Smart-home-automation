function sendOTP() {
    alert('OTP sent successfully');
    document.getElementById('otp-section').style.display = 'block';
}

function verifyOTP() {
    alert('OTP verified');
    location.href = 'set-pin.html';
}

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const confirmPin = document.getElementById('confirmPin').value;
    if (pin === confirmPin) {
        location.href = 'login.html';
    } else {
        alert('Pins do not match');
    }
}

function login() {
    const pin = document.getElementById('loginPin').value;
    if (pin) {
        location.href = 'home.html';
    } else {
        alert('Please enter your pin');
    }
}