"use client";

import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import ArrowIcon from "../components/ArrowIcon";
import { HERO } from "../data/hero";

const Hero = () => (
  <Container maxW={"3xl"}>
    <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
      <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
        {HERO.TITLE1} <br />
        <Text as={"span"} color={"green.400"}>
          {HERO.TITLE2}
        </Text>
      </Heading>
      <Text color={"gray.500"}>{HERO.TEXT}</Text>
      <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
        <Button colorScheme={"green"} bg={"green.400"} rounded={"full"} px={6}>
          {HERO.BUTTON1}
        </Button>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          {HERO.BUTTON2}
        </Button>
        <Box>
          <ArrowIcon />
          <Text
            fontSize={"lg"}
            fontFamily={"Caveat"}
            position={"absolute"}
            right={"-125px"}
            top={"-15px"}
            transform={"rotate(10deg)"}
          >
            {HERO.BUTTON_COMMENT}
          </Text>
        </Box>
      </Stack>
    </Stack>
  </Container>
);

export default Hero;
