import { ChatEngine } from "react-chat-engine";
import "./Chatengine.css";

const DirectMessaging = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        userName={window.localStorage.getItem("username")}
        userSecret={window.localStorage.getItem("password")}
        projectID={process.env.REACT_APP_PROJECT_ID}
      />
    </div>
  );
};

export default DirectMessaging;
