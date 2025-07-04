/* Online Quiz Application

Create a JSON structure to represent quiz questions. Each question should include id, questionText, 
options (an array of possible answers), and correctAnswer. Write a function to evaluate a user's answers 
against the correct answers stored in the JSON object and return the score. */

// Solution:
const quizQuestions = [
  {
    id: 1,
    questionText: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  },
  {
    id: 2,
    questionText: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: "Facebook"
  },
  {
    id: 3,
    questionText: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 4,
    questionText: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "Angular", "Ruby on Rails"],
    correctAnswer: "Angular"
  },
  {
    id: 5,
    questionText: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  }
];

// ✅ Example user answers (simulate this with prompts or form later)
const userAnswers = {
  1: "JavaScript",
  2: "Google",
  3: "Hyper Text Markup Language",
  4: "Angular",
  5: "Computer Style Sheets"
};

// function to evaluate user's answers
function evaluateQuiz(questions, answers) {
    let score = 0;

    questions.forEach(question => {
        const userAnswer = answers[question.id];
        if(userAnswer === question.correctAnswer) {
            score++;
        }
    });
    return score;
}

const finalScore = evaluateQuiz(quizQuestions, userAnswers);
console.log(`Your score: ${finalScore} out of ${quizQuestions.length}`);
