import Home from './Home';
import { connect } from 'react-redux';
import { getCardIcon, getCarousel } from '../../redux';

const mapStateToProps = (state: any) => {
    return {
        carousel: state.carousel,
        cardIcon: state.cardIcon
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCarousel: () => dispatch(getCarousel()),
        getCardIcon: () => dispatch(getCardIcon()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);