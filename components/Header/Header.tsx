import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import BorbaImage from "../../images/borba.png";

import { SocialMediaRow } from "./SocialMediaRow";

export const Header: FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Box
          width={{ xs: "100%", md: "494px" }}
          maxWidth={{ xs: "500px", md: "unset" }}
          paddingTop={{ xs: "32px", md: "unset" }}
        >
          <Typography fontSize={{ xs: 24, md: 32 }} fontWeight="bold">
            Hello World, I am
          </Typography>
          <Typography
            color="primary"
            fontSize={{ xs: 36, md: 64 }}
            fontWeight="bold"
            whiteSpace={{ md: "nowrap" }}
            lineHeight={"1"}
            marginLeft={"-2px"}
          >
            Rodrigo Borba
          </Typography>
          <Typography fontSize={{ xs: 20, md: 36 }} fontWeight="light">
            I code for web3, teach people, fly airplanes and play guitar
          </Typography>
          <Box width={{ xs: "300px", md: "100%" }}>
            <SocialMediaRow />
          </Box>
        </Box>
        <Box width={{ xs: "100%", md: "unset" }} flexGrow={1}>
          <Box
            height={{ xs: "unset", md: "382px" }}
            width={{ xs: "100%", md: "382px" }}
            maxWidth={{ xs: 500, md: "unset" }}
            border="16px solid white"
            margin="auto"
          >
            <Image
              src={BorbaImage}
              layout="responsive"
              objectFit="cover"
              height="100%"
              width="100%"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
