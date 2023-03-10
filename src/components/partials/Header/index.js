import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from './styled';

import { isLogged, doLogout } from "../../../helpers/AuthHandler";

const Header = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = "/";
    }

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>   
                    </a>              
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <a href="/my-account">Minha Conta</a>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                <li>
                                    <a href="/post-an-ad" className="button">Anuncie Aqui</a>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <a href="/signin">Login</a>
                                </li>
                                <li>
                                    <a href="/signup">Cadastrar</a>
                                </li>
                                <li>
                                    <a href="/signin" className="button">Anuncie Aqui</a>
                                </li>
                            </>
                        }
                        
                        
                    </ul>
                </nav>
            </div>
            
        </HeaderArea>
    );
}

export default Header;