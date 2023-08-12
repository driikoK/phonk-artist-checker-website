import PropTypes from 'prop-types';
import Query from '../Query';
import Response from '../Response';

const History = ({history: {message, type}}) => (
    <div>
        {type === 'query' ? (
             <Query message={message}/>
        ) : type === 'response' ? (
            <Response message={message}/>
        ) : null}
  </div>
)

History.propTypes = {
    history: PropTypes.shape({
        message: PropTypes.string,
        type: PropTypes.string
    })
}

History.defaultProps = {
    history: {
        message: '',
        type: ''
    }
}

export default History;