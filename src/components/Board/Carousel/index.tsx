import React, { useState, MouseEventHandler, CSSProperties } from 'react';
import { ImgWrapper, SlickWrapper } from './styles';
import { default as Slider, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Test from '../../../images/test.png';

// TODO: 안쓸거면 지우자
// interface Props {
// 	images: string;
// }
// { images }: Props

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
	const [currentSlide, setCurrentSlide] = useState(0);
	const defaultSettings: Settings = {
		slide: 'div',
		arrows: true,
		dots: true,
		infinite: true,
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<>
			<SlickWrapper>
				<Slider {...defaultSettings} beforeChange={slide => setCurrentSlide(slide)}>
					<ImgWrapper>
						<img src={Test} />
					</ImgWrapper>
					<ImgWrapper>
						<img src={Test} />
					</ImgWrapper>
				</Slider>
			</SlickWrapper>
		</>
	);
};

export default Carousel;
