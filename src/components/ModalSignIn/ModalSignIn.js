import React, {useCallback, useContext, useState} from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import {postData} from '../../utils/fetchData'
import Cookie from 'js-cookie'
import {validLogin} from "../../utils/valid";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignIn = (props) => {
  const [showPass, setShowPass] = useState(true);
  const [errMess, setErrMess] = useState();
  const gContext = useContext(GlobalContext);

  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)


  const handleClose = () => {
    gContext.toggleSignInModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  // const router = useRouter()
  const handleChangeInput = useCallback(e => {
    const {name, value} = e.target
    setErrMess(null)
    setUserData({...userData, [name]:value})
  },[userData,errMess])

  const handleSubmit = useCallback(async e => {
    e.preventDefault()
    const { email, password } = userData
    const errMsg = validLogin(email, password)
    if(errMsg){
      setErrMess(errMsg)
      return
    }
    const res = await postData('auth/login', userData)
    if (res.err) {
      setErrMess(res.err)
      return
    }
    gContext.setAccount(res.user);
    gContext.toggleSignInModal();

    Cookie.set('refresh_token', res.refresh_token, {
      path: '/',
      expires: 7
    })
    Cookie.set('access_token', res.access_token, {
      path: '/',
      expires: 7
    })
  },[userData,errMess])
  // useEffect(() => {
  //   if(Object.keys(auth).length !== 0) router.push("/")
  // }, [auth])


  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.signInModalVisible}
      onHide={gContext.toggleSignInModal}
    >
      <Modal.Body className="p-0">
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6">
              <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                <div className="pb-9">
                  <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                    Welcome Back
                  </h3>
                  <p className="mb-0 font-size-4 text-white">
                    Log in to continue your account and explore. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <div className="row">
                {errMess && <span className="font-size-3 line-height-reset" style={{color: "red;", margin: "0 auto;"}}>{errMess}</span>}
                </div>
                <form>
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      E-mail
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@gmail.com"
                      id="email"
                      name="email"
                      value={userData.email} onChange={handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                    >
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPass ? "password" : "text"}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        name="password" value={userData.password} onChange={handleChangeInput}
                      />
                      <a
                        href="/#"
                        className="show-password pos-abs-cr fas mr-6 text-black-2"
                        onClick={(e) => {
                          e.preventDefault();
                          togglePassword();
                        }}
                      >
                        <span className="d-none">none</span>
                      </a>
                    </div>
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-between">
                    <label
                      htmlFor="terms-check"
                      className="gr-check-input d-flex  mr-3"
                    >
                      <input
                        className="d-none"
                        type="checkbox"
                        id="terms-check"
                      />
                      <span className="checkbox mr-5"></span>
                      <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">
                        Remember password
                      </span>
                    </label>
                    <a
                      href="/#"
                      className="font-size-3 text-dodger line-height-reset"
                    >
                      Forget Password
                    </a>
                  </div>
                  <div className="form-group mb-8">
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase" onClick={handleSubmit}>
                      Log in{" "}
                    </button>
                  </div>
                  <p className="font-size-4 text-center heading-default-color">
                    Don’t have an account?{" "}
                    <a href="/#" className="text-primary">
                      Create a free account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalSignIn;
