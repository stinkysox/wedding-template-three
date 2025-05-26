import React from "react";
import "./WeddingVideos.css";
import { FaYoutube } from "react-icons/fa";

const WeddingVideos = () => {
  const videoData = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=MzLEO98OMQg",
      title: "Wes Anderson Wedding Film",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=3ppE8JcZoX0",
      title: "Video 2",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=k1gj5wCLAhc",
      title: "Video 3",
    },
  ];

  // Convert normal YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="wedding-videos">
      <h1>Love in Motion</h1>
      <p>Turning your wedding into timeless films.</p>
      <div className="video-thumbnails">
        {videoData.map((video) => (
          <div key={video.id} className="video-container">
            <iframe
              src={getEmbedUrl(video.url)}
              title={video.title}
              className="video-iframe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <a
        href="https://www.youtube.com"
        className="youtube-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default WeddingVideos;
