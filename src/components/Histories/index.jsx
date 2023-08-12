import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import History from '../History/index.jsx';
import {HistoriesContainer} from './styles.jsx'

const Histories = ({ histories = [] }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [histories]);

return(
    <HistoriesContainer>
      {histories.map((history) => (
        <History key={history.id} history={history} />
      ))}
      <div ref={messagesEndRef} />
    </HistoriesContainer>
  );
}
Histories.propTypes = {
    histories: PropTypes.array
}

Histories.defaultProps = {
    histories: []
}

export default Histories;