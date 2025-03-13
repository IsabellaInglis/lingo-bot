import StartOptions from "../../components/StartOptions/StartOptions";
import "./HomePage.scss";

export default function HomePage({
  selectedLanguage,
  setSelectedLanguage,
  selectedTopic,
  setSelectedTopic,
  setNameValue,
}) {
  return (
    <>
      <StartOptions
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        setNameValue={setNameValue}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
    </>
  );
}
