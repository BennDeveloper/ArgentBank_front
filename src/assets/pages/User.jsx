import React, { useEffect } from 'react'
import BankAccount from '../components/BankAccount'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserData, onIsEditing } from '../../redux/userSlice';

function User() {

  const { firstName, lastName, userName, loading, error, isEditing } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {  //si un token est présent
      navigate('/signin');  
    } else {
      dispatch(getUserData(token))
    }
  }, [token, navigate]);

  return (
    <main className="main bg-dark">
    {
    !isEditing ? <div className="header">
      <h1>Welcome back<br />{firstName} {lastName}!</h1>
      <button className="edit-button" onClick={() => dispatch(onIsEditing())}>Edit Name</button>
    </div> 
    :
    <form>
       <input type="text" value={userName} />
      <input type="text" disabled value={firstName} />
      <input type="text" disabled value={lastName} />
      <button className="edit-button" onClick={() => dispatch(onIsEditing())}>Cancel</button>
    </form>
    }
    <h2 className="sr-only">Accounts</h2>
   
    <BankAccount title="Argent Bank Checking (x8349)" amount="$2,082.79" info="Available Balance" />
    <BankAccount title="Argent Bank Savings (x6712)" amount="$10,928.42" info="Available Balance" />
    <BankAccount title="Argent Bank Credit Card (x8349)" amount="$184.30" info="Current Balance" />
    
  </main>
  )
}

export default User