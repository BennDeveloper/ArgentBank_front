import React from 'react'
import BankAccount from '../components/BankAccount'

function User() {
  return (
    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <h2 className="sr-only">Accounts</h2>
   
    <BankAccount title="Argent Bank Checking (x8349)" amount="$2,082.79" info="Available Balance" />
    <BankAccount title="Argent Bank Savings (x6712)" amount="$10,928.42" info="Available Balance" />
    <BankAccount title="Argent Bank Credit Card (x8349)" amount="$184.30" info="Current Balance" />
    
  </main>
  )
}

export default User