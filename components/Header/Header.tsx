import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import BorbaImage from "../../images/borba.png";
import GithubIcon from "../../images/social/GithubIcon.png";
import LinkedinIcon from "../../images/social/LinkedinIcon.png";
import TelegramIcon from "../../images/social/TelegramIcon.png";
import InstagramIcon from "../../images/social/InstagramIcon.png";
import FacebookIcon from "../../images/social/FacebookIcon.png";
import TwitterIcon from "../../images/social/TwitterIcon.png";

export const Header: FC = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ width: "494px" }}>
            <Typography fontSize={32} fontWeight="bold">
              Hello World, I am
            </Typography>
            <Typography
              color="primary"
              fontSize={64}
              fontWeight="bold"
              whiteSpace={{ md: "nowrap" }}
              lineHeight={"1"}
              marginLeft={"-2px"}
            >
              Rodrigo Borba
            </Typography>
            <Typography fontSize={36} fontWeight="light">
              I code for web3, teach people, fly airplanes and play guitar
            </Typography>
            <Box
              width="415px"
              display="flex"
              justifyContent={"space-between"}
              padding="48px 16px"
              marginLeft={"-16px"}
            >
              <IconButton target="_blank" href="https://github.com/rjborba/">
                <Image src={GithubIcon} height="38px" width="38px" />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/rodrigo-borba-37a282130/"
              >
                <Image src={LinkedinIcon} height="38px" width="38px" />
              </IconButton>
              <IconButton target="_blank" href="https://t.me/rjborba/">
                <Image src={TelegramIcon} height="38px" width="38px" />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.instagram.com/rjborba/"
              >
                <Image src={InstagramIcon} height="38px" width="38px" />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.facebook.com/rjborbalive/"
              >
                <Image src={FacebookIcon} height="38px" width="38px" />
              </IconButton>
              <IconButton target="_blank" href="https://twitter.com/rjborba">
                <Image src={TwitterIcon} height="38px" width="38px" />
              </IconButton>
            </Box>
          </div>
          <div style={{ flexGrow: "1" }}>
            <Box
              height="382px"
              width="382px"
              border="16px solid white"
              margin="auto"
            >
              <Image
                src={BorbaImage}
                objectFit="cover"
                height="382px"
                width="382px"
              />
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};
