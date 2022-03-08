import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  responseType: "json",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

// const getQuestion = async (token) => {
//   try {
//     const questions = await instance.get("/question", {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return questions.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default instance;
