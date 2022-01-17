import React from "react";

function Footer() {

    return (
        <footer>
            &copy;SamH
            <img src={require(`../../assets/icons/connection.png`)} alt="twitter-icon"></img>
            <img src={require(`../../assets/icons/linkdin.png`)} alt="link-icon"></img>
            <img src={require(`../../assets/icons/neon.png`)} alt="face-icon"></img>
            
        </footer>
    )

}

export default Footer;