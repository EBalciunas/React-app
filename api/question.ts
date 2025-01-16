import axios from "axios";

export const insertQuestion = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.post(`http://localhost:3003/question`, {
    headers,
  });

  return response;
};

export const getAllQuestions = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`http://localhost:3003/questions`, {
    headers,
  });

  return response;
};

export const getQuestionsById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`http://localhost:3003/questions/${id}`, {
    headers,
  });

  return response;
};

export const deleteQuestionsById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.delete(`http://localhost:3003/question/:id`, {
    headers,
  });

  return response;
};

export const updateQuestionStatus = async (
  id: string,
  body: object,
  token: string
) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.put(
    `http://localhost:3003/questions/${id}`,
    body,
    {
      headers,
    }
  );

  return response;
};
