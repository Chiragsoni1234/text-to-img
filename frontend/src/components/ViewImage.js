import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles.css';

const ViewImage = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${id}`);
        setImageData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching image:", error.message);
        setLoading(false);
      }
    };
    fetchImage();
  }, [id]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageData.imageUrl;
    link.download = `generated-image-${id}.png`;
    link.click();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Generated Image 🎉</h1>
      {imageData && (
        <>
          <img src={imageData.imageUrl} alt="Generated" />
          <button onClick={handleDownload}>Download Image</button>
        </>
      )}
    </div>
  );
};

export default ViewImage;
