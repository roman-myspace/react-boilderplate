import React from 'react'
import ButtonGroup from '../2_widgets/button-group'

export default function Header() {
  return (
    <header className="mytheme__header">
      <h6 className='mytheme__header--logo'>Logo</h6>
      <nav className="mytheme__header--menu">
        <ButtonGroup
          data={[
            { label: "Home", onClick: () => alert("Home Clicked!") },
            { label: "About", onClick: () => alert("About Clicked!") },
            { label: "Services", onClick: () => alert("Services Clicked!") },
            { label: "Contact Us", onClick: () => alert("Contact Us Clicked!") },
          ]}
        />
        <ButtonGroup
          data={[
            { label: "Login", onClick: () => alert("Login Clicked!") },
            { label: "Register", onClick: () => alert("Register Clicked!"), className: "mytheme__button_filled" },
          ]}
        />
      </nav>
    </header>
  )
}
