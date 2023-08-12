import PropTypes from 'prop-types';
import {QueryContainer} from './styles'

const Query = ({message}) => (
     <QueryContainer>
            {message}
    </QueryContainer>
)

Query.propTypes = {
    message: PropTypes.string
}

export default Query;