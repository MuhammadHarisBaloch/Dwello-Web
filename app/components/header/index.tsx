import Icons from "@/app/constants/Icons";
import { Box, Group, Flex, Button, Image, Text } from "@mantine/core";
import id from "./header.module.css";

export default function Header() {
  return (
    <>
      <Box w="100%" bg="#FEF7F2" px={100} pt={30}>
        <Group justify="space-between" align="center">
          <Image w="5rem" src={Icons.appLogo} />
          <Flex gap="5rem">
            <Text fz="lg" fw={700}>
              Home
            </Text>
            <Text fz="lg" fw={700}>
              Service
            </Text>
            <Text fz="lg" fw={700}>
              Agents
            </Text>
            <Text fz="lg" fw={700}>
              Contact
            </Text>
          </Flex>
          <Flex gap="2rem" align="center" ml="-10rem">
            <Image w="24" h="24" src={Icons.searchIcon} />
            <Image w="24" h="24" src={Icons.userIcon} />
            <Button bg="black" c="white" radius="md" fw={500}>
              Sign up
            </Button>
          </Flex>
        </Group>
      </Box>
    </>
  );
}
