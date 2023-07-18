import "./App.css";
import Header from "./components/Header";
import NewQuestionForm from "./components/NewQuestionForm";
import CurrentPoints from "./components/CurrentPoints";
import QuestionForm from "./components/QuestionForm";
import Quiz from "./components/Quiz";

import { quizData } from "./data/quizData";
import useQuiz from "./hooks/useQuiz";

function App() {
  const { data, actions } = useQuiz(quizData);

  return (
    <div className="App">
      <Header />
      {data.quizMode === "EDIT" && (
        <button onClick={actions.toggleQuizMode}>Switch to view mode</button>
      )}
      {data.quizMode === "VIEW" && (
        <button onClick={actions.toggleQuizMode}>Switch to edit mode</button>
      )}
      <main>
        {data.quizMode === "EDIT" && (
          <NewQuestionForm onSubmit={actions.addNewQuestion} />
        )}
        {data.quizMode === "VIEW" && (
          // <Quiz
          //   question={data.currentQuestion}
          //   points={data.points}
          //   validateAnswer={actions.validateAnswer}
          // />

          <Quiz>
            <CurrentPoints points={data.points} />
            <QuestionForm
              question={data.currentQuestion}
              onSubmit={actions.validateAnswer}
            />
          </Quiz>
        )}
      </main>
    </div>
  );
}

export default App;
