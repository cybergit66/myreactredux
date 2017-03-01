import { connect } from 'react-redux'
import { decrease } from '../redux/actions/index'
import Counter from '../components/Counter.js'

//const mapDispatchToProps = (dispatch, ownProps) => ({
//  onDecrement: () => {
//    dispatch(decrease())
//  }
//})

export default connect(
  (state, ownProps) => ({count: state.count}),
  { onDecrement: decrease }
)(Counter)