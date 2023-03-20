import "./App.css";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import { Translation } from "./components/Translation";
import { arrayItems } from "./AIOptions";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const selectOption = (option) => {
    setOption(option);
  };

  const letsSeeTheMagic = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
          <Translation
            letsSeeTheMagic={letsSeeTheMagic}
            setInput={setInput}
            result={result}
          />
      )}
    </div>
  );
}

export default App;
