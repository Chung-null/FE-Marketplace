import React from 'react'
import Link  from 'next/link';


//INTERNAL IMPORT
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subcription",
      link: "subscription",
    },
  ];
  return (
    <div>
      {helpCenter.map((el,i) => (
        <div className={Style.helpCenter} key={i+1}>
          <Link href={{ pathname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter