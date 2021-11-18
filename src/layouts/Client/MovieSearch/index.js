import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiFilm } from "../../../services/clientApi";
import "./styles.scss";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = "vi";

function MovieSearch(props) {
  const [title, setTitle] = useState("");
  const history = useHistory();
  const [isListening, setIsListening] = useState(false);

  const changeHandler = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = () => {
    title ? history.push(`/search/${title}`) : history.push("/");
  };

  var transcript = "";
  const handleVoice = () => {
    if (isListening) {
      mic.start();
      console.log("đang nghe");
    } else {
      mic.stop();
      console.log("dừng");
      setTitle("");
    }
    mic.onStart = () => {
      console.log("mic on");
    };
    mic.onresult = (e) => {
      transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setTitle(transcript);
      console.log(transcript);
    };
    mic.onsoundend = (e) => {
      console.log(e);
    };
  };

  useEffect(() => {
    handleVoice();
  }, [isListening]);
  return (
    <div className="box">
      <form className="sbox" action="/search" method="get">
        <input
          className="stext"
          type="text"
          value={title}
          onChange={changeHandler}
          name="q"
          placeholder="Tìm kiếm phim..."
        />
        <a className="sbutton" onClick={handleSubmit} type="submit">
          <i className="fa fa-search"> </i>

        </a>
      </form>{" "}
      <button
        className="sbuttonMic"
        onClick={() => {
          setIsListening((preState) => !preState);
        }}
      >
        {" "}
        <img className="icon-mic" src="https://www.clipartmax.com/png/middle/19-193500_png-file-mic-png-icon.png"></img> 
      </button>
    </div>
  );
}
export default MovieSearch;
