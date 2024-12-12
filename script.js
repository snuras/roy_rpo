function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        console.log("Email:", email);
        console.log("Password:", password);
        alert("Login successful!");
    } else {
        alert("Please fill in all fields.");
    }
}
