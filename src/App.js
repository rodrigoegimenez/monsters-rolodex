import React, { useState, useEffect } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    };
    fetchMonsters();
  });

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleSearchChange = (e) => setSearchField(e.target.value);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monster"
        handleChange={handleSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
