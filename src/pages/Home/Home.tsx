import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Loader, Navbar } from '../../Components';
import InfiniteScrollNoLibrary from './InfiniteScrollNoLibrary';

interface CarouselData {
    deep_link: string;
    title: string;
    url: string;
    url_mobile: string
}

interface CardData {
    category_id: number;
    category_image: string;
    category_name: string,
    category_slug: string,
    icon: string,
    icon_web: string,
    type: number
}


const Home = (
    prop: {
        getCarousel: any,
        carousel: any,
        cardIcon: any,
        getCardIcon: any,
        getProduct: any,
        product: any
    }
) => {
    const [caroselState, setCarouselState] = React.useState<CarouselData[]>([]);
    const [cardState, setCardState] = React.useState<CardData[]>([]);
    const [loading, setLoading] = React.useState<Boolean>(true);
    const [cardLoading, setCardLoading] = React.useState<Boolean>(false);

    const Card = styled.div`
    max-width: 200px; 
    margin-right: 10px;
    margin-left: 10px;
    @media only screen and (max-width: 420px){
        max-width: 100px; 
        max-height: 200px;
        font-size: 8px;
    }
`

    const settingsCard = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        className: "slider variable-width",
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    React.useEffect(() => {
        prop.getCarousel();
        prop.getCardIcon();
    }, []);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            prop.carousel && prop.carousel.data && setCarouselState(prop.carousel.data);
            if (caroselState.length > 0) {
                setLoading(false);
            }
        }, 2000);
        return () => clearTimeout(timeout);
    }, [caroselState.length, prop]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            prop.cardIcon && prop.cardIcon.data && setCardState(prop.cardIcon.data);
            if (caroselState.length > 0) {
                setCardLoading(true);
            }
        }, 3000);
        return () => clearTimeout(timeout);
    }, [caroselState.length, prop]);


    return loading ? <Loader /> : (
        <div className="container-sm shadow py-4 mb-0">
            <div className="row clearfix">
                <Navbar />
                <div className="col-lg-10 mx-auto">
                    <Slider {...settings}>
                        {
                            caroselState.length > 0 && caroselState.map((data, index) => (
                                <div className="carousel-item" key={index} style={{ marginRight: 5, marginLeft: 5 }}>
                                    <img className="d-block w-100 img-rounded" src={data.url} alt="First slide" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <div className="container" style={{ marginTop: 50, marginBottom: 100 }}>
                <div className="row clearfix mt-4">
                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 mx-auto"> */}
                    <div className="carousel slide" >
                        <div className="col-lg-11 mx-auto">
                            <Slider {...settingsCard}>
                                {
                                    cardLoading ? cardState.map((data, index) => (
                                        <Card key={index} >
                                            <Link to="#">
                                                <div className="card card-background" >
                                                    <div className="full-background" style={{ backgroundImage: `url("${data.icon}")` }}></div>
                                                    <div className="card-body">
                                                        <p style={{ fontSize: 11 }}>{data.category_name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Card>
                                    )) : <Loader />
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: 0, marginBottom: 50 }}>
                <InfiniteScrollNoLibrary />
                {/* <Test /> */}
            </div>
        </div>
    );
}

export default Home
