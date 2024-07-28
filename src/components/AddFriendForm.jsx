import './AddFriendForm.css'
import React, { useState } from 'react';

const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFriend(name, imageUrl);
    setName('');
    setImageUrl('https://i.pravatar.cc/48');
  };

  return (
    <div className="add-friend-form">
      <h3>Add Friend</h3>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label className='test'>Friend Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input">
          <label>🌆 Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
      <button onClick={() => onAddFriend(null, null)}>Close</button>
    </div>
  );
};

export default AddFriendForm;
