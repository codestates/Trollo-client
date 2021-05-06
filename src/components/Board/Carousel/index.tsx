import React, { MouseEventHandler, CSSProperties } from 'react';
import { ImgWrapper, SlickWrapper, TaskGIF } from './styles';
import { default as Slider } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel3 from '../../../images/carousel3.png';
import carousel5 from '../../../images/carousel5.png';
import TeskTest from '../../../images/TaskTest.gif';

const NextArrow = (props: {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
	const { className, style, onClick } = props;

	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				right: '2%',
				zIndex: 1,
			}}
			onClick={onClick}
		/>
	);
};

const PrevArrow = (props: {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				left: '2%',
				zIndex: 1,
			}}
			onClick={onClick}
		/>
	);
};

const Carousel = (): JSX.Element => {
	const Settings = {
		slide: 'div',
		arrows: true,
		dots: true,
		infinite: true,
		autoplay: true,
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		autoplaySpeed: 4000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<>
			<SlickWrapper>
				<Slider {...Settings}>
					<ImgWrapper>
						<img src={carousel3} />
					</ImgWrapper>
					<ImgWrapper>
						<TaskGIF src={TeskTest} />
						<img src={carousel5} />
					</ImgWrapper>
				</Slider>
			</SlickWrapper>
		</>
	);
};

export default Carousel;
