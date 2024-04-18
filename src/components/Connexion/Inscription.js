import React, { useState, useEffect } from 'react';


const Inscription = () => {
  const [mode, setMode] = useState('sign-in');

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    const handleSignUpClick = () => {
      setMode('sign-up');
      container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      setMode('sign-in');
      container.classList.remove("sign-up-mode");
    };

    sign_up_btn.addEventListener("click", handleSignUpClick);
    sign_in_btn.addEventListener("click", handleSignInClick);

    return () => {
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Votre logique de gestion du formulaire ici
  };

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className={`sign-${mode}-form`} onSubmit={handleSubmit}>
              <h2 className="title">{mode === 'sign-in' ? 'Sign in' : 'Sign up'}</h2>
              {mode === 'sign-up' && (
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
              )}
              {mode === 'sign-up' && (
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
              )}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value={mode === 'sign-in' ? 'Login' : 'Sign up'} className="btn solid" />
              <p className="social-text">Or {mode === 'sign-in' ? 'Sign in' : 'Sign up'} with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <button className="btn transparent" id="sign-up-btn">Sign up</button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
              <button className="btn transparent" id="sign-in-btn">Sign in</button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
