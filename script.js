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
function handleRegister() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    alert("Registration successful!");
}
function registerWithGoogle() {
    alert("Redirecting to Google registration...");
    // Здесь будет добавлена интеграция Google OAuth на следующем этапе
}
function redirectToRegister() {
    window.location.href = "register.html";
}
function logout() {
    window.location.href = "index.html";
}
function login() {
    // Здесь можно добавить проверку введённых данных в будущем
    window.location.href = "dashboard.html";
}



function selectRole(role) {
    // Сохраняем выбранную роль в localStorage
    localStorage.setItem("userRole", role);

    // Перенаправляем пользователя в соответствующий личный кабинет
    if (role === "student") {
        window.location.href = "student-dashboard.html";
    } else if (role === "mentor") {
        window.location.href = "mentor-dashboard.html";
    }
}



function login() {
    const userRole = localStorage.getItem("userRole");

    if (userRole === "student") {
        window.location.href = "student-dashboard.html";
    } else if (userRole === "mentor") {
        window.location.href = "mentor-dashboard.html";
    } else {
        // Если роль ещё не выбрана, отправляем на выбор роли
        window.location.href = "role-selection.html";
    }
}
