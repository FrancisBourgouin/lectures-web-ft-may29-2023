# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

# Data Structures

# CurrentQuestion

```jsx
const currentQuestion = 0; // 0-1-2-3-0-1-2-3
```

# Points!

```jsx
const points = 0;
```

# Question

```jsx
  const question = {
    id:0
    question:"",
    answer:""
  }
```

# QuestionList

```jsx
  const listOfQuestions = [question, question, ...] // xxxxx
  const listOfQuestions = {id:question, id:question} // x
```

# HTML Structure

- body
  - header
    - h1 Super Quiz of Destiny
  - main
    - section
      - h1 Add new question
      - form
        - input question
        - input answer
        - button submit
    - section
      - h1 Answer the question!
      - p amount of points
      - form
        - p question
        - input answer
        - button submit

# Component Structure

- App
  - Header
  - NewQuestionForm
  - Quiz
    - CurrentPoints
    - QuestionForm
