import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifier, newValue) {
  setUserInput((prevInput) => {
      return {
          ...prevInput,
          [inputIdentifier]: +newValue,
      }
  })
}

const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a valid duration (at least 1 year).</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
