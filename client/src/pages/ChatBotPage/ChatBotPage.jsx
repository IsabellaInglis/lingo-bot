import Message from "../../components/Message/Message";
import "./ChatBotPage.scss";
export default function ChatBotPage({
  selectedLanguage,
  selectedTopic,
  nameValue,
}) {
  return (
    <section className="chatbot">
      <h1 className="chatbot__title">Learning {selectedLanguage}!</h1>
      <div className="chatbot__window">
        {selectedLanguage === "German" ? (
          <Message greeting="Hallo" nameValue={nameValue} />
        ) : null}
        {selectedLanguage === "French" ? (
          <Message greeting="bonjour" nameValue={nameValue} />
        ) : null}
        {selectedLanguage === "Spanish" ? (
          <Message greeting="¡Hola" nameValue={nameValue} />
        ) : null}
      </div>
      <div className="chatbot__window-footer">
        <button className="chatbot__btn">Get new phrase</button>
      </div>
    </section>
  );
}
