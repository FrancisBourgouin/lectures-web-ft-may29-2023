import useForm from "../hooks/useForm";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;

  const initialValues = {
    question: "",
    answer: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <section>
      <h1>Add New Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Enter a question"
          value={formData.question}
          onChange={handleChange}
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter an answer"
          value={formData.answer}
          onChange={handleChange}
        />
        <button>Add New Question!</button>
      </form>
    </section>
  );
}
