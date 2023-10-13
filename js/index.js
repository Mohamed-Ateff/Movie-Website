// Typing Effect


const mHTML = document.getElementById('message'),
  messages = [
    "لا تنسي تجربة زر تمت المشاهدة للمحتوي الذي شاهدته",
    "لا تنسي زيارة صفحة المرجعات",
    "تابعنا علي حسابتنا السوشيال ميديا",
    "إنتظروا التحديثات والمفاجئات القادمة للعضوية المميزة الجديدة !"
  ];
let currentMessage = 0;

function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(() => {
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(() => {
        deleteMessage(part);
      }, 500);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 100);
}

function deleteMessage(str) {
  let int = setInterval(() => {
    if (str.length === 0) {
      setTimeout(() => {
        typeMessage();
      }, 500);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      mHTML.innerHTML = str;
    }
  }, 50);
}
typeMessage();


// slider


const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;


prev.addEventListener("click", function () {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
})

next.addEventListener("click", function () {
  nextSlide();
  updateCircleIndicator();
  resetTimer();

})


var loading = document.getElementById("contnet-loading");

function preloader() {
  loading.style.display = "none";

}
