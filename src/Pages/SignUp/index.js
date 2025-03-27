import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import images from '../../assets/images.js';

const SignUp = () =>{

  const context = useContext(MyContext);

  useEffect(()=>{
      context.setisHeaderFooterShow(false);
  },[]);

  return(
      <section className="section signInPage signUpPage">
        <div className="shape-bottom">
        <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"> 
          <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> 
        </svg>
        </div>
        <div className="container">
          <div className="box card p-3 shadow border-0">
            <div className="text-center">
              <img src={images.logo}/>
            </div>
            
            <form className="mt-2">
              <h2 className="mb-3">Sign Up</h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField label="Name" type="text" variant="standard" className="w-100"/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField label="Phone No" type="text" variant="standard" className="w-100"/>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <TextField id="standard-basic" label="Email" type="email" variant="standard" className="w-100"/>
              </div>
              <div className="form-group">
                <TextField id="standard-basic" label="Password" type="password" variant="standard" className="w-100"/>
              </div>

              <a className="border-effect cursor txt">Forgot Password?</a>

              <div className="d-flex align-items-center mt-3 mb-3 d-flex">
                <Button className="btn-blue col btn-lg btn-big bg-blue">Sign Up</Button>
                <Link to="/" className="d-block col"><Button className="cancel-btn btn-lg btn-big col" variant="outlined" onClick={()=> {setTimeout(()=> {context.setisHeaderFooterShow(true);}, 0);}}>Cancel</Button></Link>
              </div>

              <p className="txt">Already Registered? <Link to="/signIn" className="border-effect">&nbsp;Sign In</Link></p>

              <h6 className="mt-4 text-center font-weight-bold">Or continue with social account</h6>

              <Button className="loginWithGoogle mt-2 w-100" variant="outlined"><img src={images.Google_Icons}/>Sign In with Google</Button>
            </form>

          </div>
        </div>
      </section>
  )
}

export default SignUp;