"use client";
import Icons from "@/app/constants/Icons";
import {
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Button,
  TextInput,
} from "@mantine/core";
import { IconMailFilled } from "@tabler/icons-react";
import classes from "./questionSection.module.css";

export default function QuestionSection() {
  return (
    <>
      <Box my="10rem">
        <Stack align="center">
          <Text ta="center" fz={40} fw={800}>
            Do You Have Any Questions? <br /> Get Help From Us
          </Text>
          <Flex gap="5rem">
            <Flex gap="sm">
              <Image src={Icons.tickMark} />
              <Text fz={18} fw={700} c="#543E32">
                Chat live with our support team
              </Text>
            </Flex>
            <Flex gap="sm">
              <Image src={Icons.tickMark} />
              <Text fz={18} fw={700} c="#543E32">
                Browse our FAQ
              </Text>
            </Flex>
          </Flex>
          <Flex gap="lg" mt="2rem">
            <TextInput
              classNames={{ input: classes.textInput }}
              w="25rem"
              radius="md"
              placeholder="Enter your email address..."
              leftSection={<IconMailFilled size={24} color="#543E32" />}
              styles={{
                input: {
                  backgroundColor: "#DDC7BB",
                  height: "3rem",
                  paddingLeft: "3rem",
                },
              }}
            />
            <Button
              radius="md"
              bg="#2B1B12"
              fz="h5"
              fw="normal"
              h="3rem"
              w="8rem"
            >
              Submit
            </Button>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
