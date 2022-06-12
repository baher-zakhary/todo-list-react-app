import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input) {
      setItems([{text: input, isMarked: false}, ...items])
      setInput('')
    }
  }

  const markItem = (index) => {
    items[index].isMarked = !items[index].isMarked;
    setItems([...items])
  }

  const onPressEnterOnInputField = (e) => {
    if (e.code === 'Enter') {
      addItem();
    }
  }

  return (
    <div className="App">
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => onPressEnterOnInputField(e)}/>
      <button onClick={addItem} disabled={!input}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.text+index} style={{'textDecoration': item.isMarked ? 'line-through' : 'none'}} onClick={() => markItem(index)}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
