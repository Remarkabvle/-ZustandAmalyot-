// CreateUser.js
import React, { useState } from 'react';
import useStore from '../../store/useStore';
import './CreateUser.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');

  const addUser = useStore((state) => state.addUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, profession, age, gender });
    setName('');
    setProfession('');
    setAge('');
    setGender('male');
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profession" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateUser;
