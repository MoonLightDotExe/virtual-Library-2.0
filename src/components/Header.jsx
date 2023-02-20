import React from 'react'

function Header() {
  return (
    <>
        <div className="header">
            <div className="header__text">
                <div className="heading__primary">
                    <div className="header__text--primary"> Virtual Library </div>
                    <div className="header__text--secondary"> A place of Learning </div>
                </div>
                <a id ="head" href="#new" className="btn btn-primary">Begin</a>
            </div>
        </div>
    </>
  )
}

export default Header