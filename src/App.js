import Service from './services/get-service'
import { useEffect, useState } from 'react';
import CharactersList from './components/common/CharactersList';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    Service.getAllCharacter()
      .then(res => res.sort((a, b) => a.name.localeCompare(b.name)))
      .then(data => data.filter((item, index, arr) => {
        return arr.findIndex(el => el.name === item.name) === index;
      }))
      .then(sorted => setData(sorted))
  }, []);

  return (
    <>
      {data && <CharactersList data={data}/>}
    </>
  );
}

export default App;
