import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

import GithubIcon from "../../../images/social/GithubIcon.png";
// import LinkedinIcon from "../../images/social/LinkedinIcon.png";
import TelegramIcon from "../../../images/social/TelegramIcon.png";
import InstagramIcon from "../../../images/social/InstagramIcon.png";
import FacebookIcon from "../../../images/social/FacebookIcon.png";
import TwitterIcon from "../../../images/social/TwitterIcon.png";

export const SocialMediaRow: FC = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent={"space-between"}
      padding="48px 16px"
      sx={{
        a: {
          height: { xs: "28px", md: "38px" },
          width: { xs: "28px", md: "38px" },
        },
      }}
    >
      <a target="_blank" href="https://github.com/rjborba/">
        <Image
          src={GithubIcon}
          layout="responsive"
          height="100%"
          width="100%"
        />
      </a>
      {/* <a
      target="_blank"
      href="https://www.linkedin.com/in/rodrigo-borba-37a282130/"
    >
      <Image src={LinkedinIcon}  />
    </a> */}
      <a target="_blank" href="https://t.me/rjborba/">
        <Image
          src={TelegramIcon}
          layout="responsive"
          height="100%"
          width="100%"
        />
      </a>
      <a target="_blank" href="https://www.instagram.com/rjborba/">
        <Image
          src={InstagramIcon}
          layout="responsive"
          height="100%"
          width="100%"
        />
      </a>
      <a target="_blank" href="https://www.facebook.com/rjborbalive/">
        <Image
          src={FacebookIcon}
          layout="responsive"
          height="100%"
          width="100%"
        />
      </a>
      <a target="_blank" href="https://twitter.com/rjborba">
        <Image
          src={TwitterIcon}
          layout="responsive"
          height="100%"
          width="100%"
        />
      </a>
    </Box>
  );
};
