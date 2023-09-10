import {React ,useEffect} from 'react'
import styled from "styled-components"
import Disney from "../images/logo.svg"
import Home from "../images/home-icon.svg"
import Search from "../images/search-icon.svg"
import Watchlist from "../images/watchlist-icon.svg"
import Originals from "../images/original-icon.svg"
import Movies from "../images/movie-icon.svg"
import Series from "../images/series-icon.svg"
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
  } from "../features/user/userSlice";


const Header = (props) =>{


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect(() =>{
        auth.onAuthStateChanged(async(user) =>{
            if(user){
                setUser(user);
                navigate('/home');
            }
        })
    } , [userName]);

    const handleAuth = () =>{
        if (!userName) {
           auth.signInWithPopup(provider).then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        }); 
        }else if(userName){
            auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
        }
        
    };

    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return(
        <Nav>
           <a href="/">
            <Logo src={Disney} alt="logo" />
           </a>
           {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
           <NavMenu>
                <a href='/home'>
                    <img src={Home}></img>
                    <span>HOME</span>
                </a>
                <a href='/'>
              <img src={Search} alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href='/'>
              <img src={Watchlist} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a href='/'>
              <img src={Originals} alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a href='/'>
              <img src={Movies} alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href='/'>
              <img src={Series} alt="SERIES" />
              <span>SERIES</span>
            </a>
                
           </NavMenu>
           <SignOut>
                <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                    <span onClick={handleAuth}>SignOut</span>
                </DropDown>
           </SignOut>
           
           </>
         )}
        </Nav>
    )
};

const Nav = styled.nav`
    position: fixed;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;

`;

const Logo = styled.img`
    padding: 10px;
    margin-top: 4px;
    max-height: 70px;
    display: block;
    width: 100%;
    display: inline-block;
    
    a{ 
        font-size: 0;
        width: 80px;
        display: inline-block;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 479px) {
        display: none;
    }

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;

  

  img{
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  span{
    color: rgb(249,249,249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
        
    &:before{
        content: "";
        background-color: rgb(249,249,249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0) ;
        transition: all 300ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        visibility: hidden;
        width: auto;
        left: 0;
    }
  }

  &:hover{
    span:before{
        transform: scaleX(1) ;
        visibility: visible;
        opacity: 1 !important;
    }
  }
}

`;

const Login=styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border:1px solid #f9f9f9;
    border-radius: 4px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;
const UserImg = styled.img`
    height: 100%;
`;


const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;

    `;


const SignOut=styled.div`
    position:relative;
    display: flex;
    height: 48px;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }

`;




export default Header