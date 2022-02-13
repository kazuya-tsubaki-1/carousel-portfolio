import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vanta from "../components/vanta";
import { GetStaticProps } from 'next'

type Portfolio = {
  id: number;
  img: string;
  headline: string;
  description: string;
  skill: string;
}

type Props = {
  portfolios: Portfolio[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const imgPath = '/images/';

  // your portfolios
  const portfolios = [
    {
      id: 1,
      img: imgPath + 'img1.jpg',
      headline: 'title 1',
      description: 'description 1',
      skill: 'using skill 1'
    },
    {
      id: 2,
      img: imgPath + 'img2.jpg',
      headline: 'title 2',
      description: 'description 2',
      skill: 'using skill 2'
    },
    // ...
  ]
  
  return { props: { portfolios } }
}


type SlickParams = {
  dots: boolean,
  infinite: boolean,
  arrows: boolean,
  slidesToShow: number,
  slidesToScroll: number,
  swipeToSlide: boolean,
  cssEase: string,
  pauseOnHover: boolean
}

const Main = data => {
  const [clientHeight, getClientHeight] = useState(0)

  useEffect(() => {
    const getHeight: number = document.documentElement.clientHeight;
    if(!getHeight) return
    getClientHeight(document.documentElement.clientHeight)
    const slickTrack = document.getElementsByClassName('slick-track') as HTMLCollectionOf<HTMLElement>;
    slickTrack[0].style.height = `${getHeight - 40}px`
  }, [clientHeight])

  // title
  const title: string = 'title'

  // description
  const description: string = 'description'

  // slick Settings
  const slickSettings: SlickParams = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: 'easeOut',
    pauseOnHover: true
  };

  const formatText = text => text.split(/(\n)/g).map((val, index) => (val === '\n') ? <br key={index} /> : val)
  const slides = data.portfolios.map(item => 
    <div key={item.id.toString()} className='slide-wrap'>
      <img src={item.img} className={'mx-auto'} loading="lazy" />
      <div className='slick-text'>
        <h3 className='text-xl mb-4'>{item.headline}</h3>
        <p className='text-sm mb-2 leading-5'>{formatText(item.description)}</p>
        <p className='text-sm opacity-60'>{item.skill}</p>
      </div>
    </div>)

  return (
    <div>
      <Vanta />
      <Slider {...slickSettings}>
        <div className='slide-wrap top'>
          <h3 className='text-3xl mb-5'>{title}</h3>
          <p className='text-sm'>{description}</p>
          <div className='arrow'></div>
        </div>
        {slides}
      </Slider>
    </div>
  );
}

export default Main;