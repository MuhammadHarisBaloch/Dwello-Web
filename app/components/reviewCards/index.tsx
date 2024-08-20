import Icons from "@/app/constants/Icons";
import Images from "@/app/constants/Images";
import { Box, Card, Text, Image, Flex, Group, Stack } from "@mantine/core";

export default function ReviewCards() {
  const cardData = (
    image: string,
    profile: string,
    name: string,
    city: string,
    rating: string,
    about: string
  ) => (
    <Card w={385} p={0} bg="#DDC7BB" radius="lg">
      <Image src={image} />
      <Stack px={24} py={28}>
        <Group justify="space-between">
          <Flex gap="lg" align="center">
            <Image src={profile} w="4rem" h="4rem" radius="100%" />
            <Stack gap={0}>
              <Text fz={20} fw={700} c="#2B1B12">
                {name}
              </Text>
              <Text fw={500} c="#2B1B12">
                {city}
              </Text>
            </Stack>
          </Flex>
          <Image w="59px" h="24px" src={rating} />
        </Group>
        <Text fw={500} c="#4F3527" style={{ lineHeight: 1.3 }}>
          {about}
        </Text>
      </Stack>
    </Card>
  );

  return (
    <>
      <Box h="100vh" bg="#FEF7F2" pt={30} px={104}>
        <Stack gap="xl">
          <Text
            ta="center"
            fz={40}
            fw={800}
            c="#2B1B12"
            style={{ lineHeight: 1.2 }}
          >
            What People Say <br />
            About Dwello
          </Text>
          <Group justify="space-between">
            {cardData(
              Images.reviewResidence1,
              Images.user1,
              "Sarah Nguyen",
              "San Francisco",
              Images.fivestarReview,
              "Dwello truly cares about their clients. They listened to my needs and  preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
            )}
            {cardData(
              Images.reviewResidence2,
              Images.user2,
              "Michael Rodriguez",
              "San Diego",
              Images.fourHalfStarReview,
              "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
            )}
            {cardData(
              Images.reviewResidence3,
              Images.user3,
              "Emily Johnson",
              "Los Angeles",
              Images.fivestarReview,
              "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
            )}
          </Group>
          <Flex gap="lg" justify="center">
            <Image src={Icons.leftArrowIcon} w="3rem" h="3rem" />
            <Image src={Icons.rightArrowIcon} w="3rem" h="3rem" />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
