import useWow from "./useWow";
import { useState } from "react";


export default function useQuiz(quizData) {
  const [quizMode, setQuizMode] = useState("VIEW");
  const [questions, setQuestions] = useState(quizData);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const { sayWow } = useWow();

  const currentQuestion = questions[questionIndex].question;
  const currentAnswer = questions[questionIndex].answer;

  const validateAnswer = (formData) => {
    const { answer } = formData;

    if (answer === currentAnswer) {
      setPoints(points + 1);
      sayWow();
    }
    const newIndex = (questionIndex + 1) % questions.length;
    setQuestionIndex(newIndex);
  };

  const addNewQuestion = (formData) => {
    const newQuestion = {
      id: questions.length,
      question: formData.question,
      answer: formData.answer,
    };

    setQuestions([...questions, newQuestion]);
  };

  const toggleQuizMode = () => {
    if (quizMode === "VIEW") {
      setQuizMode("EDIT")
    } else {
      setQuizMode("VIEW")
    }
  }

  return { data: { quizMode, currentQuestion, points }, actions: { toggleQuizMode, validateAnswer, addNewQuestion } }
  return { quizMode, currentQuestion, points, toggleQuizMode, validateAnswer, addNewQuestion }

}