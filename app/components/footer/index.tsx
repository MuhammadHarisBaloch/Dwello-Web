import Icons from "@/app/constants/Icons";
import { Box, Stack, Text, Image, Group, Flex } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
  const aboutCompany = (
    title: string,
    text1: string,
    text2: string,
    text3: string,
    text4: string
  ) => (
    <>
      <Stack gap="2rem">
        <Text fw="bold" fz="h3" c="#2B1B12">
          {title}
        </Text>
        <Text fw="bold" fz="h4" c="#4F3527">
          {text1}
        </Text>
        <Text fw="bold" fz="h4" c="#4F3527">
          {text2}
        </Text>
        <Text fw="bold" fz="h4" c="#4F3527">
          {text3}
        </Text>
        <Text fw="bold" fz="h4" c="#4F3527">
          {text4}
        </Text>
      </Stack>
    </>
  );

  return (
    <>
      <Box bg="#DDC7BB" px="5rem" pt="8rem" h="80vh">
        <Group justify="space-between" align="start">
          <Stack gap="2rem">
            <Image h="auto" w="6rem" src={Icons.appLogo} />
            <Text c="#4F3527" fz="h4" fw="bold" style={{ lineHeight: 1.2 }}>
              Bringing you closer to
              <br /> your dream home, one <br />
              click at a time.
            </Text>
          </Stack>
          {aboutCompany(
            "About",
            "Our Story",
            "Careers",
            "Our Team",
            "Resources"
          )}
          {aboutCompany(
            "Support",
            "FAQ",
            "Contact Us",
            "Help Center",
            "Terms of Service"
          )}
          {aboutCompany("Find Us", "Events", "Locations", "Newsletter", "")}
          <Stack gap="2rem">
            <Text fw="bold" fz="h3" c="#2B1B12">
              Our Social
            </Text>
            <Flex gap="lg" align="center">
              <IconBrandInstagram size={24} color="#4F3527" />
              <Text fw="bold" fz="h4" c="#4F3527">
                Instagram
              </Text>
            </Flex>
            <Flex gap="lg" align="center">
              <IconBrandFacebook size={24} color="#4F3527" />
              <Text fw="bold" fz="h4" c="#4F3527">
                Facebook
              </Text>
            </Flex>
            <Flex gap="lg" align="center">
              <IconBrandTwitter size={24} color="#4F3527" />
              <Text fw="bold" fz="h4" c="#4F3527">
                Twitter
              </Text>
            </Flex>
          </Stack>
        </Group>
      </Box>
    </>
  );
}
