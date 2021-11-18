import React, { useEffect, useState } from 'react';
import { apiFilm } from '../../../services/clientApi';
import MoiveSection from '../../Client/MovieSection';
FilmSerial.propTypes = {
    
};

function FilmSerial(props) {
    const [filmSerial ,setFilmSerial] = useState([]);
    const idFilmSerial = '6d086ceb-6ce0-4660-be97-34fa87cb9eca';
    useEffect(() => {
        apiFilm.fetchFilms(idFilmSerial).then((res) =>{
            setFilmSerial(res.data);
        })
    },[])
    console.log(filmSerial);
    return (
        <div>
            <MoiveSection data={filmSerial}/>
        </div>
    );
}

export default FilmSerial;