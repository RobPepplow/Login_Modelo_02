const revealPasswordButton = document.querySelector("#reveal-password");
const revealConfirmedPasswordButton = document.querySelector("#reveal-confirm-password");


const inputPassword = document.querySelector("#password");
const inputConfirmedPassword = document.querySelector("#confirm-password");

const inputEmail = document.getElementById("email")

const onChangeRevealPassword = () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    revealPasswordButton.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    inputPassword.type = "password";
    revealPasswordButton.classList.replace("bi-eye", "bi-eye-slash");
  }

  if (inputConfirmedPassword.type === "password") {
    inputConfirmedPassword.type = "text";
    revealConfirmedPasswordButton.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    inputConfirmedPassword.type = "password";
    revealConfirmedPasswordButton.classList.replace("bi-eye", "bi-eye-slash");
  }
};

revealPasswordButton.onclick = onChangeRevealPassword;
revealConfirmedPasswordButton.onclick = onChangeRevealPassword;


const validator = () => {
  if (inputEmail.value === 0) {
    alert("Digite um E-mail valído")
  }

  if (inputPassword.value === 0) {
    alert("Digite a Senha")
  }

  if (inputConfirmedPassword.value === 0) {
    alert("Confirme a Senha")
  }
  if (inputPassword.value !== inputConfirmedPassword.value) {
    alert("As senha Digitas Não Conferem")
  }
}



const currentTime = () => {
  const clockTime = document.querySelector(".clock-time");
  const markingSeconds = document.querySelector(".marking-seconds");

  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  const ssDegrees = (ss / 60) * 360;
  markingSeconds.style.transform = `rotate(${ssDegrees}deg)`;

  let time = `${hh}:${mm}`;
  clockTime.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);