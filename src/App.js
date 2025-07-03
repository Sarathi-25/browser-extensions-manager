import "./App.css";
import { useState } from "react";
import profileImg from "./assets/images/logo.svg";
import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";
import logoDevlens from "./assets/images/logo-devlens.svg";
import logoStyleSpy from "./assets/images/logo-style-spy.svg";
import logoSpeedBoost from "./assets/images/logo-speed-boost.svg";
import logoJsonWizard from "./assets/images/logo-json-wizard.svg";
import logoTabMaster from "./assets/images/logo-tab-master-pro.svg";
import logoViewportBuddy from "./assets/images/logo-viewport-buddy.svg";
import logoMarkupNotes from "./assets/images/logo-markup-notes.svg";
import logoGridGuides from "./assets/images/logo-grid-guides.svg";
import logoPalettePicker from "./assets/images/logo-palette-picker.svg";
import logoLinkChecker from "./assets/images/logo-link-checker.svg";
import logoDomSnapshot from "./assets/images/logo-dom-snapshot.svg";
import logoConsolePlus from "./assets/images/logo-console-plus.svg";

const initialCards = [
  {
    logo: logoDevlens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: logoStyleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: logoSpeedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: logoJsonWizard,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: logoTabMaster,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: logoViewportBuddy,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: logoMarkupNotes,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: logoGridGuides,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: logoPalettePicker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: logoLinkChecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: logoDomSnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: logoConsolePlus,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [clickedCardId, setClickedCardId] = useState(null);

  const handleToggleTheme = () => setIsDark(!isDark);

  const handleToggleCard = (index) => {
    const updated = [...cards];
    updated[index].isActive = !updated[index].isActive;
    setCards(updated);
  };

  const handleRemove = (index) => {
    const cardToRemove = cards[index];
    setClickedCardId(cardToRemove.name);
    setTimeout(() => {
      const updated = [...cards];
      updated.splice(index, 1);
      setCards(updated);
      setClickedCardId(null);
    }, 150);
  };

  const getFilteredCards = () => {
    if (selectedFilter === "Active") return cards.filter((c) => c.isActive);
    if (selectedFilter === "Inactive") return cards.filter((c) => !c.isActive);
    return cards;
  };

  const containerStyle = {
    background: isDark
      ? "linear-gradient(180deg, #040918 0%, #091540 100%)"
      : "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
    color: isDark ? "white" : "black",
    minHeight: "100vh",
    paddingTop: "10px",
    transition: "background 0.5s ease",
  };

  return (
    <div style={containerStyle} className={isDark ? "dark-mode" : "light-mode"}>
      <div className="main-wrapper">
        <div className="container">
          <div className="left">
            <img src={profileImg} alt="profile" />
            <div class="imgn">Extensions</div>
          </div>
          <button className="btn1" onClick={handleToggleTheme}>
            {isDark ? (
              <img src={sun} alt="sun" />
            ) : (
              <img src={moon} alt="moon" />
            )}
          </button>
        </div>

        <div className="title">
          <div className="w1">Extensions List</div>
          <div className="btn-group">
            <button
              className={`btn2 ${selectedFilter === "All" ? "selected" : ""}`}
              onClick={() => setSelectedFilter("All")}
            >
              All
            </button>
            <button
              className={`btn3 ${
                selectedFilter === "Active" ? "selected" : ""
              }`}
              onClick={() => setSelectedFilter("Active")}
            >
              Active
            </button>
            <button
              className={`btn4 ${
                selectedFilter === "Inactive" ? "selected" : ""
              }`}
              onClick={() => setSelectedFilter("Inactive")}
            >
              Inactive
            </button>
          </div>
        </div>

        <div className="card-grid">
          {getFilteredCards().map((card, i) => (
            <div key={i} className="card">
              <div className="card-top">
                <img src={card.logo} alt={card.name} className="card-logo" />
                <div className="card-info">
                  <h3>{card.name}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
              <div className="card-bottom">
                <button
                  className={`remove-btn ${
                    clickedCardId === card.name ? "clicked" : ""
                  }`}
                  onClick={() => handleRemove(i)}
                >
                  Remove
                </button>
                <div
                  className={`toggle ${card.isActive ? "active" : ""}`}
                  onClick={() => handleToggleCard(i)}
                >
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
