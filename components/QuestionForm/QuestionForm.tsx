import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Link from "next/link";

const AskQuestionForm = () => {
  const [question, setQuestion] = useState("");

  const router = useRouter();

  const isAuthenticated = !!cookie.get("jwt_token");

  const onAskQuestion = async () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to ask a question.");
      return;
    }

    if (!question.trim()) {
      console.log("Please enter a question.");
      return;
    }

    try {
      const token = cookie.get("jwt_token")?.trim();
      if (!token) {
        console.log("No JWT token found.");
        return;
      }

      console.log("Sending request to the server...");

      const response = await axios.post(
        "http://localhost:3003/question",
        { question_text: question },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        console.log("Your question was posted!");
        router.push("/");
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (err) {
      console.error(
        "Error posting question:",
        err.response ? err.response.data : err
      );
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.wrapper}>
          <h1>Ask a Question</h1>
          <input
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={styles.input}
          />
          <button onClick={onAskQuestion} className={styles.button}>
            Submit
          </button>
          <Link href={"/"} passHref>
            <button className={styles.secondaryButton}>Cancel</button>
          </Link>
        </div>
      ) : (
        <p className={styles.error}>
          You must log in or register to your account to get access to ask
          questions.
        </p>
      )}
    </div>
  );
};

export default AskQuestionForm;
