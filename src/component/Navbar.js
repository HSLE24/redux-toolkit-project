import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from'@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from'@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate, menus }) => {

    const navigate = useNavigate();

    const goToLogin=()=>{
        navigate("/login");
    }

    const goToLogout=()=>{
        setAuthenticate(false);
        navigate("/login");
    }

    const goToMain=()=>{
        navigate("/");
    }

    const search=(event)=>{
        if (event.key==="Enter")
        {
            let keyword = event.target.value;
            
            navigate(`/?q=${keyword}`);
        }
    }

  return (
    <div>
        <div>
            <div className='login-btn-area'>
                <div className='login-btn'>
                    <FontAwesomeIcon icon={faUser} />
                    {   authenticate? (
                            <div onClick={goToLogout}>로그아웃</div>
                        ):(
                            <div onClick={goToLogin}>로그인</div>
                        )
                    }
                </div>
            </div>
        </div>
        <div className="nav-logo">
            <img onClick={goToMain} alt="logos" width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"></img>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {
                    menus && menus.map((item, index)=>(
                        <li key={index}>{ item }</li>
                    ))
                }
            </ul>
            <div className="search-area">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type='text' placeholder='제품검색' onKeyPress={(event)=>search(event)}></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar