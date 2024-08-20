import Icons from "@/app/constants/Icons";
import Images from "@/app/constants/Images";
import {
  Card,
  Group,
  Box,
  Flex,
  Button,
  Grid,
  Stack,
  Center,
  Text,
  Image,
} from "@mantine/core";

export default function Dashboard() {
  const detailCard = (text: string, image: string) => (
    <>
      <Card w="25%" bg="#FBF5F1" radius="md" py="xs">
        <Group justify="space-between">
          <Text fz="lg" fw={700} c="#695346">
            {text}
          </Text>
          <Image src={image} />
        </Group>
      </Card>
    </>
  );
  return (
    <>
      <Box w="100%" h="90vh" bg="#FEF7F2" px={100}>
        <Box>
          <Grid pt={30}>
            <Grid.Col span={6} pt={50}>
              <Stack gap={32}>
                <Text
                  fz="4rem"
                  fw={800}
                  style={{
                    lineHeight: "1.2",
                    textShadow: "4px 4px 6px grey;",
                  }}
                >
                  Find Your
                  <br /> Dream Home
                </Text>
                <Text c="#4F3527" fz="lg" fw={700}>
                  Explore our curated selection of exquisite
                  <br /> properties meticulously tailored to your
                  <br /> unique dream home vision
                </Text>
                <Button
                  bg="black"
                  c="white"
                  radius="md"
                  w="8rem"
                  fw={500}
                  h="3rem"
                  mt="lg"
                >
                  Sign up
                </Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Image src={Images.dashHouse} />
            </Grid.Col>
          </Grid>
        </Box>
        <Center>
          <Card bg="#DDC7BB" w="90%" radius="md" px="lg" py="1rem">
            <Flex gap={24} align="center" py="xs" h="4rem">
              {detailCard("Location", Icons.locationIcon)}
              {detailCard("Type", Icons.homeIcon)}
              {detailCard("Price Range", Icons.dollarCoinIcon)}
              <Button
                bg="black"
                c="white"
                radius="md"
                fw={500}
                w="8rem"
                h="3rem"
              >
                Sign up
              </Button>
            </Flex>
          </Card>
        </Center>
      </Box>
    </>
  );
}
