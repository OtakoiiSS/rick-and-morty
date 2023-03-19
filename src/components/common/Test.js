import React, { useState } from 'react';
import Service from '../../services/get-service';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  Service.getAllCharacter()

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Функція, що повертає новий масив з елементами, що відповідають введеному тексту
  const filterItems = (input) => {
    return ['apple', 'banana', 'orange', 'pear'].filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
  };

  // При кожній зміні значення інпуту фільтруємо масив елементів
  // та зберігаємо результат у стані
  React.useEffect(() => {
    setItems(filterItems(inputValue));
  }, [inputValue]);

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
