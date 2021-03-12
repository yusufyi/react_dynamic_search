import React, { useState, useEffect } from 'react';
import Card from './Cards';
import './App.css'

const url = 'https://jsonplaceholder.typicode.com/users';
function App() {
  const [users, SetUsers] = useState([]);
  const [search, SetSearch] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch(url);
      const user = await response.json();
      SetUsers(user);
      SetSearch(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const searchUser = (e) => {
    console.log(e);
    e.preventDefault();
    SetSearch(
      users.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  if (users.length === 0) {
    return <div>Loading....</div>;
  }

  return (
    <div className="App">
      <input className="search-box " type="search" onChange={searchUser}></input>

      <Card users={search}></Card>
    </div>
  );
}

export default App;
