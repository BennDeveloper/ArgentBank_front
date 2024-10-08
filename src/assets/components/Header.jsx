import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';  // Importer useDispatch pour dispatcher des actions et useSelector pour accéder à l'état global
import { logout } from '../../redux/authSlice';
import '/src/App.css';

function Header() {
  const dispatch = useDispatch(); // Initialiser dispatch pour envoyer des actions vers le store
  const navigate = useNavigate(); // Initialiser navigate pour rediriger vers d'autres pages
  
  // Récupérer l'état utilisateur depuis le store Redux
  const token = useSelector((state) => state.auth.token);
  const { userName } = useSelector((state) => state.user);

// Fonction de gestion de la déconnexion
  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/signin');
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="src/assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="link-in-out">
  {token ? (   // Si l'utilisateur est connecté, afficher le bouton Sign Out
    <div className="main-nav-item">
      <i className="fa fa-user-circle"></i>
      <span className="userName">{userName}</span> 
      <Link to="/signin" onClick={handleLogout} className="SignOut"> 
        <span>Sign Out</span>
      </Link>
    </div>
  ) : (  // Si l'utilisateur n'est pas connecté, afficher le bouton Sign In
    <Link className="main-nav-item" to="/signin">
      <i className="fa fa-user-circle"></i> Sign In
    </Link>
  )}
</div>
    </nav>
  );
}

export default Header;
