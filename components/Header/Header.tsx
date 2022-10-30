import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import BorbaImage1 from "../../images/borba1.jpg";
// import BorbaImage2 from "../../images/borba2.jpg";
// import BorbaImage3 from "../../images/borba3.jpg";
// import BorbaImage4 from "../../images/borba4.jpg";
// import BorbaImage5 from "../../images/borba5.jpg";
// import BorbaImage6 from "../../images/borba6.jpg";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { SocialMediaRow } from "./SocialMediaRow";

export const Header: FC = () => {
  // const [borbaImage, setBorbaImage] = useState<StaticImageData>(BorbaImage1);
  // const countRef = useRef(0);

  // const borbaImagesArray = [
  //   BorbaImage1,
  //   BorbaImage2,
  //   BorbaImage3,
  //   BorbaImage4,
  //   BorbaImage5,
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const imageIndex = (countRef.current + 1) % borbaImagesArray.length;
  //     setBorbaImage(borbaImagesArray[imageIndex]);
  //     countRef.current++;
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // height: "calc(100vh - 120px)",
          minHeight: "100vh",
          transition: "0.15s",
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
            maxWidth={{ xs: "100%", md: "unset" }}
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
            <Box
              width={{ xs: "100%", md: "400px" }}
              maxWidth={{ xs: "300px", md: "400px" }}
            >
              <SocialMediaRow />
            </Box>
          </Box>
          <Box width={{ xs: "100%", md: "unset" }} flexGrow={1}>
            <Box
              height={{ xs: "unset", md: "382px" }}
              width={{ xs: "100%", md: "382px" }}
              maxWidth={{ xs: "100%", md: "unset" }}
              border="12px solid white"
              margin="auto"
            >
              <Image
                src={BorbaImage1}
                layout="responsive"
                objectFit="cover"
                height="100%"
                width="100%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box height={120} textAlign="center">
        <Typography fontSize={16}>Scroll for more</Typography>
        <ArrowDownwardIcon fontSize="medium" />
      </Box> */}
    </>
  );
};
