import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuestionAnswerForm from "@/components/QuestionAnswerForm/QuestionAnswerForm";
import AnswerCard from "@/components/CardAnswer/CardAnswer";

const AnswerQuestionPage = () => {
  return (
    <div>
      <Header />
      <AnswerCard id="unique-answer-id" answer="Example of question" />
      <QuestionAnswerForm id="some-question-id" />
      <Footer />
    </div>
  );
};

export default AnswerQuestionPage;
