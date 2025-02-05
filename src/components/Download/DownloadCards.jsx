import React from "react";
import "./downloadCards.css";

const cardData = [
  {
    title: "Enjoy on your TV",
    text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="download-icon"
      >
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
      </svg>
    ),
  },
  {
    title: "Download your shows to watch offline",
    text: "Save your favourites easily and always have something to watch.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="download-icon"
      >
        <path d="M12 3v14"></path>
        <path d="M6 13l6 6 6-6"></path>
        <path d="M19 21H5"></path>
      </svg>
    ),
  },
  {
    title: "Watch everywhere",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="download-icon"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    ),
  },
  {
    title: "Create profiles for kids",
    text: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="download-icon"
      >
        <circle cx="9" cy="7" r="4"></circle>
        <circle cx="15" cy="7" r="4"></circle>
        <path d="M12 14c-4.5 0-8 2.5-8 6h16c0-3.5-3.5-6-8-6z"></path>
      </svg>
    ),
  },
];

const DownloadCards = () => {
  return (
    <div className="download-container">
      <h2 className="download-heading">More reasons to join</h2>
      <div className="download-cards">
        {cardData.map((card, index) => (
          <div className="download-card" key={index}>
            <div className="download-text-container">
              <h3 className="download-title">{card.title}</h3>
              <p className="download-text">{card.text}</p>
            </div>
            <div className="download-icon-container">{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadCards;
