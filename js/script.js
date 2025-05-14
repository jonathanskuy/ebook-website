function Navigation() {
    var registrationPage = document.getElementById("registration");
    var loginPage = document.getElementById("login");

    var registrationDisplay = window.getComputedStyle(registrationPage).display;
    var loginDisplay = window.getComputedStyle(loginPage).display;

    if (loginDisplay === "block") {
        registrationPage.style.display = "block";
        loginPage.style.display = "none";
    } else if (registrationDisplay === "block") {
        loginPage.style.display = "block";
        registrationPage.style.display = "none";
    } else {
        console.log("Page Display Error");
    }
}

function Login() {
    const username = document.getElementById("loginusn").value.trim();
    const password = document.getElementById("loginpwd").value.trim();

    if (!username || !password) {
        alert("Please fill in all required fields");
        return;
    }

    window.location.href = "../src/main.html";
}

function Registration() {
    const username = document.getElementById("registerusn").value.trim();
    const email = document.getElementById("registeremail").value.trim();
    const password = document.getElementById("registerpwd").value.trim();
    const confirmPassword = document.getElementById("registerconfirmpwd").value.trim();

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all required fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    window.location.href = "../src/main.html";
}