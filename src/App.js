import { useEffect } from 'react';
import styled from 'styled-components';

const PopupDiv = styled.div`
  width: 304px;
  height: 330px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  color: white;
  /* font-weight: bold; */
  border-radius: 8px;
  margin: 5px;
`;

function App() {

  useEffect(() => {
    // const weatherButton = `<button id="weather-button">날씨</button>`;
    let weatherButton = document.createElement("button");
    weatherButton.innerText = "날씨";
    weatherButton.id = 'weather-button';

    // chrome.storage.local.set({ isWeatherAppRunning : true });
    // let bodyTag = document.getElementsByTagName("body");
    // bodyTag.appendChild(weatherButton);

    // console.log("window.opener: ", window.opener);
    // document.querySelector("body").append(weatherButton);

    // window.opener.document.getElementById("weather-button").style.position = "fixed";
    // window.opener.document.getElementById("weather-button").style.bottom = "70px";
    // window.opener.document.getElementById("weather-button").style.left = "50px";

  });

  return (
    <PopupDiv>
      Weather Fairy is running!
    </PopupDiv>
  );
}

export default App;
