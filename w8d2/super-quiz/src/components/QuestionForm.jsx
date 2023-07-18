import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit, question } = props;

  const initialValues = {
    answer: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  const style = {
    borderColor: formData.answer.length < 10 ? "orange" : "green",
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        style={style}
        type="text"
        name="answer"
        placeholder="Enter your answer!"
        value={formData.answer}
        onChange={handleChange}
      />
      <button>ANSWER MEEEE</button>
    </form>
  );
}
