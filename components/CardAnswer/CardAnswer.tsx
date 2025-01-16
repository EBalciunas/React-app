import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import cookie from "js-cookie";
import axios from "axios";
import likeImg from "../../assets/like-img.svg";
import dislikeImg from "../../assets/dislike-img.svg";

type AnswerCardProps = {
  id: string;
  answer: string;
};

const AnswerCard = ({ id, answer }: AnswerCardProps) => {
  const isAuthenticated = !!cookie.get("jwt_token");

  const onDeleteAnswer = async () => {
    if (!isAuthenticated) {
      console.log("You need to be logged in to delete an answer.");
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:3003/answers/question/:id`,
        {
          headers: {
            Authorization: `Bearer ${cookie.get("jwt_token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Answer deleted successfully!");
      }
    } catch (err) {
      console.log("Error deleting an answer", err);
    }
  };

  return (
    <div className={styles.card}>
      <span>{answer}</span>
      <div className={styles.cardBtn}>
        <button onClick={() => {}} className={styles.likeBtn}>
          <img src={likeImg.src} alt="like answer" />
        </button>

        <button onClick={() => {}} className={styles.dislikeBtn}>
          <img src={dislikeImg.src} alt="dislike answer" />
        </button>

        <Link href={"/"} passHref>
          <button onClick={onDeleteAnswer} className={styles.deleteBtn}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AnswerCard;
