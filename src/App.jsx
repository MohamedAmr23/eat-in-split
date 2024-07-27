
import React, { Fragment, useState } from 'react';
import logo from './assets/logo.jpeg';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelect = (user) => {
    setSelectedUser((prevUser) => (prevUser === user ? null : user));
  };

  return (
    <Fragment>
      <div className="container">
        <div className="left-side">
          <ul>
            <li>
              <img src={logo} alt=""/>
              <div className="text">
                <h3>Mohamed</h3>
                <p style={{color:"#e03131"}}>You owe Clark 7£</p>
              </div>
              <button className='btn' onClick={() => handleSelect('Mohamed')}>
                {selectedUser === 'Mohamed' ? 'Close' : 'Select'}
              </button>
            </li>
            <li>
              <img src={logo} alt=""/>
              <div className="text">
                <h3>Ahmed</h3>
                <p style={{color:"green"}}>You owe Clark 7£</p>
              </div>
              <button className='btn' onClick={() => handleSelect('Ahmed')}>
                {selectedUser === 'Ahmed' ? 'Close' : 'Select'}
              </button>
            </li>
            <li>
              <img src={logo} alt=""/>
              <div className="text">
                <h3>Mahmoud</h3>
                <p>You owe Clark 7£</p>
              </div>
              <button className='btn' onClick={() => handleSelect('Mahmoud')}>
                {selectedUser === 'Mahmoud' ? 'Close' : 'Select'}
              </button>
            </li>
          </ul>
          <button className="add">Add Friends</button>
        </div>
        {selectedUser && <Card user={selectedUser}  />}
      </div>
    </Fragment>
  );
}

export default App;

