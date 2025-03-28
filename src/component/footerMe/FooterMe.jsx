import React from "react";
import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterMe = () => {
  return (
    <div id={styles.footer_me} class="hidden lg:flex">
      <div>
        <div>
          <a href="https://www.instagram.com/alireza_hasanpour_frontend">
            <span>
              <InstagramIcon className="text-[#fff]" />
            </span>
          </a>
        </div>
        <div>
          <a href="https://github.com/alirezafrontend/">
            <span>
              <GitHubIcon className="text-[#fff]"/>
            </span>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/alireza-hasanpour-frontend/">
            <span>
              <LinkedInIcon className="text-[#fff]"/>
            </span>
          </a>
        </div>
      </div>
      <div>
        <div class="cursor-pointer">
          <img className="w-[80px]" src="me.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterMe;
