import React, { useEffect, useState } from "react";
import "./Questions.css";
import instance from "../axios";
import SwipeButtons from "./SwipeButtons";
import useAuth from "../Contexts/authContext";
import Subjects from "./Subjects";

const Questions = () => {
  const [subjects, setSubjects] = useState([]);
  // const { token } = useAuth();
  const token = localStorage.getItem("token");
  const getSubject = async () => {
    try {
      const response = await instance.get("/question", {
        headers: { "x-access-token": `${token}` },
      });
      setSubjects(response.data.subjects);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSubject();
  }, []);

  return (
    <div className="questions__div">
      <div className="questions__offer">
        <p className="questions__need">Keres</p>
        <p className="questions__need">Segít</p>
      </div>
      <div className="question__container">
        {subjects.map((subject) => {
          return <Subjects key={subject.text} text={subject.text} />;
        })}
        <SwipeButtons />
      </div>
    </div>
  );
};

export default Questions;
