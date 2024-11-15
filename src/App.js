import React, { useState } from "react";
import "./App.css";

function App() {
  const [chatInput, setChatInput] = useState("");
  const [dashboardUrl, setDashboardUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatSubmit = async (event) => {
    setChatInput("");
    event.preventDefault();

    if (!chatInput.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 7000));

      const fetchedDashboardUrl =
        "https://play.grafana.org/d/play-bigquery-1/citibike-example-overview?orgId=1&from=2017-04-01T00:00:00.000Z&to=2018-05-31T23:59:59.000Z&timezone=utc";

      setDashboardUrl(fetchedDashboardUrl);
      setIsLoading(false);
    } catch (error) {
      console.error("ERROR: ", error);
      setIsLoading(false);
    }

    setChatInput("");
  };

  const handleInputChange = (event) => {
    setChatInput(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-content">
          {isLoading ? (
            <div className="loading-indicator">
              <div class="logo-animation">
                <img src="/images/Sprite-smallest.png" alt="Bar 1" class="bar" />
                <img src="/images/Sprite-small.png" alt="Bar 2" class="bar" />
                <img src="/images/Sprite.png" alt="Bar 3" class="bar" />
                <img src="/images/Sprite-small.png" alt="Bar 4" class="bar" />
                <img src="/images/Sprite-smallest.png" alt="Bar 5" class="bar" />
                <img src="/images/Sprite-small.png" alt="Bar 6" class="bar" />
                <img src="/images/Sprite.png" alt="Bar 7" class="bar" />
                <img src="/images/Sprite-small.png" alt="Bar 8" class="bar" />
                <img src="/images/Sprite-smallest.png" alt="Bar 9" class="bar" />
              </div>

              <h2>Loading...</h2>
            </div>
          ) : dashboardUrl ? (
            <iframe
              src={dashboardUrl}
              title="Grafana Dashboard"
              className="iframe-content"
            />
          ) : (
            <div className="placeholder">
              <div>
                <h2>Cisco Intelligent Dashboard</h2>
                <h3>Your data insights, simplified.</h3>
              </div>
            </div>
          )}
        </div>
        <form className="chat-input-form" onSubmit={handleChatSubmit}>
          <input
            className="chat-input"
            type="text"
            value={chatInput}
            onChange={handleInputChange}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button
            className="chat-submit-button"
            type="submit"
            disabled={isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
