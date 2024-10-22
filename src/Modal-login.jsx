import React, { useRef } from 'react';
import './App.css';

function ModalLogin() {
  const loginDialogRef = useRef(null);
  const registerDialogRef = useRef(null);

  const openLoginModal = () => loginDialogRef.current.showModal();
  const closeLoginModal = () => loginDialogRef.current.close();
  
  const openRegisterModal = () => registerDialogRef.current.showModal();
  const closeRegisterModal = () => registerDialogRef.current.close();

  return (
    <div className="App">
      <h2>Modal login Form</h2>
      <button onClick={openLoginModal}>Open Login Modal</button>

      <h2>Modal Registration Form</h2>
      <button onClick={openRegisterModal}>Open Register Modal</button>

      {/* Login Dialog */}
      <dialog ref={loginDialogRef} className="dialog">
        <div className="modal-content">
          <span className="close" onClick={closeLoginModal}>&times;</span>
          <h3>LOGIN TO MY ACCOUNT</h3>
          <form>
            <label>Email address</label>
            <input type="email" placeholder="Email" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe"> Remember Me On This Computer</label>
            </div>
            <button type="submit">LOGIN</button>
          </form>
          <a href="#forgot">Forgot Your Password?</a>
          <a href="#register">Create A New Account</a>
        </div>
      </dialog>

      {/* Registration Dialog */}
      <dialog ref={registerDialogRef} className="dialog">
        <div className="modal-content">
          <span className="close" onClick={closeRegisterModal}>&times;</span>
          <h3>CREATE A NEW ACCOUNT</h3>
          <form>
            <label>Username</label>
            <input type="text" placeholder="Username" required />
            <label>Email address</label>
            <input type="email" placeholder="Email" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <button type="submit">REGISTER</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default ModalLogin;
