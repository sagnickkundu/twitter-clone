import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import twitterHero from "../assets/twitter-hero.jpg";
import twitterLogo from "../assets/icons8-twitter-480.png";
import LoginButton from "../components/login-button";
import SignupButton from "../components/signup-button";
import "./Home.css";
import LogoutButton from "../components/logout-button";

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <img src={twitterHero} alt="twitter" className="twitter-hero" />
        </div>
        <div className="col-sm">
          <div className="twitter-logo">
            <img
              src={twitterLogo}
              alt="twitter-logo"
              className="twitter-logo"
            />
          </div>
          <h1 className="header-writing">Happening now</h1>
          <h2 className="header-sub-writing">Join Twitter today</h2>
          {!isAuthenticated && (
            <div className="authentication">
              <SignupButton />
              <h4 className="sign-in-text">Already have an account?</h4>
              <LoginButton />
            </div>
          )}
          {isAuthenticated && <LogoutButton />}
        </div>
      </div>
    </div>
  );
};

export default Home;
