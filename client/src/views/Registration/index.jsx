import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CONFETTI_DARK, CONFETTI_LIGHT } from "./confetti";
import { LockIcon } from "@chakra-ui/icons";
import { Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";

const Registration = () => {
  const [inputs, setInputs] = useState({});
  const [value, setValue] = React.useState("1"); // RADIO

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/auth/register", {
        ...inputs,
        sex: value,
      })
      .then(() => {
        console.log("Success");
      });
  };

  console.log({ ...inputs, sex: value });

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      id="contact"
      height={"100vh"}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Sign Up
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Username</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input
                        type="text"
                        name="userid"
                        placeholder="Username"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<LockIcon />} />
                      <Input
                        type="password"
                        name="user_pass"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Birthday</FormLabel>

                    <InputGroup>
                      <Input
                        type="date"
                        name="birthdate"
                        placeholder="Birthday"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup name="sex" onChange={setValue} value={value}>
                      <Stack direction="row">
                        <Radio value="M">Male</Radio>
                        <Radio value="F">Female</Radio>
                        <Radio value="O">Other</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    isFullWidth
                    onClick={handleSubmit}
                  >
                    Register
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Registration;
