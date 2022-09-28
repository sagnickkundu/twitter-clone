import React from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";
import Post from "./Post";
import "./Post.css";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";

const Feed: React.FC = () => {
  const data = useLiveQuery(() => db.posts.toArray());
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <div className="feed__posts">
      {data?.map((post) => (
        <Post
          key={post.id}
          displayName={post.nickname}
          username={post.nickname}
          verified={post.email_verified}
          text={post.tweetMessage}
          avatar={post.picture}
          image={post.tweetImage}
        />
      ))}
      </div>
      
    </div>
  );
};

export default Feed;
