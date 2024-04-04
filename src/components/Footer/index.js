import React from "react";

function Footer() {
  return (
    <footer className="Footer-Container">
      <p className="Footer-Copy">&copy;SamH</p>
      <div className="Footer-Social-Icons">
        <a className="Footer-Link Github" href="https://github.com/smaheilman">
          <img src={require(`../../assets/github.png`)} alt="hub-icon"></img>
        </a>
        <a
          className="Footer-Link Twitter"
          href="https://twitter.com/smaheilman"
        >
          <img
            src={require(`../../assets/connection.png`)}
            alt="twitter-icon"
          ></img>
        </a>
        <a
          className="Footer-Link LinkedIn"
          href="https://www.linkedin.com/in/samantha-heilman-709282172/"
        >
          <img src={require(`../../assets/linkdin.png`)} alt="link-icon"></img>
        </a>
        <a
          className="Footer-Link Facebook"
          href="https://www.facebook.com/sam.heilman.5"
        >
          <img src={require(`../../assets/neon.png`)} alt="face-icon"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
