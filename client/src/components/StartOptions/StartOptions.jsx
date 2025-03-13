import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartOptions.scss";

export default function StartOptions() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const navigate = useNavigate();

  const handleLanguageSelection = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNameValue(e.target.name.value);
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
        <label className="start-options__form-label">
          What language would you like to learn?
          <label>
            German:
            <input
              className="start-options__input"
              type="radio"
              name="german"
              value="german"
              onChange={handleLanguageSelection}
              checked={selectedLanguage === "german"}
            />
          </label>
          <label>
            {" "}
            French:
            <input
              className="start-options__input"
              type="radio"
              name="french"
              value="french"
              onChange={handleLanguageSelection}
              checked={selectedLanguage === "french"}
            />
          </label>
          <label>
            {" "}
            Spanish:
            <input
              className="start-options__input"
              type="radio"
              name="spanish"
              value="spanish"
              onChange={handleLanguageSelection}
              checked={selectedLanguage === "spanish"}
            />
          </label>
        </label>
        <label className=" start-options__form-label">
          Pick a topic:
          <div className="start-options__btn-wrapper">
            <button className="start-options__btn">Cafe</button>
            <button className="start-options__btn">Restaurant</button>
            <button className="start-options__btn">Airport</button>
          </div>
        </label>
      </form>
    </section>
  );
}
