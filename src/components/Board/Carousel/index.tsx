import React, { useState } from 'react';
import { ImgWrapper, Indicator, SlickWrapper } from './styles';
import { default as Slider, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
	images: string;
}

const Carousel = ({ images }: Props): JSX.Element => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const defaultSettings: Settings = {
		arrows: true,
		infinite: true,
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<SlickWrapper>
				<Slider {...defaultSettings} beforeChange={slide => setCurrentSlide(slide)}>
					<ImgWrapper>{images}</ImgWrapper>
					<ImgWrapper>{images}</ImgWrapper>
				</Slider>
				<Indicator>
					<div>
						{currentSlide + 1} /{2}
					</div>
				</Indicator>
			</SlickWrapper>
		</>
	);
};

export default Carousel;
