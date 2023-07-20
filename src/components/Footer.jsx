import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://lh3.googleusercontent.com/pw/AIL4fc_qKptOgJLoaQ8-LF-EzZjy1ljs1jlphBr9CToACEoxuLGzVcLOD_MyO3I_cGP7iMohqzANkVq4xEdVJJ5kNUf9WsTycahEogozrTQ-t3ScnMV_Uq66VAsvxKDpcl3lHHmBVYHr052ZWeTzCQC0kyyo5KUX1RI-8YHTEnyhMngGNynsdl4SJ6nETY5Foz7Ny4v739vP_eljQLeeA4SCHo8uz27qsyaBhgRIG0FXWDvcSqUBUwrvAWzGCXuY_zS6-idn28THUukBcjax5IxVQI0ROAAkUKb2CRPTpK597ZYucsSMUiOBG0lEPERdjkj7tRaZaa0c5p37pQoYM6_Y-tAQCYPGeQkGyyGYlv5rmLNVWVxRmEfgHwhqCyFz_lW2qvrbqfKwzqTKKnVfDcZ-aLSlwEquOt8--lREt5tLJe1FJ6N2pxKcQGD6zZ16MPi_yBkynlY_zjfuN_UvSUELwVRFKzvKVW05VGIIDcy6YcWAH7mdWlaGY0RA8gf2eNrB9HgXMCCn6yrnk5DgmmdQdE2F_1qpJp5XwulXGxKwxbUawqC9OLnjSVXP8lEY3_LKCp2KAMONmgPHUNeLKKhcRcJxdnioGa0FHy51d3Bm5nssG5BVwvVoyG5B0XGxhL3BTDeDGly2uCXunGsbDumZaySGOXN4LPt7jnCpx3CcaX-Ht3ZpA3j_WgrknGBVLeKjmVogEST-YyVU6ZQwzYr54TbUaf3JRMWAARLDVEyz5QW5Dp19gTGsisJkQPT_U3YUAiAKOOy3iRX7VnGF22bqXYWSk0CXGh6iu99RARZG2z9v7PWufG40D_dSRYgVWH1S3DnKHJA8KMCaIDqirDr4A2r_BQC_OTHT83Q7un2ozVx1GoIVFlh68JmR46kYgkFcHlDzmFfOx64FmTRMet0eUye2vF68lB8peNqQgmyrw--1ahwlqQ4zvupko7qp=w941-h941-s-no?authuser=0";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
