// document.querySelector(".number").innerText = 20;
// document.querySelector(".message").innerText = "Correct number!";
// document.querySelector(".score").innerText = 12;

let check = document.querySelector(".check").addEventListener("click", run);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
function run() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //when theres no input!!!
  if (!guess) {
    document.querySelector(".message").innerText = "No Number!";
    //when player wins!!!
  } else if (guess === secretNumber) {
    document.querySelector(".message").innerText = "💥Correct Number!";
    document.querySelector(".number").innerText = secretNumber;

    document.querySelector("body").style.backgroundColor = "blue";
    if(score > highScore) {
      highScore = score;
      document.querySelector(".highsc").innerText = highScore;
    }
    //when guess is too high!!!
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").innerText = "💔Too High!";
      score--;
      document.querySelector(".score").innerText = score;
    } else {
      document.querySelector(".message").innerText = "you lost!!!";
      document.querySelector(".score").innerText = 0;
    }
    //when guess is too low!!!
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").innerText = "💔Too Low!";
      score--;
      document.querySelector(".score").innerText = score;
    } else {
      document.querySelector(".message").innerText = "you lost!!!";
      document.querySelector(".score").innerText = 0;
    }
  }
}
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
document.querySelector(".Again").addEventListener("click", reset);
function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").innerText = "start guessing";
  document.querySelector(".score").innerText = score;
  document.querySelector(".number").innerText = "?";
  document.querySelector(".guess").value = 0;
  document.querySelector("body").style.backgroundColor = "#222";
}
// let check = document.querySelector(".check").addEventListener("click", run);
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// function run() {
//   let guess = Number(document.querySelector(".guess").value);
//   if (!guess) {
//     document.querySelector(".message").innerText = "No Number!!!";
//   } else if (guess === secretNumber) {
//     document.querySelector(".message").innerText = "😋Correct Number!!!";
//       document.querySelector(".number").innerText = secretNumber;
//       document.querySelector('body').style.backgroundColor = 'blue'
//       if (score > highScore) {
//           highScore = score;
//           document.querySelector('.highsc').innerText = highScore;
//       }
//   } else if (guess > secretNumber) {
//     if (score >= 1) {
//       document.querySelector(".message").innerText = "💔Too High";
//       score--;
//       document.querySelector(".score").innerText = score;
//     } else {
//         document.querySelector('.message').innerText = 'you lost!!!'
//         document.querySelector('.score').innerText = 0;
//     }
//   } else if (guess < secretNumber) {
//       if (score >= 1) {
//         document.querySelector(".message").innerText = "💔Too Low";
//         score--;
//         document.querySelector(".score").innerText = score;
          
//       } else {
//           document.querySelector('.message').innerText = 'you lost!!'
//           document.querySelector('.score').innerText = 0;
          
//       }
    
//   }
// }
// // // 1. Select the element with the 'again' class and attach a click event handler
// // // 2. In the handler function, restore initial values of the 'score' and
// // // 'secretNumber' variables
// // // 3. Restore the initial conditions of the message, number, score and guess input
// // // fields
// // // 4. Also restore the original background color (#222) and number width (15rem)

// document.querySelector('.Again').addEventListener('click', reRun)
// function reRun() {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
    
//     document.querySelector('.message').innerText= 'start guessing'
//     document.querySelector('.number').innerText='?' 
//     document.querySelector('.guess').value= 0;
//     document.querySelector('.score').innerText = 20;
//     document.querySelector("body").style.backgroundColor = "#222";
    
// }