function login() {
    var username1 = document.getElementById("usernameInput1").value;
    var username2 = document.getElementById("usernameInput2").value;
    localStorage.setItem("username1", username1);
    localStorage.setItem("username2", username2);
    window.location = "game.html";
}