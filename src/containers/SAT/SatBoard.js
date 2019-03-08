import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import request from "axios";
import URL from "../../constants/URL";
import { css } from "emotion";

SatM.propTypes = {
  userId: PropTypes.number,
  username: PropTypes.string
};

export default function SatM({ userId, username }) {
  const [messages, setMessages] = useState([]);
  const [userOnlyInputText, setUserOnlyInputText] = useState(
    userId ? "" : "Users Only"
  );
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
        <h1>S A T Board</h1>
        <h3>Share And Talk with the World</h3>
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
        <a href="/Sat/main">{`DMJW's Talk`}</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          {`About DMJW's ↗︎(Moving to another web)`}
        </a>
        <div
          style={{ backgroundColor: "#ffffff", height: 30, width: "100%" }}
        />
        <h3>Things from inside this page</h3>
        <a href="#SatB">SAT Board</a>
        <br />
        <a href="#WWSATB">{`Everyone's WWSAT`}</a>
        <br />
      </div>
      <a style={{ fontSize: 30 }}>⇩⇣⇩</a>
      <div>
        <h2>SAT Say Board</h2>
        <p>The Messages Board. The website users are sharing and Talking!</p>
        <h4>Please Login to Send Messages in SAT</h4>
        <form onSubmit={handleSubmit}>
          <input
            value={userOnlyInputText}
            placeholder="Write a message..."
            onChange={event =>
              setUserOnlyInputText(
                userId ? event.target.value : userOnlyInputText
              )
            }
          />
        </form>
        <h2>{`Everyone's WWS`}</h2>
        <p>
          The World Wide Say Messages Board. Everyone All over the world is
          sharing and talking!
        </p>
        {messages.map(message => (
          <div key={message.id}>
            <span style={{ color: "blue" }}>{message.username}</span>:{" "}
            {message.message} {message.timePosted} ago
          </div>
        ))}
        <p>
          Did you visit <a href="http://www.dmjwweb.com">www.dmjwweb.com</a>? |
          2019 | from Hello
        </p>
        <input placeholder="Type to send..." />
      </div>
    </div>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    setUserOnlyInputText("");
    try {
      const { data } = await request.post(`${URL}/posts`, {
        userId,
        message: userOnlyInputText
      });
      setMessages(
        messages.concat([
          {
            id: data.messageId,
            username: username,
            message: data.message,
            timePosted: 0
          }
        ])
      );
    } catch (error) {
      console.error(error);
    }
    console.log(userOnlyInputText);
  }
}
