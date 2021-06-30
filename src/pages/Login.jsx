import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../contexts/UserContext';
import '../styles/login.css';

const validateEmail = (email, password) => {
  const six = 6;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
  if (regexEmail.test(String(email).toLowerCase()) && password.length > six) {
    return false;
  } return true;
};

const iconTag = (fn, className) => (
  <i
    onClick={ fn }
    className={ `${className} lnr-eye` }
    aria-hidden="true"
  />
);

const imgEye = 'fas fa-eye-slash';

function Login() {
  const { login, setLogin } = useContext(UserContext);
  const history = useHistory();
  const { email, password } = login;
  const [showPassword, setPassword] = useState('password');
  const [showOpenEye, setOpenEye] = useState(imgEye);
  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = (userEmail) => {
    const tokens = {
      email: userEmail,
    };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(tokens));
    history.push('/comidas');
  };

  const showPasswordCLick = () => {
    if (showPassword === 'password' && showOpenEye === imgEye) {
      setPassword('text');
      setOpenEye('fas fa-eye');
    } else {
      setPassword('password');
      setOpenEye(imgEye);
    }
  };

  return (
    <div className="login_container">
      <form>
        <div className="children_container">
          <label htmlFor="email-input">
            <input
              className="input-email"
              type="email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ handleChange }
              placeholder="Email"
            />
          </label>
          <label className="FatherEye" htmlFor="password-input">
            <input
              className="inputEye"
              type={ showPassword }
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ handleChange }
              placeholder="Password"
            />
            {
              password.length > 0
                ? iconTag(showPasswordCLick, showOpenEye)
                : null
            }
          </label>
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ validateEmail(email, password) }
            onClick={ () => handleClick(email) }
          >
            To enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
