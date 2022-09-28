import React from 'react'
import "./Widgets.css"
import { Search } from '@mui/icons-material';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets:React.FC = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1574703827718381569"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/sagnick.kundu/"}
          options={{ text: "#reactjs is awesome", via: "sagnickkundu" }}
        />
      </div>
    </div>
  )
}

export default Widgets