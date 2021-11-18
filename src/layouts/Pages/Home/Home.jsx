import React, { useEffect, useState } from 'react';
import HeroSlide from '../../Client/hero-slide/HeroSlide';
import { apiFilm } from '../../../services/clientApi';
import MovieList from '../../Client/MovieList/MovieList';

function Home(props) {
    const [filmOdd ,setFilmOdd] = useState([]);
    const [filmSerial ,setFilmSerial] = useState([]);
    const idFilmSerial = '6d086ceb-6ce0-4660-be97-34fa87cb9eca';
    const idFilmOdd = '2c701ec1-6fd5-4314-af55-cde0e6df85e7';
    const linkFilmSerial = '/phim-bo'
    const linkFilmOdd = '/phim-le'
    useEffect(() => {
        apiFilm.fetchFilms(idFilmSerial).then((res) =>{
            setFilmSerial(res.data);
        })  
    },[])
    useEffect(() => {
        apiFilm.fetchFilms(idFilmOdd).then((res) =>{
            setFilmOdd(res.data);
        })  
    },[])

    return (
        <>
                <HeroSlide/>
                <div className="section  headerClient mb-3">
                    <MovieList title="Phim Bộ" typeFilm ={filmSerial} seeAll ="Xem tất cả Phim bộ" link={linkFilmSerial}/>
                    <MovieList title="Phim Lẻ"  typeFilm ={filmOdd} seeAll ="Xem tất cả Phim lẻ" link={linkFilmOdd}/>
            </div>
        </>
    );
}

export default Home;