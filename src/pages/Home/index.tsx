import Home from './Home';
import { connect } from 'react-redux';
import { getCardIcon, getCarousel, getProduct } from '../../redux';

const mapStateToProps = (state: any) => {
    return {
        product: state.product,
        carousel: state.carousel,
        cardIcon: state.cardIcon
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProduct: () => dispatch(getProduct()),
        getCarousel: () => dispatch(getCarousel()),
        getCardIcon: () => dispatch(getCardIcon()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);