import { React, useState , useEffect  } from "react";
import PhoneInput from "react-phone-number-input";
import Link from 'next/link'
import {Router , useRouter  } from 'next/router'

import { registerUserRequest } from "../services/auth";
import { useRecoilState } from "recoil";
import { userAuth } from "../services/Atom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { fetchAllThemesRequest } from "../services/theme";


export default function Form() {
  const [value, setValue] = useState(null);
  const [translateHeight, setTranslateHeight] = useState(0);
  const [auth, setAuth] = useRecoilState(userAuth)

  const [themeDataArray, setThemArrayeDataArray] = useState()

  // signup
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  // const [subdomain, setSubdomain] = useState("");
const [theme, setTheme] = useState('')
const [themeExists, setThemeExists] = useState(false)





// const router = useRouter();


  console.log("check "+  JSON.stringify(themeDataArray) )

  const translate = (e, height) => {
    e.preventDefault();
    setTranslateHeight(height);
  };

  // fetch all themes
  useEffect(() => {
    getThemeDataforform()
}, [])
const getThemeDataforform = async () => {
    const res = await fetchAllThemesRequest()

    // console.log(res?.api_data);

    console.log( res?.api_data?.result    )

    if(!res.api_error){
        setThemArrayeDataArray(res?.api_data?.result)
        // setHomePageData(res?.api_data?.data[0])
        // setHomePageId(res?.api_data?.data[0]._id)
    }
}


//   
const  themeData = [
    {
        id: 1,
        name: "Theme 1",
        image: "https://via.placeholder.com/150",
        link: "/theme1",

    },
    {
        id: 2,
        name: "Theme 2",
        image: "https://via.placeholder.com/150",
        link: "/theme2",
    },
    {
        id: 3,
        name: "Theme 3",
        image: "https://via.placeholder.com/150",
        link: "/theme3",
    },
   
      
]

// get selected theme id 
const themeHandler = ( id) => {
    
    alert('Theme Selected ' + id )  
    setTheme(id)
    
}

  //  post data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      theme: theme,
      mobile:value
    };
    const res = await registerUserRequest(payload);
    if(!res.api_error){
      // console.log({res});
      alert(res?.api_data?.message)
      setAuth({ token: res.api_data.token })
      // temporary redirect to login page
      // write alert to redirect to login page
      

      // window.confirm('Are you sure you wish to delete this item?') ? onConfirm(  Router.push(`https://dashboard.eduonboard.xyz/auth/login`)) : onCancel(Router.push('/'))

      

      // Router.push(`https://dashboard.eduonboard.xyz/auth/login`)

      // add edu student login page url 
      // Router.push(`http://localhost:3000/auth/login`)   


      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure want to login.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>   window.location.href = `https://dashboard.eduonboard.xyz/auth/login?mail=${email}`
            // onClick: () =>   window.location.href = `http://localhost:3001/auth/login?mail=${email}`
          },
          {
            label: 'No',
            onClick: () =>   ''
          }
        ]
      });
    


    }else{
      console.log({res});
      alert("Error:",res?.api_data)
    }
   

  };

// shallow routing
const router = useRouter()

useEffect(() => {
  // Always do navigations after the first render
  router.push('/form-legacy', undefined, { shallow: true })
  // console.log(router.query.asPath);
}, [])

useEffect(() => {
  // The counter changed!

  console.log(router.asPath);
  if(router.asPath === '/form-legacy?part=1'){
    
  }

}, [router.asPath])

