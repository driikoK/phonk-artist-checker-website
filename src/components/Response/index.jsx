import PropTypes from 'prop-types';
import { ResponseContainer } from './styles';

const Response = ({ message }) => (
    <ResponseContainer>
          {message}
    </ResponseContainer>
);

Response.propTypes = {
    message: PropTypes.string
}

export default Response;