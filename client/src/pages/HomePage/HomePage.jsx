import StartOptions from "../../components/StartOptions/StartOptions";
import "./HomePage.scss";

export default function HomePage({
  isLoading,
  languages,
  topics,
  phrases,
  getPhrases,
  selectedLanguage,
  setSelectedLanguage,
  selectedTopic,
  setSelectedTopic,
  setNameValue,
}) {
  return (
    <>
      <StartOptions
        isLoading={isLoading}
        languages={languages}
        topics={topics}
        phrases={phrases}
        getPhrases={getPhrases}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        setNameValue={setNameValue}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
    </>
  );
}
