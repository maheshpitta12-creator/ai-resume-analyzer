import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(null);

  const analyzeResume = () => {
    setScore(85);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AI Resume Analyzer</h1>

      <input type="file" />

      <br /><br />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      {score && <h2>ATS Score: {score}%</h2>}
    </div>
  );
}

export default App;
