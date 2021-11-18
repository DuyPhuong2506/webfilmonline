import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./styles.scss";
function MovieSearch(props) {
    const [title, setTitle] = useState("");
    const history = useHistory();
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = () => {
    title ? history.push(`/search/${title}`) : history.push("/")
    console.log(title);
  };
  return (
    <div class="box">
      <form class="sbox" action="/search" method="get">
        <input
          class="stext"
          type="text"
          onChange={changeHandler}
          name="q"
          placeholder="Tìm kiếm phim..."
        />
        <a class="sbutton" onClick={handleSubmit} type="submit">
          <i class="fa fa-search"></i>
        </a>
      </form>
    </div>
  );
}

export default MovieSearch;
