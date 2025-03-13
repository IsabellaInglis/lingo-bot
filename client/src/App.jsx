import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ChatBotPage from "./pages/ChatBotPage/ChatBotPage";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                setNameValue={setNameValue}
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
              />
            }
          />
          <Route
            path="/chatbot"
            element={
              <ChatBotPage
                nameValue={nameValue}
                selectedTopic={selectedTopic}
                selectedLanguage={selectedLanguage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
