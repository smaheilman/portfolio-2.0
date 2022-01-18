import React from "react";

function Footer() {

    return (
        <footer>
            <p className="copy">&copy;SamH</p>
            <a className="media" href="https://twitter.com/smaheilman">
                    <img src={require(`../../assets/icons/connection.png`)} alt="twitter-icon"></img>
            </a>
            <a className="media" href="https://www.facebook.com/sam.heilman.5">
                    <img src={require(`../../assets/icons/linkdin.png`)} alt="link-icon"></img>
            </a>
            <a className="media" href="https://www.linkedin.com/in/samantha-heilman-709282172/">
                    <img src={require(`../../assets/icons/neon.png`)} alt="face-icon"></img>
            </a>
            
        </footer>
    )

}

export default Footer;