import React from "react";

export function Translation({ letsSeeTheMagic, setInput, result }) {
  return (
    <div className="translation-container">
        <h2>Translated Open AI Answers</h2>
      <textarea
        className="text-area"
        aria-label="text_area_for_ai_question"
        cols={40}
        rows={15}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="translation-container action-button" onClick={letsSeeTheMagic}>
        Let's See What Happens
      </button>
      <h3 className="translation-container result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
