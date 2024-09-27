import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // useDispatch pour envoyer des actions à Redux et useSelector pour accéder à l'état dans Redux
import { singinUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';// Importation de useNavigate pour la navigation entre les pages
import '/src/index.css';




export const SingIn = () => {
  const [email, setEmail] = useState(''); // Déclaration d'un état local pour stocker l'email et  le mot de passe
  const [password, setPassword] = useState(''); 
  
  
  const dispatch = useDispatch(); // Initialisation de useDispatch pour envoyer des actions à Redux
  const navigate = useNavigate(); // Initialisation de useNavigate pour gérer la redirection après connexion réussie

  
  const { loading, error, token } = useSelector((state) => state.auth);// Récupération de l'état user à partir du store Redux pour accéder à loading, error et user

  const handleSingInEvent = (e) => {
    e.preventDefault();                          
    const userCredentials = { email, password };   
    console.log('Sending user credentials:', userCredentials); 
    dispatch(singinUser(userCredentials)); // Envoi de l'action singinUser avec les informations d'identification de l'utilisateur à Redux
  };


  //useEffect pour surveiller l'état user et rediriger l'utilisateur après connexion réussie
  useEffect(() => {
    console.log('Current token:', token);
    if (token) {  //si un token est présent
      console.log('Navigating to user page');
      navigate('/user');  
    }
  }, [token, navigate]); 


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSingInEvent}>{/* Appel de la fonction handleSingInEvent pour gérer l'événement de soumission du formulaire */}
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état email lorsqu'une nouvelle valeur est saisie
              autoComplete="email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete="current-password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {loading ? ( 
            <button type="submit" className="sign-in-button" disabled>Loading...</button>   // Si l'état loading est vrai, afficher un bouton désactivé indiquant "Loading..."
          ) : (
            <button type="submit" className="sign-in-button">Sign In</button> // Sinon, afficher le bouton de soumission normal
          )}
          {error && <p className="error">{error}</p>} {/* Affichage du message d'erreur si error est défini */}  
        </form>
      </section>
    </main>
  );
};

export default SingIn;