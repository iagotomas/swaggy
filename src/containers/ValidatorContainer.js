import {connect} from 'react-redux';
import Validator from '../components/Validator';
function mapStateToProps(state) {
  return {
	  swagger : state.get('swagger'),
  };
}


export default connect(mapStateToProps)(Validator);