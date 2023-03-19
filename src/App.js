import './App.css';

import Service from './services/get-service'
import { useEffect, useState } from 'react';
import CharactersList from './components/common/CharactersList';
import MyComponent from './components/common/Test';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    Service.getAllCharacter()
      .then(res => res.sort((a, b) => a.name.localeCompare(b.name)))
      .then(data => data.filter((item, index, arr) => {
        return arr.findIndex(el => el.name === item.name) === index;
      }))
      .then(sorted => setData(sorted))
  }, []);

  return (
    <div>
      {data && <CharactersList data={data}/>}
      <MyComponent />
    </div>
  );
}

export default App;
