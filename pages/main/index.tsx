import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuestionCard from "@/components/QuestionCard/QuestionCard";

const Main = () => {
  return (
    <div>
      <Header />
      <QuestionCard id={""} question={""} />
      <Footer />
    </div>
  );
};

export default Main;
