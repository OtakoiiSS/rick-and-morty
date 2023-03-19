import './App.css';

import Service from './services/get-service'
import { useEffect, useState } from 'react';
import CharactersList from './components/common/CharactersList';
import MyComponent from './components/common/Test';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    Service.getCharacter()
      .then(res => res.data.results.sort((a, b) => a.name.localeCompare(b.name)))
      .then(sorted => setData(sorted))
  }, []);

  return (
    <div>
      {data && <CharactersList data={data}/>}
    </div>
  );
}

export default App;
