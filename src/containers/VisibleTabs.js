import { connect } from 'react-redux';
import Body from '../components/body';

const mapStateToProps = ({ store }) => {
  return {
    store,
  };
};

export default connect(mapStateToProps)(Body);
