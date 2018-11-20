import { connect } from 'react-redux';
import Footer from '../components/footer';

const mapStateToProps = ({ store }) => {
  return {
    store,
  };
};

export default connect(mapStateToProps)(Footer);
