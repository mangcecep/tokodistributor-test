import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Loader, Navbar } from '../../Components';

interface CarouselData {
    deep_link: string;
    title: string;
    url: string;
    url_mobile: string
}
const Home = (
    prop: {
        getCarousel: any,
        carousel: any
    }
) => {
    const [caroselState, setCarouselState] = React.useState<CarouselData[]>([]);
    const [loading, setLoading] = React.useState<Boolean>(true);

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

    return loading ? <Loader /> : (
        <div className="container-sm shadow py-4">
            <div className="row clearfix">
                <Navbar />
                <div className="col-lg-10 mx-auto">
                    <div className="carousel slide" >
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
            </div>
            <div className="container-sm" style={{ marginTop: 100 }}>
                <div className="row clearfix mt-4">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 mx-auto">
                        <div className="card" >
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <Link to="#" className="d-block blur-shadow-image">
                                    <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-1-min.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                </Link>
                            </div>
                            <div className="card-body text-center">
                                <p className="font-weight-normal">
                                    Cozy 5 Stars Apartment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
