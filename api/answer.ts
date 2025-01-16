import axios from "axios";

export const insertAnswer = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.post(`http://localhost:3003/:id/answer`, {
    headers,
  });

  return response;
};

export const getAllAnswers = async (token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`http://localhost:3003/answers`, {
    headers,
  });

  return response;
};

export const getAnswersById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.get(`http://localhost:3003/answers/${id}`, {
    headers,
  });

  return response;
};

export const deleteAnswersById = async (id: string, token: string) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.delete(
    `http://localhost:3003/answers/:id/delete`,
    {
      headers,
    }
  );

  return response;
};

export const updateAnswerStatus = async (
  id: string,
  body: object,
  token: string
) => {
  const headers = {
    authorization: token || "",
  };
  const response = await axios.put(
    `http://localhost:3003/answers/${id}`,
    body,
    {
      headers,
    }
  );

  return response;
};
