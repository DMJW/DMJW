import React from "react";

export default function LearnMain() {
  return (
    <div>
      <h2>Please log in to learn.</h2>
      <a href="HTTP://WWW.DMJWWEB.COM/account">
        <button class="button">
          <span>Log in</span>
        </button>
      </a>
      <a href="HTTP://WWW.DMJWWEB.COM/new-a-dmjw">
        <button class="button">
          <span>Create Account</span>
        </button>
      </a>
      <br />
      <p style={{ fontSize: 20 }}>OR</p>
      <h2>Try without an account</h2>
      <button>Try "Learn"</button>
      <p>
        ※Your Learn Progress, LC and all others will be deleted if you "try
        learn". It will not erase if you created an account or logged in even
        after "try learn" before off or quit.
      </p>

      <h2>Math</h2>
      <a href="/Learn/math1">
        <button class="sbutton">
          <span>Math Level 1</span>
        </button>
      </a>
      <h2>Language</h2>
      <button>...</button>
    </div>
  );
}
