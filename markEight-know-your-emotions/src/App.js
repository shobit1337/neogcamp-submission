import "./App.css";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const url =
    "https://emoji-api.com/emojis?access_key=f5d86e27a007416393ecff155f529435a0b39071";
  const [emojiName, setEmojiName] = useState("");
  const [recentEmoji, setRecentEmoji] = useState([
    "🚀",
    "🚲",
    "🏍️",
    "🛵",
    "🚄",
    "✈️",
    "🛸",
    "🚤",
    "🚗",
    "🚁",
  ]);

  function addToRecent(emoji) {
    let arr = recentEmoji;
    arr = arr.filter((item) => item !== emoji);
    arr.unshift(emoji);
    setRecentEmoji(arr);
  }

  function clickEmoji(val) {
    displayEmojiName(val);
  }
  function displayEmojiName(input) {
    if (input === "") {
      setEmojiName("");
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          for (let i = 0; i < json.length; i++) {
            if (json[i].character === input) {
              let name = json[i].slug.replaceAll("-", " ");
              addToRecent(input, name.toUpperCase());
              setEmojiName(name.toUpperCase());
              break;
            } else setEmojiName("Not a valid Emoji...");
          }
        })
        .catch((e) => {
          console.error("Error while fetching api.. Error code: " + e);
          setEmojiName("");
        });
    }
  }

  function emojiHandler(item) {
    let input = item.target.value;
    displayEmojiName(input);
  }

  return (
    <div className="App">
      <nav>
        <h1>[Emoji Finder]</h1>
      </nav>
      <h2>
        This a emoji name finder app. You can type any emoji to get the name of
        it!
      </h2>
      <input
        onChange={emojiHandler}
        type="text"
        placeholder="Enter an emoji here"
      />
      <h2>{emojiName}</h2>
      <h2>
        Recent Emojis:
        {recentEmoji.map((item, index) => (
          <span
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => clickEmoji(item)}
          >
            {item}
          </span>
        ))}
        {/* <span key={idx}
          onClick={() => console.log(recentEmoji[idx])}
          style={{ cursor: "pointer" }}
        >
          {recentEmoji.reverse()}
        </span> */}
      </h2>

      <footer>
        <h3> Made with ❤️ by Shobit Deshwal</h3>
        <p>
          API used in the app :{" "}
          <a href="https://emoji-api.com">Open Emoji API</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
