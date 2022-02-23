import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import instance from "../axios";
import axios from "axios";
import "./Subjects.css";

const Subjects = ({ text }) => {
  const token = localStorage.getItem("token");
  const askOnSubject = async (text, url) => {
    try {
      const response = await instance.get(`/${url}/${text}`, {
        mode: "cors",
        headers: {
          "x-access-token": `${token}`,
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      });
      if (
        (response.status !== 201) &
        (response.status !== 409) &
        (response.status !== 500)
      ) {
        console.log("itt lesz a chat");
        await axios.put(
          "https://api.chatengine.io/chats/",
          {
            usernames: [response.data.only_helper],
            title: `${text}`,
            is_direct_chat: "False",
          },
          {
            headers: {
              "Project-ID": `${process.env.REACT_APP_PROJECT_ID}`,
              "User-Name": response.data.username,
              "User-Secret": `${window.localStorage.getItem("password")}`,
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={text} className="question__state">
      <IconButton
        className="add_to_asker"
        onClick={() => askOnSubject(text, "ask")}
      >
        <AddIcon fontSize="small" />
      </IconButton>
      <p className="Question">{text}</p>
      <IconButton
        className="add_to_asker"
        onClick={() => askOnSubject(text, "help")}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default Subjects;
