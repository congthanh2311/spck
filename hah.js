let username = document.getElementById("Your Name");
let yournumber = document.getElementById("Your Number");
let attending = document.getElementById("What will you attend");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !yournumber.value || !attending.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("dang nhap thanh cong");
    window.location.href = "todolist.html";
  } else {
    alert("dang nhap that bai");
  }
});