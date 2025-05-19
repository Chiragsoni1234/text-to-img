import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const GenerateImage = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate`, {
        prompt
      });

      const { imageId } = response.data;

      setLoading(false);
      navigate(`/view-image/${imageId}`);
    } catch (error) {
      console.error("Error generating image:", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Generate AI Image ✨</h1>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
    </div>
  );
};

export default GenerateImage;
