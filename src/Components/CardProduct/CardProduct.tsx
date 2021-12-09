import React from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '..';

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

const CardProduct = (card: {
    product: any,
    getProduct: any,
}) => {
    const [productState, setProductState] = React.useState<ProductData[]>([]);
    const [loading, setLoading] = React.useState<Boolean>(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            card.product && card.product.data && setProductState(card.product.data);
            if (productState.length > 0) {
                setLoading(false);
            }
        }, 4000);
        return () => clearTimeout(timeout);
    }, [productState.length, card]);

    return loading ? <Loader /> : productState.map((ps, index) => (
        <div className="col-md-4 col-sm-6 col-xs-6" key={index}>
            <div className="card-group">
                <div className="card" data-animation="true">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <Link to="#" className="d-block blur-shadow-image">
                            <img src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-1-min.jpg" alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
                        </Link>
                        <div className="colored-shadow" style={{ backgroundImage: `url("&quot;https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-1-min.jpg&quot")` }}></div>
                    </div>
                    <div className="card-body text-center">
                        <div className="d-flex mt-n6 mx-auto">
                            <Link to="#" className="btn btn-link text-primary ms-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Refresh">
                                <i className="material-icons text-lg">refresh</i>
                            </Link>
                            <button className="btn btn-link text-info me-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit">
                                <i className="material-icons text-lg">edit</i>
                            </button>
                        </div>
                        <h5 className="font-weight-normal mt-3">
                            <Link to="#">Cozy 5 Stars Apartment</Link>
                        </h5>
                        <p className="mb-0">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                        </p>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer d-flex">
                        <p className="font-weight-normal my-auto">$899/night</p>
                        <i className="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
                        <p className="text-sm my-auto"> Barcelona, Spain</p>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default CardProduct
