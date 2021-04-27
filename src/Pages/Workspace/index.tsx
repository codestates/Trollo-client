import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Slick from 'react-slick';
import { SlickWrapper, Indicator } from './styles';
import Test from '../../images/test.png';

const Workspace = (): JSX.Element => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <>
            <Navbar></Navbar>
            <SlickWrapper>
                <div>
                    {/* <Slick
                    initialSlide={0}
                    beforeChange={(slide) => setCurrentSlide(slide)}
                    infinite
                    arrows={false}
                    // slidesToshow={1}
                    slidesToScroll={1}
                    >
                    {Test}
                </Slick> */}
                {Test}
                {/* <Indicator>
                    <div>
                        {currentSlide + 1}
                        {' '}
                        /
                        {2}
                    </div>
                </Indicator>   */}
                </div>
            </SlickWrapper>
        </>
    )
};

export default Workspace;