import { React, useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

import { registerUserRequest } from "../services/auth";
import { useRecoilState } from "recoil";
import { userAuth } from "../services/Atom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { fetchAllThemesRequest } from "../services/theme";

//   
const themeData = [
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

export default function FormV2() {
  const [value, setValue] = useState(null);
  const [auth, setAuth] = useRecoilState(userAuth)

  const [themeDataArray, setThemArrayeDataArray] = useState()

  // signup
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [theme, setTheme] = useState('')
  const [themeExists, setThemeExists] = useState(false)

  const router = useRouter()


  // fetch all themes
  useEffect(() => {
    getThemeDataforform()
  }, [])

  const getThemeDataforform = async () => {
    const res = await fetchAllThemesRequest()

    if (!res.api_error) {
      setThemArrayeDataArray(res?.api_data?.result)
    }
  }

  // get selected theme id 
  const themeHandler = (id) => {
    alert('Theme Selected ' + id)
    setTheme(id)
  }

  //  post data
  const handleFormSubmit = async () => {
    let payload = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      theme: theme,
      mobile: value
    };
    const res = await registerUserRequest(payload);
    if (!res.api_error) {
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
            onClick: () => window.location.href = `https://dashboard.eduonboard.xyz/auth/login?mail=${email}`
            // onClick: () =>   window.location.href = `http://localhost:3001/auth/login?mail=${email}`
          },
          {
            label: 'No',
            onClick: () => ''
          }
        ]
      });



    } else {
      console.log({ res });
      alert( res?.api_data)
    }


  };

  const submitSection = async (e, section) => {
    e.preventDefault();
    let active_section = Number(section);
    if (active_section < 5) {
      router.push(`/formv2/?section=${section + 1}`, undefined, { shallow: true })
    } else {
      handleFormSubmit();
    }

  }
  const formPosition = (section) => {
    let active_section = Number(router.query.section);
    if (active_section > section) {
      return 'up'
    }
    else if (active_section === section) {
      return 'active'
    }
    else if (active_section < section) {
      return 'down'
    }
  }

  return (
    <div className="lp-form-wrapper">
      <div className="lp-form">

        <form className={`lp-form-inner-container ${formPosition(1)}`} onSubmit={(e) => submitSection(e, 1)}>
          <div className="form-item-container">
            <LabelComponent
              title="Your Full name ?"
              htmlFor="name"
              number="1"
            />
            <div className="CustomInputContainer">
              <input type="text" id="name" className='CustomInput'
                onChange={(e) => setFirstName(e.target.value)}
                required placeholder="First Name"
              />
              <input type="text" className='CustomInput pl-2' id="name"
                onChange={(e) => setLastName(e.target.value)}
                required placeholder="last Name"
              />
            </div>
            <SubmitBtnComponent />
          </div>
          <BottomNavigation />
        </form>
        <form className={`lp-form-inner-container ${formPosition(2)}`} onSubmit={(e) => submitSection(e, 2)}>
          <div className="form-item-container">
            <LabelComponent
              title="What email address can we reach you at ?"
              htmlFor="email"
              number="2"
            />
            <input type="text" id="email"

              onChange={(e) => setEmail(e.target.value)}
              required placeholder="name@example.com"
            />
            <SubmitBtnComponent />
          </div>
          <BottomNavigation />
        </form>

        <form className={`lp-form-inner-container ${formPosition(3)}`} onSubmit={(e) => submitSection(e, 3)}>
          <div className="form-item-container">
            <LabelComponent
              title="What phone number can we reach you at ?"
              htmlFor="phone"
              number="3"
            />
            <PhoneInput placeholder=" Type your phone number"


              value={value} onChange={setValue} required

            />
            <SubmitBtnComponent />
          </div>
          <BottomNavigation />
        </form>

        <form className={`lp-form-inner-container ${formPosition(4)}`} onSubmit={(e) => submitSection(e, 4)}>
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
            <ThemeBrowser
              themeDataArray={themeDataArray}
              themeHandler={themeHandler}
            />

            <div className="theme-selected-wrapper">

              {theme.length > 0 &&
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
            {theme.length>0?<SubmitBtnComponent />:"Please Select a Theme"}
            

          </div>
          <BottomNavigation />
        </form>
        <form className={`lp-form-inner-container ${formPosition(5)}`} onSubmit={(e) => submitSection(e, 5)}>
          <div className="form-item-container">

            <LabelComponent
              title="Enter your password"
              htmlFor="password"
              number="5"
            />
            <input
              type="password"
              id="name"
              placeholder=" Type your password "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* submit form */}


            <SubmitBtnComponent />
          </div>
          <BottomNavigation />
        </form>

      </div>

    </div>
  );
}



function LabelComponent({ number, title, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      <span>
        {number}{" "}
        <img src="/svg/right_arrow.svg" alt="arrow" />
      </span>
      {title}
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
  )
}
function SubmitBtnComponent() {
  return (
    <div className="lp-form-btn-wrapper">
      
      <button type="submit" >
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
  )
}

function BottomNavigation() {
  const router = useRouter()
  const navigateBackInForm = async () => {
    let active_section = Number(router.query.section);
    if (active_section === 1) {
      return
    }
    router.push(`/formv2/?section=${active_section - 1}`, undefined, { shallow: true })
  }
  return (
    <div className="toggle-btn-each-form">
      <button
        className="up-arrow"
        type="button"
        onClick={navigateBackInForm}
      >
        <img src="/svg/up_cheveron.svg" />

      </button>
      <button
        type="submit"
      >
        <img src="/svg/down_cheveron.svg" />

      </button>
    </div>
  )
}
function ThemeBrowser({ themeDataArray, themeHandler }) {
  return (
    <div className="theme-inner-content">

      {
        themeDataArray && themeDataArray.map((item, index) => {
          return (
            <div className="theme-inner-card" key={index}   >
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
                <span onClick={() => themeHandler(item._id)} className="button"  >Select theme</span>
                {/* { themeExists ? 'selected' : 
                  <span onClick={() => themeHandler(item.name) } className="button"  >Select theme</span>

                    } */}
              </div>

            </div>
          );
        })
      }



    </div>
  )
}