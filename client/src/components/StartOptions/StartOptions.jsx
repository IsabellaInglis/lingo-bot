import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartOptions.scss";

export default function StartOptions({
  selectedLanguage,
  setSelectedLanguage,
  selectedTopic,
  setSelectedTopic,
  setNameValue,
}) {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleLanguageSelection = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(selectedTopic);

    const name = e.target.name.value;

    if (!name.length) {
      setErrorMsg("Please enter a name");
      return;
    }

    if (!selectedLanguage) {
      setErrorMsg("Please select a language");
      return;
    }

    setNameValue(name);
    navigate("/chatbot");
  };

  return (
    <section className="start-options">
      <h2 className="start-options__title">Options</h2>
      <form className="start-options__form" onSubmit={handleFormSubmit}>
        <label className="start-options__form-label">
          Name:
          <input
            className="start-options__input start-options__input--name"
            type="text"
            name="name"
          />
        </label>
        <label className="start-options__form-label start-options__form-label--language">
          What language would you like to learn?
          <label>
            German:
            <input
              className="start-options__input"
              type="radio"
              name="german"
              value="German"
              onChange={handleLanguageSelection}
              checked={selectedLanguage === "German"}
            />
          </label>
          <label>
            {" "}
            French:
            <input
              className="start-options__input"
              type="radio"
              name="french"
              value="French"
              onChange={handleLanguageSelection}
              checked={selectedLanguage === "French"}
            />
          </label>
          <label>
            {" "}
            Spanish:
            <input
              className="start-options__input"
              type="radio"
              name="spanish"
              value="Spanish"
              onChange={handleLanguageSelection}
              checked={selectedLanguage === "Spanish"}
            />
          </label>
        </label>
        <label className=" start-options__form-label start-options__form-label--topic">
          Pick a topic:
          <div className="start-options__btn-wrapper">
            <button
              className="start-options__btn"
              onClick={() => setSelectedTopic("cafe")}
            >
              Cafe
            </button>
            <button
              className="start-options__btn"
              onClick={() => setSelectedTopic("restaurant")}
            >
              Restaurant
            </button>
            <button
              className="start-options__btn"
              onClick={() => setSelectedTopic("airport")}
            >
              Airport
            </button>
          </div>
        </label>
        <p className="start-options__error">{errorMsg}</p>
      </form>
    </section>
  );
}
