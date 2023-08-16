
import { useState } from 'react';
import axios from "axios";
import Histories from '../../components/Histories';
import Form from '../../components/Form'
import env from '../../env';

const Home = () => {
  
  const [histories, setHistories] = useState([{message: `Щоб дізнатися, чи виконавець кацап, введіть його ім'я 👇`, type: 'response'}]);
  const [value, setValue] = useState('');

  const client = axios.create({
    baseURL: env.API_URL
  });

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const sendResponse = () => {
    client.get(`/artist/${value.trim()}`).then((response) => {
      const newResponse = response.data.nationality ? {message: response.data.nationality, type: 'response'} : 
      {message: 'На жаль, не відомо, або ж ви допустили помилку 😔', type: 'response'};

      setHistories((prevHistories) => [...prevHistories,  newResponse]);

    })
    .catch((error) => {
      setHistories((prevHistories) => [...prevHistories,  {message: 'Сервер не працює 😔', type: 'response'}]);
      console.log(error);
    });
    
    setValue('')
  }

  const onSubmit = () => {
    if(value.trim() !== ''){
    const newQuery = {message: value.trim(), type: 'query'};
    setHistories((prevHistories) => [...prevHistories, newQuery]);
    sendResponse();
   }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      onSubmit();
    }
  };
  
  return(
    <div>
      {histories.length > 0 ? (
        <div>
          <Histories histories={histories} />
        </div>
      ) : null}
      <Form value={value} handleChange={handleChange} handleKeyDown={handleKeyDown} onSubmit={onSubmit} />
    </div>
    )
}

export default Home;