// enter key 
const handleKeyDown = (e, height) => {
  if(e.key === 'Enter'){
    translate(e, height)
       console.log('enter press here! ')
  

     


    }
}


  return (


 

    <div className="lp-form-wrapper">
      <form
        action=""
        className="lp-form"
        style={{ transform: `translateY(${translateHeight}vh)` }}
        onSubmit={(e)=>handleFormSubmit(e)}

      >
        <div className="lp-form-inner-container">
          <div className="form-item-container">
            <label htmlFor="name">
              <span>
                1{" "}
                <svg
                  className="arrow"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58597 4.99997L4.29297 1.70697L5.70697 0.292969L10.414 4.99997L5.70697 9.70697L4.29297 8.29297L7.58597 4.99997Z"
                    fill="#F2962C"
                  />
                  <path d="M8 4V6H0V4H8Z" fill="#F2962C" />
                </svg>
              </span>
              Your Full name ?
              <svg
                className="required-star"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.992 6.752L3.152 4.64L0.344 3.656L0.92 2.384L3.464 3.656L3.248 0.584H4.688L4.472 3.656L7.016 2.36L7.592 3.656L4.808 4.616L6.968 6.752L5.888 7.688L3.992 5.192L2.072 7.688L0.992 6.752Z"
                  fill="black"
                />
              </svg>
            </label>
           <div className="CustomInputContainer">
           <input type="text" id="name" className='CustomInput'
                onChange={(e) => setFirstName(e.target.value)}
                required placeholder="First Name"
             />
            <input type="text"className='CustomInput pl-2' id="name"
                onChange={(e) => setLastName(e.target.value)}
                required placeholder="last Name"
             />
           </div>
            {/* <label htmlFor="name">
             
              Your Last name?
              <svg
                className="required-star"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.992 6.752L3.152 4.64L0.344 3.656L0.92 2.384L3.464 3.656L3.248 0.584H4.688L4.472 3.656L7.016 2.36L7.592 3.656L4.808 4.616L6.968 6.752L5.888 7.688L3.992 5.192L2.072 7.688L0.992 6.752Z"
                  fill="black"
                />
              </svg>
            </label>
            <input type="text" id="name"
                onChange={(e) => setLastName(e.target.value)}
                required
             /> */}
            <div className="lp-form-btn-wrapper">
              <button
                  // onKeyPress={ (e) => { e.key === 'Enter' ? translate(e, -100) : null  } }
                  onKeyPress={ () =>  handleKeyDown(-100) }


                onClick={(e) => {
                  firstName&&lastName!==null?
                  translate(e, -100):""
                  
                }}

              >
                OK
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.293 0.292969L15.707 1.70697L4.99997 12.414L0.292969 7.70697L1.70697 6.29297L4.99997 9.58597L14.293 0.292969Z"
                    fill="#ADFF90"
                  />
                </svg>
              </button>

              <span>press Enter</span>
            </div>
          </div>
        </div>
        <div className="lp-form-inner-container">
          <div className="form-item-container">
            <label htmlFor="name">
              <span>
                2{" "}
                <svg
                  className="arrow"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58597 4.99997L4.29297 1.70697L5.70697 0.292969L10.414 4.99997L5.70697 9.70697L4.29297 8.29297L7.58597 4.99997Z"
                    fill="#F2962C"
                  />
                  <path d="M8 4V6H0V4H8Z" fill="#F2962C" />
                </svg>
              </span>
              What email address can we reach you at ?
              <svg
                className="required-star"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.992 6.752L3.152 4.64L0.344 3.656L0.92 2.384L3.464 3.656L3.248 0.584H4.688L4.472 3.656L7.016 2.36L7.592 3.656L4.808 4.616L6.968 6.752L5.888 7.688L3.992 5.192L2.072 7.688L0.992 6.752Z"
                  fill="black"
                />
              </svg>
            </label>
            <input type="text" id="name" 
                  onKeyPress={ (e) =>  handleKeyDown(e, -200) }

            onChange={(e) => setEmail(e.target.value)}
                required placeholder="name@example.com"
             />
            <div className="lp-form-btn-wrapper">
              <button
                  // onKeyPress={ () =>  handleKeyDown(-200) }

                onClick={(e) => {
                  email!==""?                  
                 translate(e, -200)
                
                  :""
                  // router.push('/form?part=2', undefined , { shallow: true })

                }}
              >
                OK
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.293 0.292969L15.707 1.70697L4.99997 12.414L0.292969 7.70697L1.70697 6.29297L4.99997 9.58597L14.293 0.292969Z"
                    fill="#ADFF90"
                  />
                </svg>
              </button>
              <span>press Enter</span>
            </div>
          </div>
        </div>

        <div className="lp-form-inner-container">
          <div className="form-item-container">
            <label htmlFor="name">
              <span>
                3{" "}
                <svg
                  className="arrow"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58597 4.99997L4.29297 1.70697L5.70697 0.292969L10.414 4.99997L5.70697 9.70697L4.29297 8.29297L7.58597 4.99997Z"
                    fill="#F2962C"
                  />
                  <path d="M8 4V6H0V4H8Z" fill="#F2962C" />
                </svg>
              </span>
              What phone number can we reach you at ?
              
              <svg
                className="required-star"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.992 6.752L3.152 4.64L0.344 3.656L0.92 2.384L3.464 3.656L3.248 0.584H4.688L4.472 3.656L7.016 2.36L7.592 3.656L4.808 4.616L6.968 6.752L5.888 7.688L3.992 5.192L2.072 7.688L0.992 6.752Z"
                  fill="black"
                />
              </svg>
              
            </label>
            {/* <input type="text" id="name"/> */}
            <PhoneInput placeholder=" Type your phone number"
                  onKeyPress={ (e) =>  handleKeyDown(e, -300) }

            
             value={value}  onChange={setValue} required
            
             />
            <div className="lp-form-btn-wrapper">
              <button
              onClick={(e) => {
                value!==null?
                  translate(e, -300):""
                }}
              >

                OK
                
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.293 0.292969L15.707 1.70697L4.99997 12.414L0.292969 7.70697L1.70697 6.29297L4.99997 9.58597L14.293 0.292969Z"
                    fill="#ADFF90"
                  />
                </svg>
                
              </button>
              <span>press Enter</span>
            </div>
          </div>
        </div>
        
        <div className="lp-form-inner-container">
          <div className="theme-inner-container">
            <div className="theme-inner-heading">
            <span>
                4{" "}
                <svg
                  className="arrow"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58597 4.99997L4.29297 1.70697L5.70697 0.292969L10.414 4.99997L5.70697 9.70697L4.29297 8.29297L7.58597 4.99997Z"
                    fill="#F2962C"
                  />
                  <path d="M8 4V6H0V4H8Z" fill="#F2962C" />
                </svg>
              </span>
            
            Choose one theme</div>
            <div className="theme-inner-content">

           {
            themeDataArray && themeDataArray.map((item, index) => {
              return (
                <div className="theme-inner-card"  key={index}   >
                <a href="/theme/one" target="_blank" rel="noopener noreferrer">

                <div className="theme-inner-item-img">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="img"
                  />
                </div>
                </a>

                <div className="theme-inner-item-text">
                  <div className="theme-inner-item-text-heading">
                    <span> static name</span> 
                  </div>
                  <span onClick={() => themeHandler(item._id) } className="button"  >Select theme</span>
                   {/* { themeExists ? 'selected' : 
                  <span onClick={() => themeHandler(item.name) } className="button"  >Select theme</span>

                    } */}
                </div>

              </div>
              );
            })
           }
           
          
            
            </div>
            <div className="theme-selected-wrapper">
           
           { theme.length > 0 && 
      <span className="theme-inner-item-text-heading" > 
      <svg
             className="arrow"
             width="11"
             height="10"
             viewBox="0 0 11 10"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M7.58597 4.99997L4.29297 1.70697L5.70697 0.292969L10.414 4.99997L5.70697 9.70697L4.29297 8.29297L7.58597 4.99997Z"
               fill="#F2962C"
             />
             <path d="M8 4V6H0V4H8Z" fill="#F2962C" />
           </svg>  
        {` Selected ${theme}`}</span>
             }
      </div>
            <div className="lp-form-btn-wrapper">
              
                
                <button
                onClick={(e) => {
                  translate(e, -400);
                }}
              >
                OK
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.293 0.292969L15.707 1.70697L4.99997 12.414L0.292969 7.70697L1.70697 6.29297L4.99997 9.58597L14.293 0.292969Z"
                    fill="#ADFF90"
                  />
                </svg>
              </button>
              
              
              <span>press Enter</span>
            </div>
            
            
          </div>
          
        </div>
        <div className="lp-form-inner-container">
          <div className="form-item-container">
            <label htmlFor="name">
              <span>
                5{" "}
                <svg
                  className="arrow"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.58597 4.99997L4.29297 1.70697L5.70697 0.292969L10.414 4.99997L5.70697 9.70697L4.29297 8.29297L7.58597 4.99997Z"
                    fill="#F2962C"
                  />
                  <path d="M8 4V6H0V4H8Z" fill="#F2962C" />
                </svg>
              </span>
              Enter your password
              <svg
                className="required-star"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.992 6.752L3.152 4.64L0.344 3.656L0.92 2.384L3.464 3.656L3.248 0.584H4.688L4.472 3.656L7.016 2.36L7.592 3.656L4.808 4.616L6.968 6.752L5.888 7.688L3.992 5.192L2.072 7.688L0.992 6.752Z"
                  fill="black"
                />
              </svg>
            </label>
            <input type="password" id="name"
                  onKeyPress={ (e) =>  handleKeyDown(e, -400) }
                placeholder=" Type your password "
             onChange={(e) => setPassword(e.target.value)}
                required
             />
             {/* submit form */}
            
            <button type="submit" className="submitbutton">
            Submit form
          </button>
            
          </div>
     
           
        </div>
        
      </form>
      <div className="toggle-btn">
        <div
          className="up-arrow"
          onClick={() => {
            translateHeight < 0
              ? setTranslateHeight(translateHeight + 100)
              : "";
          }}
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.996 8.121L13.41 6.707L6.705 0L0 6.707L1.414 8.121L6.705 2.828L11.996 8.121Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          onClick={() => {
            translateHeight > -400
              ? setTranslateHeight(translateHeight - 100)
              : "";
          }}
        >
          <svg
            className="down-arrow"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.293 0.292969L13.707 1.70697L7.00003 8.41397L0.29303 1.70697L1.70703 0.292969L7.00003 5.58597L12.293 0.292969Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
