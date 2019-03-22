import React, { useEffect, useRef, useState } from "react";
import request from "axios";
import URL from "../../constants/URL";
import { css } from "emotion";

export default function SatM() {
  const [messages, setMessages] = useState([]);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    loadMessages();

    async function loadMessages() {
      try {
        const { data } = await request.get(`${URL}/posts`);
        if (mounted.current) {
          setMessages(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    return function cleanUp() {
      mounted.current = false;
    };
  }, []);

  return (
    <div>
      <div className="SatTop" id="SatTop">
        <h1>S A T</h1>
        <h2>Share And Talk</h2>
        <p>🆕</p>
      </div>
      <div
        className={`SMB ${css`
          @media (max-width: 950px) {
            display: none;
          }
        `}`}
        style={{
          width: "15%",
          color: "#ffffff"
        }}
      >
        <a href="/">Back To MAIN</a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <a href="/languages">
          <p style={{ fontSize: 17 }}>
            Select your country or region to change the language.
            <br />
            언어를 변경하려면 해당 국가 또는 지역을 선택하세요.
          </p>
        </a>
        <a href="/developers/main">Developer Tools</a>
        <br />
        <a href="/Fun/Main">{`DMJW's Fun`}</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          {`About DMJW's ↗︎(Moving to another web)`}
        </a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <h3>Things from inside this page</h3>
        <a href="#SatBoardM">SAT Board</a>
        <br />
        <a href="#TktkMp">TalkTalk</a>
        <br />
        <a href="#othersat">Other SAT things</a>
        <br />
        <a href="#SatTop">Go to ⤒TOP⤒</a>
      </div>
      <a style={{ fontSize: 30 }}>⇩⇣⇩</a>
      <div>
        <h2>SAT Board</h2>
        <p>Share and Talk to everyone using DMJWs.website!</p>
        <h4>Some recently sent messages</h4>
        <p>Message ... | 12:00 Today</p>
        <p>Message ... | 11:57 Today</p>
        <p>Send Some messages! </p>
        <a href="/Sat/WorldBoard">
          <button className="button">
            <span>Show SAT Board</span>
          </button>
          <br />
          Click to show...
        </a>
        {/* {messages.map(message => (
          <div key={message.id}>
            <span style={{ color: "blue" }}>{message.username}</span>:{" "}
            {message.message} {message.timePosted} ago
          </div>
        ))} */}
      </div>
      <div>
        <h2>💬TalkTalk✋</h2>
        <p>
          {`TalkTalk is a function of DMJW's where you can talk(and send) messages
          to a person or a group of people.`}
        </p>
        <h4>{`📱It's still making!🔨`}</h4>
      </div>
    </div>
  );
}
