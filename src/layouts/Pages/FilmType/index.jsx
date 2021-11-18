import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFilm } from "../../../services/clientApi";
import MoiveSection from "../../Client/MovieSection";
FilmType.propTypes = {};

function FilmType(props) {
  const { slug } = useParams();
  const [typeFilm, setTypeFilm] = useState([]);
  console.log("🚀 ~ file: i ndex.jsx ~ line 13 ~ FilmType ~ typeFilm", typeFilm) 
  console.log(slug);
  useEffect(() => {
    apiFilm.fetchApiListTypeFilm(slug)
    .then((res) =>{
      setTypeFilm(res.data);
      console.log(res.data);
  })

  }, []);
  return (
    <div>
      <h3 className="title-section ">Kết quả tìm kiếm: <span>{slug}</span></h3>
      <div>
        {
          typeFilm.length > 0 ? 
          <MoiveSection data={typeFilm} />
          : "Dang tai ......"
        }
      </div>
    </div>
  );
}

export default FilmType;
