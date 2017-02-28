import { connect } from 'react-redux'
import { getRandomImages } from '../redux/actions/index'
import RandomImages from '../components/RandomImages.js'

export default connect(
  (state, ownProps) => ({
  images: state.images
}),
  {onRandomImages: () => getRandomImages}
)(RandomImages)