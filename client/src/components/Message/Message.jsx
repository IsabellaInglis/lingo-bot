import "./Message.scss";

export default function Message({ greeting, nameValue, speaker = 1 }) {
  return (
    <div className={`message ${speaker === 2 ? "message--speaker-2" : ""}`}>
      <div className="message__content">
        {" "}
        <div className="message__original-message">
          {greeting}, {nameValue}!
        </div>
        <div className="message__translated-message">bleh bleh</div>
      </div>
      <button className="message__btn">Translate</button>
    </div>
  );
}
