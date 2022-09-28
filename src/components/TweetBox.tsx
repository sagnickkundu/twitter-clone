import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { db } from "../db";
import { useAuth0 } from '@auth0/auth0-react';
const TweetBox: React.FC = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const { user } = useAuth0();
  const sendTweet = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(tweetMessage + "    " + tweetImage);
    if (tweetMessage !== "" && tweetImage !== "") {
      let nickname = user?.nickname;
      let picture = user?.picture;
      let email_verified = user?.email_verified;
      await db.posts.add({
        tweetMessage,
        tweetImage,
        nickname, 
        picture, 
        email_verified
      });
    }
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
