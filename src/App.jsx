
// import React, { Fragment, useState } from 'react';
// import logo from './assets/logo.jpeg';
// import './App.css';
// import Card from './components/Card';

// const App = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [friends, setFriends] = useState([
//     { name: 'Clark', owes: 'Clark owes you 18£', color: 'green' },
//     { name: 'Sarah', owes: 'Sarah owes you 20£', color: 'green' },
//     { name: 'Anthony', owes: 'You and Anthony are even', color: 'black' }
//   ]);
//   const [newFriend, setNewFriend] = useState({ name: '', imageUrl: 'https://i.pravatar.cc/48' });

//   const handleSelect = (user) => {
//     setSelectedUser((prevUser) => (prevUser === user ? null : user));
//   };

//   const handleAddFriend = () => {
//     if (newFriend.name.trim() === '') {
//       alert("Friend name is required!");
//       return;
//     }
//     setFriends([...friends, { name: newFriend.name, owes: `${newFriend.name} owes you 0£`, color: 'black' }]);
//     setShowAddForm(false);
//     setNewFriend({ name: '', imageUrl: 'https://i.pravatar.cc/48' });
//   };

//   const handleSplitBill = (billValue, yourExpenses) => {
//     const updatedFriends = friends.map(friend => {
//       if (friend.name === selectedUser) {
//         const clarkExpense = billValue - yourExpenses;
//         return { ...friend, owes: `${friend.name} owes you ${clarkExpense}£`, color: clarkExpense >= 0 ? 'green' : 'red' };
//       }
//       return friend;
//     });
//     setFriends(updatedFriends);
//     setSelectedUser(null); // Hide the split bill box after splitting
//   };

//   return (
//     <Fragment>
//       <div className="container">
//         <div className="left-side">
//           <ul>
//             {friends.map((friend, index) => (
//               <li key={index}>
//                 <img src={logo} alt="" />
//                 <div className="text">
//                   <h3>{friend.name}</h3>
//                   <p style={{ color: friend.color }}>{friend.owes}</p>
//                 </div>
//                 <button className='btn' onClick={() => handleSelect(friend.name)}>
//                   {selectedUser === friend.name ? 'Close' : 'Select'}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           {!showAddForm && <button className="add" onClick={() => setShowAddForm(true)}>Add Friend</button>}
//           {showAddForm && (
//             <div className="add-friend-form">
//               <h3>Add Friend</h3>
//               <div className="input">
//                 <label>Friend Name</label>
//                 <input type="text" value={newFriend.name} onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })} />
//               </div>
//               <div className="input">
//                 <label>Image URL</label>
//                 <input type="text" value={newFriend.imageUrl} onChange={(e) => setNewFriend({ ...newFriend, imageUrl: e.target.value })} />
//               </div>
//               <div className="form-buttons">
//                 <button className="add" onClick={handleAddFriend}>Add</button>
//                 <button className="close" onClick={() => setShowAddForm(false)}>Close</button>
//               </div>
//             </div>
//           )}
//         </div>
//         {selectedUser && <Card user={selectedUser} handleSplitBill={handleSplitBill} />}
//       </div>
//     </Fragment>
//   );
// }

// export default App;
import React, { Fragment, useState } from 'react';
import logo from './assets/logo.jpeg';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [friends, setFriends] = useState([
    { name: 'Clark', owes: 'Clark owes you 18£', amountOwed: 18, color: 'green' },
    { name: 'Sarah', owes: 'Sarah owes you 20£', amountOwed: 20, color: 'green' },
    { name: 'Anthony', owes: 'You and Anthony are even', amountOwed: 0, color: 'black' }
  ]);
  const [newFriend, setNewFriend] = useState({ name: '', imageUrl: 'https://i.pravatar.cc/48' });

  const handleSelect = (user) => {
    setSelectedUser((prevUser) => (prevUser === user ? null : user));
  };

  const handleAddFriend = () => {
    if (newFriend.name.trim() === '') {
      alert("Friend name is required!");
      return;
    }
    setFriends([...friends, { name: newFriend.name, owes: `${newFriend.name} owes you 0£`, amountOwed: 0, color: 'black' }]);
    setShowAddForm(false);
    setNewFriend({ name: '', imageUrl: 'https://i.pravatar.cc/48' });
  };

  const handleSplitBill = (billValue, yourExpenses) => {
    const updatedFriends = friends.map(friend => {
      if (friend.name === selectedUser) {
        const clarkExpense = billValue - yourExpenses;
        const newAmountOwed = friend.amountOwed + clarkExpense;
        return { ...friend, owes: `${friend.name} owes you ${newAmountOwed}£`, amountOwed: newAmountOwed, color: newAmountOwed >= 0 ? 'green' : 'red' };
      }
      return friend;
    });
    setFriends(updatedFriends);
    setSelectedUser(null); // Hide the split bill box after splitting
  };

  return (
    <Fragment>
      <div className="container">
        <div className="left-side">
          <ul>
            {friends.map((friend, index) => (
              <li key={index}>
                <img src={logo} alt="" />
                <div className="text">
                  <h3>{friend.name}</h3>
                  <p style={{ color: friend.color }}>{friend.owes}</p>
                </div>
                <button className='btn' onClick={() => handleSelect(friend.name)}>
                  {selectedUser === friend.name ? 'Close' : 'Select'}
                </button>
              </li>
            ))}
          </ul>
          {!showAddForm && <button className="add" onClick={() => setShowAddForm(true)}>Add Friend</button>}
          {showAddForm && (
            <div className="add-friend-form">
              <h3>Add Friend</h3>
              <div className="input">
                <label>Friend Name</label>
                <input type="text" value={newFriend.name} onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })} />
              </div>
              <div className="input">
                <label>Image URL</label>
                <input type="text" value={newFriend.imageUrl} onChange={(e) => setNewFriend({ ...newFriend, imageUrl: e.target.value })} />
              </div>
              <div className="form-buttons">
                <button className="add" onClick={handleAddFriend}>Add</button>
                <button className="close" onClick={() => setShowAddForm(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        {selectedUser && <Card user={selectedUser} handleSplitBill={handleSplitBill} />}
      </div>
    </Fragment>
  );
}

export default App;
