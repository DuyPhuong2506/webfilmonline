import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { apiFilm } from "../../../services/clientApi";
import "./styles.scss";
import MoiveSection from "../../Client/MovieSection";
FilmSearched.propTypes = {};

function FilmSearched(props) {
  const { name } = useParams();
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    apiFilm.fetchApiSearchFilm(name).then((res) => {
      setDataSearch(res.data);
    });
    console.log(dataSearch);
  }, [name]);
  return (
    <div>
      <h3 className="title-section ">Kết quả tìm kiếm: <span>{name}</span></h3>
      <MoiveSection data={dataSearch} />
    </div>
  );
}

export default FilmSearched;
