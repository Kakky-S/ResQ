import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const onClickChatBot = () => history.push("./chatBot/");
  return (
    <div className="h-container">
      <header className="h-header">
        <p className="h-title">ResQ</p>
      </header>
        <div className="h-inner">
        <p className="h-text">あなたの症状は？</p>
        <button className="h-button" onClick={onClickChatBot}>診察を始める</button>
      </div>
    </div>
  );
};
