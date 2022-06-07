import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import bannerImg from "../../assets/images/wallpaper2you_106466.jpg";
import GenericTable from "../../components/Table";

const Ranking = () => {
  const [data, setData] = useState([]);

  const dataSelected = () => {
    axios
      .get(`http://localhost:3001/player/player-ranking`)
      .then((response) => {
        setData(response);
      });
  };

  return (
    <>
      <Flex
        w={"full"}
        h={"20vh"}
        backgroundImage={bannerImg}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                onClick={dataSelected}
              >
                Player Ranking
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                PVP Ranking
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      {data.length !== 0 ? <GenericTable data={data} /> : null}
    </>
  );
};

export default Ranking;
