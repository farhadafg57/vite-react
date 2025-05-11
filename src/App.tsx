import { useEffect, useState } from "react";

function App() { const [prompt, setPrompt] = useState("Loading...");

useEffect(() => { fetch("/Prompt.txt") // Capital "P" .then((res) => res.text()) .then((text) => setPrompt(text)) .catch(() => setPrompt("Failed to load prompt.")); }, []);

return ( <div style={{ padding: "1.5rem", fontFamily: "sans-serif" }}> <h1>Siraat Prompt Preview</h1> <pre style={{ background: "#f9f9f9", padding: "1rem", borderRadius: "8px", whiteSpace: "pre-wrap", }} > {prompt} </pre> </div> ); }

export default App;

