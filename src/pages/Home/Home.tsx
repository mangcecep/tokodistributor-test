import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Loader, Navbar } from '../../Components';

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

interface ProductData {
    id: number,
    supplier_code: string,
    supplier_name: string,
    location: string,
    total_sold: number,
    image_name: string,
    product_slug: string,
    product_id: number,
    product_code: string,
    product_name: string,
    product_score_review: number,
    product_total_review: number,
    product_total_favourite: number,
    variant_id: number,
    variant_descriptions: string,
    variant_stock: number,
    product_stock: number,
    sku: string,
    main_menu_id: number,
    sub_menu_id: number,
    sub_menucategory_id: number,
    mainmenu_name: string,
    submenu_name: string,
    sub_menucategory_name: string,
    mainmenu_slug: string,
    submenu_slug: string,
    submenu_category_slug: string,
    normal_price: number,
    agent_price: number,
    member_price: number,
    product_price: number,
    agent_commision: number,
    wajib_insurance: number,
    product_warranty: string
    product_condition: number,
    product_original: number,
    discount_percentage: number,
    comission_percentage: number,
    is_rfc: boolean,
    total_view: number,
    image_uri: string,
    created: string,
    updated_at: string,
    is_has_video: boolean,
    is_cod: number,
    is_autoresi: number,
    is_tokoku: number,
    is_wholesale: number,
    supplier_score_review: number,
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
    const [productState, setProductState] = React.useState<ProductData[]>([]);
    const [productLoading, setProducLoading] = React.useState<Boolean>(false);

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
        prop.getProduct();
        prop.getCarousel();
        prop.getCardIcon();
    }, []);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            prop.product && prop.product.data && setProductState(prop.product.data);
            if (caroselState.length > 0) {
                setProducLoading(false);
            }
        }, 4000);
        return () => clearTimeout(timeout);
    }, [caroselState.length, prop]);

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
                <div className="col-lg-11 mx-auto">
                    <div className="row clearfix mt-4">
                        {
                            productLoading ? <Loader /> : productState.map((ps, index) => (
                                <div className="col-md-4 col-sm-6 col-xs-6 mt-4" key={index}>
                                    <div className="card-group">
                                        <div className="card">
                                            <div className="card-header">
                                                <Link to="#" className="d-block blur-shadow-image">
                                                    <img src={ps.image_uri} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                                                </Link>
                                                <h5 className="font-weight-normal mt-3">
                                                    <Link to="#">{ps.product_name}</Link>
                                                </h5>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">Kode Produk: {ps.product_code}</p>
                                                <p className="mb-0">Kategori: {ps.mainmenu_name} - {ps.submenu_name}</p>
                                                <p className="mb-0">Variant: {ps.variant_descriptions}</p>
                                            </div>
                                            <hr className="dark horizontal my-0" />
                                            <div className="card-footer d-flex">
                                                <p className="font-weight-normal my-auto">Rp. {ps.normal_price}</p>
                                                <i className="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
                                                <p className="text-sm my-auto"> {ps.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
