import React, { useEffect, useState } from "react";
import { apiAdminFilm } from "../../../services/adminApi";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Button, { OutlineButton } from "../button/Button";
import "./hero-slide.scss";
import { useHistory } from "react-router";
import { apiFilm } from "../../../services/clientApi";
import { BASE_URL_IMAGE } from "../../../Settings/configUrl";

const HeroSlide = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    apiAdminFilm.fetchApiListFilm().then((res) => {
      setSliderData(res.data);
    });
  }, []);
  const sliderSlice = sliderData.slice(0, 5);

  SwiperCore.use([Autoplay]);

  // const SliderData = [
  //     {
  //         title : "See You Again",
  //         imageN : "https://i3.wp.com/img.bilutv.cc/film/18916/poster.jpg",
  //         overview : "Neeus is has on you may how is the big ?",
  //       image:
  //         'https://i.ytimg.com/vi/ITlQ0oU7tDA/maxresdefault.jpg'
  //     },
  //     {
  //         title : "See You Again",
  //         imageN : "https://i3.wp.com/img.bilutv.cc/film/18916/poster.jpg",
  //         overview : "Neeus is has on you may how is the big ?",
  //       image:
  //         'https://koicine.com/wp-content/uploads/2020/12/a4cea40b4548ac16f559.jpg'
  //     },
  //     {
  //         title : "See You Again",
  //         imageN : "https://i3.wp.com/img.bilutv.cc/film/18916/poster.jpg",
  //         overview : "Neeus is has on you may how is the big ?",
  //       image:
  //         'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  //     },
  //     {
  //         title : "See You Again",
  //         imageN : "https://i3.wp.com/img.bilutv.cc/film/18916/poster.jpg",
  //         overview : "Neeus is has on you may how is the big ?",
  //       image:
  //         'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
  //     },
  //     {
  //         title : "See You Again",
  //         imageN : "https://i3.wp.com/img.bilutv.cc/film/18916/poster.jpg",
  //         overview : "Neeus is has on you may how is the big ?",
  //       image:
  //         'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  //     }
  //   ];

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {sliderSlice.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {
                movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
            } */}
    </div>
  );
};

const HeroSlideItem = (props) => {
    const { item } = props;
    let hisrory = useHistory();
    const idFilm = item.id;
    const [imageFilm, setImageFilm] = useState([]);
  useEffect(() => {
    apiFilm.fetchApiUploadImageFilm(idFilm).then((res) => {
      setImageFilm(res.data);
    });
  }, []);
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(https://i.ytimg.com/vi/ITlQ0oU7tDA/maxresdefault.jpg)` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.name}</h2>
          <div className="overview">{item.desc}</div>
          <div className="btns">
            <Button>Watch now</Button>
            <OutlineButton>Watch trailer</OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={imageFilm ? `${BASE_URL_IMAGE}/${imageFilm.logoUrl}` : null} alt="" />
        </div>
      </div>
    </div>
  );
};

// const TrailerModal = props => {
//     const item = props.item;

//     const iframeRef = useRef(null);

//     const onClose = () => iframeRef.current.setAttribute('src', '');

//     return (
//         <Modal active={false} id={`modal_${item.id}`}>
//             <ModalContent onClose={onClose}>
//                 <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
//             </ModalContent>
//         </Modal>
//     )
// }

export default HeroSlide;
