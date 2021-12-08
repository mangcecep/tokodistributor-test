import Home from './Home';
import { connect } from 'react-redux';
import { getCarousel } from '../../redux';

const mapStateToProps = (state: any) => {
    return {
        carousel: state.carousel,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCarousel: () => dispatch(getCarousel()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);