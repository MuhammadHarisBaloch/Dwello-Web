import Icons from "@/app/constants/Icons";
import Images from "@/app/constants/Images";
import {
  Box,
  Card,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Group,
} from "@mantine/core";

export default function ResidenceCards() {
  const cardData = (
    image: string,
    title: string,
    rooms: string,
    sqfeet: string,
    price: string
  ) => (
    <>
      <Card w={382} radius="lg" bg="#DDC7BB" p={0} mt="3rem">
        <Image h={402} src={image} />
        <Stack px="lg" py="md" gap="lg">
          <Flex gap={8}>
            <Image w="2rem" h="2rem" src={Icons.brownLocationIcon} />
            <Text fz={20} fw={700} c="#2B1B12">
              {title}
            </Text>
          </Flex>
          <Flex gap={40}>
            <Flex gap={4}>
              <Image src={Icons.bedIcon} />
              <Text fz="lg" fw={500} c="4F3527">
                {rooms}
              </Text>
            </Flex>
            <Flex gap={4}>
              <Image src={Icons.inchStcikIcon} />
              <Text fz="lg" fw={500} c="4F3527">
                {sqfeet}
              </Text>
            </Flex>
          </Flex>
          <Group justify="space-between" align="flex-end">
            <Button bg="black" c="white" radius="md" w="98" fw={500} h="40">
              Sign up
            </Button>
            <Text fz={22} fw={700} c="#4F3527">
              {price}
            </Text>
          </Group>
        </Stack>
      </Card>
    </>
  );

  return (
    <>
      <Box px={104} mt={144} h="100vh">
        <Text fz={40} fw={800} ta="center">
          Our Popular Residences
        </Text>
        <Group justify="space-between">
          {cardData(
            Images.residence1,
            "San Francisco, California",
            "4 Rooms",
            "3,500 sq ft",
            "$2,500,000"
          )}
          {cardData(
            Images.residence2,
            "Beverly Hills, California",
            "3 Rooms",
            "1,500 sq ft",
            "$850,000"
          )}
          {cardData(
            Images.residence3,
            "Palo Alto, California",
            "6 Rooms",
            "4,000 sq ft",
            "$3,700,000"
          )}
        </Group>
      </Box>
    </>
  );
}
