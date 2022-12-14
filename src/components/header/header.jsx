import { SearchForm } from "../SearchForm/SearchForm"
import { NavLink, useLocation } from "react-router-dom";
import { HeaderStyled, HeaderContainer, Logo, NavButton } from "./headerStyled";
import icons from "./images/symbol-defs.svg"


export const Header = ({isAutorised, userName, removeLogedUser, libraryTogle}) => {
    const location = useLocation();
    const logoutHendloer = () => {
        removeLogedUser();
    }
    return(
        <HeaderStyled>
            <HeaderContainer>
                <div className="topLine">
                    <Logo>
                        <svg>
                            <use href={`${icons}#iconFilm`}/>
                        </svg>
                        <h1>Filmoteka</h1>
                    </Logo>

                    <nav>
                        <ul>
                            <li>
                                <NavButton to="/">home</NavButton>
                            </li>
                            {isAutorised ? 
                            <li><NavButton to="/library">my library</NavButton></li> :
                            <>
                                <li><NavButton to="/singIn" state={{from: location}}>sing in</NavButton></li>
                                <li><NavButton to="/logIn" state={{from: location}}>log in</NavButton></li>
                            </>
                            }
                        </ul>
                    </nav>
                </div>
                
                
                {isAutorised && <button type="button" onClick={logoutHendloer}>{"Log Out " + userName}</button>}
                {libraryTogle ? <button type="button">wached</button> : <SearchForm/>}    
            </HeaderContainer>
        </HeaderStyled>
    )
}