const questions=[
  {
    "question": "Bạn là nam hay nữ ấy nhỉ ?",
    "answer1": "Mình là nam",
    "answer1Total": "1",
    "answer2": "Mình là nữ",
    "answer2Total": "2",
    "answer3": "Bí mật",
    "answer3Total": "3"
  },
  {
    "question": "Công việc hiện tại của bạn là gì ?",
    "answer1": "Ngành nghề quan tâm đến con người (VD: giáo viên, bác sĩ…)",
    "answer1Total": "1",
    "answer2": "Ngành nghề đòi hỏi quyết định nhanh và áp lực thời gian(VD: quản lí dự án,..)",
    "answer2Total": "2",
    "answer3": "Ngành nghề đòi hỏi công việc chính xác và áp lực độ chính xác",
    "answer3Total": "3"
  },
  {
    "question":
      "- Bạn có cảm thấy ngờ vực, lo lắng khi có một điều gì đó tốt xảy ra với bản thân hay có một ai đó đối xử nhã nhặn, lịch thiệp với bạn không ?",
    "answer1": "Mình cảm thấy vui, hạnh phúc lắm á và còn có cảm giác được coi trọng nữa.   ",
    "answer1Total": "1",
    "answer2": "Hmm… mình thấy có chút gì đó dằn vặt, hổng biết người ta có mong đợi gì ở mình không, và một chút cảm giác mình không xứng đáng",
    "answer2Total": "3",
    "answer3": "Mình thấy bình thường",
    "answer3Total": "2"
  },
  {
    "question": "- Bạn có lên kế hoạch quá tỉ mỉ, quá chi tiết cho tất cả  mọi thứ và mỗi khi có một việc gì đó không theo ý muốn thì bạn sẽ thấy cực kì khó chịu ?",
    "answer1": "Thôi nào, mình không phải như thế ",
    "answer1Total": "3",
    "answer2": "Đúng vậy, mình luôn ám ảnh việc mọi thứ phải theo ý mình",
    "answer2Total": "2",
    "answer3":
      "Mình có lên kế hoạch nhưng mình không thấy khó chịu như vậy",
    "answer3Total": "1"
  },
  {
    "question": "Bạn có bị ám ảnh về nỗi sợ thất bại và… nó vượt luôn cả khát khao chinh phục thành công ?",
    "answer1": "Không hề, không hề nha",
    "answer1Total": "1",
    "answer2": "Mình có",
    "answer2Total": "2",
    "answer3": "Mình chưa quan tâm đến thành công và thất bại lắm.",
    "answer3Total": "3"
  },
  {
    "question":
      "Bạn có nỗi sợ đặc biệt lớn với thành công không ?",
    "answer1":
      "Thành công mà tại sao lại sợ nhỉ ? Mình không hề sợ nó đâu",
    "answer1Total": "3",
    "answer2": "Vào những lúc gần đạt được thứ gì đó, mình bỗng dưng cảm thấy tệ và mình bỏ cuộc ",
    "answer2Total": "2",
    "answer3": "Mình nghĩ khác .",
    "answer3Total": "1"
  },
  {
    "question": "- Bạn có phải người mà ai nhờ gì cũng đon đả nhiệt  tình để làm, nhưng lại rất ngại làm phiền người khác, luôn cân nhắc đắn đo khi nhờ vả một ai ?",
    "answer1": "Mình nghĩ mình không phải người như vậy",
    "answer1Total": "1",
    "answer2": "Ừm, đó chính là mình, mình rất căng thẳng, mệt mỏi nhưng mình tự giữ nó cho riêng mình và không nhờ vả bất kì ai cả",
    "answer2Total": "2",
    "answer3": "Một ít",
    "answer3Total": "3"
  },
  {
      "question": "- Bạn có rất dễ tươi cười, thoải mái với người ngoài nhưng lại hay nổi nóng với người thân hông ?",
      "answer1": "Sao lại kì cục như vậy nhỉ, mình cũng không như thế này",
      "answer1Total": "1",
      "answer2": "Rất giống mình",
      "answer2Total": "2",
      "answer3": "Thỉnh thoảng",
      "answer3Total": "3"
    },
    {
      "question": " Bạn có hay thay đổi tâm lí thất thường và không có lí do ?",
      "answer1": "Mình đột nhiên trở nên lo âu, dễ nổi nóng và mất đi hứng thú với những việc trước đây mình rất say mê",
      "answer1Total": "1",
      "answer2": "Mình không nhé, hihi",
      "answer2Total": "2",
      "answer3": "Thỉnh thoảng",
      "answer3Total": "3"
    },
   
]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;
const energyFill = document.querySelector('.energy-fill');

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    //nhap van ban va so diem de quy ra va dua ra cac giai phap cho doi tuong
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `
            <h1 class="final-score">Your score: ${totalScore}</h1>
            <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            ${
              totalScore >= 15 && totalScore <= 21 ? "<p>Nếu bạn có nhiều hơn 2 biểu hiện mà chúng tớ đề cập bên trên thì có khả năng là bạn đã bị tổn thương tâm lí, nhưng đừng lo lắng quá chúng mình sẽ giúp cậu chủ động lắng nghe, thấu hiểu và chữa lành những vết thương khi còn mới. Hãy dành ra 3 phút cùng lắng đọng lại để tìm ra gốc rễ của các tổn thương này. </p>" :
              totalScore >= 10 && totalScore < 15 ? "<p>Nếu bạn có nhiều hơn 2 biểu hiện mà chúng tớ đề cập bên trên thì có khả năng là bạn đã bị tổn thương tâm lí, nhưng đừng lo lắng quá chúng mình sẽ giúp cậu chủ động lắng nghe, thấu hiểu và chữa lành những vết thương khi còn mới. Hãy dành ra 3 phút cùng lắng đọng lại để tìm ra gốc rễ của các tổn thương này. </p>" :
              totalScore >= 5 && totalScore < 10 ? "<p>Nếu bạn có nhiều hơn 2 biểu hiện mà chúng tớ đề cập bên trên thì có khả năng là bạn đã bị tổn thương tâm lí, nhưng đừng lo lắng quá chúng mình sẽ giúp cậu chủ động lắng nghe, thấu hiểu và chữa lành những vết thương khi còn mới. Hãy dành ra 3 phút cùng lắng đọng lại để tìm ra gốc rễ của các tổn thương này. </p>" :
              "<p>Less than 5: Text for this score range.</p>"
            }
        <button class="restart">Restart Quiz</button>
         `;
         setTimeout(() => {
          if (confirm("Do you want to play a game ?")) {
            window.location.href = "game.html";
          }
        }, 1000);
        return;
        //let check = confirm(" do you want to play a game ?");
    }
    //phan lam thanh nang luong 
    const currentWidth = parseFloat(energyFill.style.width) || 0;
    const newWidth = Math.min(currentWidth + (100/questions.length), 100);
       energyFill.style.width = newWidth + '%';
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload(restartQuiz);
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);

