import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import {DataContext} from '../../store/GlobalState'
import GlobalContext from "../../context/GlobalContext";
import {postData} from '../../utils/fetchData'
import Cookie from 'js-cookie'

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignIn = (props) => {
  const [showPass, setShowPass] = useState(true);
  const gContext = useContext(GlobalContext);

  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const handleClose = () => {
    gContext.toggleSignInModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  // const {state, dispatch} = useContext(DataContext)
  // const { auth } = state

  // const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    // dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData)
    console.log(res)
    // if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    // dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    gContext.setHeader({...gContext.header, ...{ button :"profile"}})
    gContext.toggleSignInModal();
    // dispatch({ type: 'AUTH', payload: {
    //   token: res.access_token,
    //   user: res.user
    // }
  // })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })
    Cookie.set('access_token', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    // localStorage.setItem('firstLogin', true)
  }
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
                <div className="border-top border-default-color-2 mt-auto">
                  <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">10</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New products today
                      </p>
                    </div>
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">14</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        New genre posted today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                <div className="row">
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Log in with LinkedIn
                      </span>
                    </a>
                  </div>
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Log in with Google
                      </span>
                    </a>
                  </div>
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Log in with Facebook
                      </span>
                    </a>
                  </div>
                </div>
                <div className="or-devider">
                  <span className="font-size-3 line-height-reset ">Or</span>
                </div>
                <form onSubmit={handleSubmit}>
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
                      name="email" value={email} onChange={handleChangeInput}
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
                        name="password" value={password} onChange={handleChangeInput} 
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
                    <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">
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
