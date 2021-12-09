import Test from './Test';
import { connect } from 'react-redux';
import { getProduct, getProductTotal } from '../../redux';

const mapStateToProps = (state: any) => {
    return {
        product: state.product,
        productTotal: state.productTotal
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProductTotal: () => dispatch(getProductTotal()),
        getProduct: (data: any) => dispatch(getProduct(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);