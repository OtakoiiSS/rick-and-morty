import './App.css';

import Service from './services/get-service'
import { useEffect, useState } from 'react';
import CharactersList from './components/common/CharactersList';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    Service.getCharacter()
      .then(res => setData(res.data.results))
  }, []);

  return (
    <div>
      {data && <CharactersList data={data}/>}
    </div>
  );
}

export default App;
