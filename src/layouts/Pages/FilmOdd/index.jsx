import React ,{ useEffect, useState } from 'react';
import { apiFilm } from '../../../services/clientApi';
import MoiveSection from '../../Client/MovieSection';


function FilmOdd(props) {
    const [filmOdd ,setFilmOdd] = useState([]);
    const idFilmOdd = '2c701ec1-6fd5-4314-af55-cde0e6df85e7';
    useEffect(() => {
        apiFilm.fetchFilms(idFilmOdd).then((res) =>{
            setFilmOdd(res.data);
        })
    },[])
    return (
        <div>
            <MoiveSection data={filmOdd}/>
        </div>
    );
}

export default FilmOdd;