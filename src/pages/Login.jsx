import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import '../styles/login.css';

function Login() {
  const { login, setLogin } = useContext(UserContext);
  const { email, password } = login;
  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };
  return (
    <div className="login_container">
      <form>
        <div className="children_container">
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Password:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ handleChange }
            />
          </label>
          <button type="button" data-testid="login-submit-btn">To enter</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
