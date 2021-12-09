import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import { Loader } from "../../Components";

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

const Test = (d: {
    product: any,
    getProduct: any,
    getProductTotal: any,
    productTotal: any
}) => {

    const [productState, setProductState] = React.useState<ProductData[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const pages = 2;

    React.useEffect(() => {
        d.getProduct();
    }, []);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            d.product && d.product.data && setProductState(d.product.data);
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timeout);
    }, [d.product]);


    return loading ? <Loader /> : (
        <InfiniteScroll
            className="row"
            next={() => d.getProduct(pages)}
            dataLength={productState.length}
            hasMore={false}
            loader={<div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>}>
            {
                productState.map((ps, index) => (
                    <div className="col-md-3 col-sm-6 col-xs-6  col-ss-6 mt-4" key={index}>
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
        </InfiniteScroll>
    )
}

export default Test

// import InfiniteScroll from "react-infinite-scroll-component";

// const style = {
//     height: 30,
//     border: "1px solid green",
//     margin: 6,
//     padding: 8
// };

// class Test extends React.Component {
//     state = {
//         items: Array.from({ length: 20 })
//     };

//     fetchMoreData = () => {
//         // a fake async api call like which sends
//         // 20 more records in 1.5 secs
//         setTimeout(() => {
//             this.setState({
//                 items: this.state.items.concat(Array.from({ length: 20 }))
//             });
//         }, 1500);
//     };

//     render() {
//         return (
//             <div>
//                 <InfiniteScroll
//                     dataLength={this.state.items.length}
//                     next={this.fetchMoreData}
//                     hasMore={true}
//                     loader={<div className="spinner-border text-primary" role="status">
//                         <span className="sr-only">Loading...</span>
//                     </div>}
//                 >
//                     {this.state.items.map((i, index) => (
//                         <div style={style} key={index}>
//                             div - #{index}
//                         </div>
//                     ))}
//                 </InfiniteScroll>
//             </div>
//         );
//     }
// }

// export default Test

//  productLoading ? <Loader /> : productState.map((ps, index) => (
//                                 <div className="col-md-3 col-sm-6 col-xs-6 mt-4" key={index}>
//                                     <div className="card-group">
//                                         <div className="card">
//                                             <div className="card-header">
//                                                 <Link to="#" className="d-block blur-shadow-image">
//                                                     <img src={ps.image_uri} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg" />
//                                                 </Link>
//                                                 <h5 className="font-weight-normal mt-3">
//                                                     <Link to="#">{ps.product_name}</Link>
//                                                 </h5>
//                                             </div>
//                                             <div className="card-body">
//                                                 <p className="mb-0">Kode Produk: {ps.product_code}</p>
//                                                 <p className="mb-0">Kategori: {ps.mainmenu_name} - {ps.submenu_name}</p>
//                                                 <p className="mb-0">Variant: {ps.variant_descriptions}</p>
//                                             </div>
//                                             <hr className="dark horizontal my-0" />
//                                             <div className="card-footer d-flex">
//                                                 <p className="font-weight-normal my-auto">Rp. {ps.normal_price}</p>
//                                                 <i className="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
//                                                 <p className="text-sm my-auto"> {ps.location}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))