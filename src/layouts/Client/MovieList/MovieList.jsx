import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import './movie-list.scss';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = props => {
    const {title, typeFilm,seeAll,link} = props;
    return (
        <div className="movie-list">
            <div className="title">
                <h1 className="kind-of-movie">{title}</h1>
                <Link to={link}>
                <p type="button" className="see-all">{seeAll}</p>
                </Link>
            </div>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={5}
            >
                {
                    typeFilm.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard dataItem={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;
