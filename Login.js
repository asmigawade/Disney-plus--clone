import React from 'react'
import styled from "styled-components"
import Bg from '../images/login-background.jpg'
import Logo from "../images/cta-logo-one.svg"
import Logotwo from "../images/cta-logo-two.png"


const Login = (props) => {
    return(
 <Container>
    <Content>
        <CTA>
          <CTALogo src={Logo} />
          <SignUp>GET ALL THERE</SignUp>
          <Description>This page is protected by Google reCAPTCHA to ensure you're not.
            <br></br>Get Premium access to Avatar 2 a bot</Description>
            <CTALogotwo src={Logotwo} />
        </CTA>
        <BgImage />
    </Content>
 </Container>
 )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height:100vh;
    `;

const Content = styled.section`
    margin-bottom: 10px;
    width:100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    `;   

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-image: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1; 
    
    `;

const CTA = styled.div`
    margin-bottom: 2vw ;
    max-width: 650px;
    flex-wrap: wrap;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width:100%;
`;

const CTALogo = styled.img`
    margin-bottom: 12px ;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const CTALogotwo = styled.img`
    margin-bottom: 20px ;
    max-width: 600px;
    min-height: 1px;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    padding-top: 10px;
`;

const SignUp = styled.a`
    color: #f9f9f9;
    font-weight: bold;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 10px;

    &:hover{
        background-color: #0483ee;
    }

`;

const Description = styled.p`
    color: #f9f9f9;
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    `;



export default Login
