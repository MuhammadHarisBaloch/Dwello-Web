import Icons from "@/app/constants/Icons";
import { Card, Stack, Text, Image, Center, Box, Group } from "@mantine/core";

export default function AboutCompany() {
  const aboutCard = (logo: string, title: string, description: string) => (
    <>
      <Card
        bg="#DDC7BB"
        px="24"
        radius="lg"
        py="30"
        w="275"
        h="268"
        style={{ boxShadow: "0 2px 8px #DDC7BB" }}
      >
        <Stack gap="sm">
          <Card bg="#FBF5F1" w="83" h="83" px="15" py="16" radius="md">
            <Center>
              <Image w="3rem" h="3rem" src={logo} />
            </Center>
          </Card>
          <Text fz="lg" fw={700} c="#2B1B12">
            {title}
          </Text>
          <Text c="#4F3527" fw={500}>
            {description}
          </Text>
        </Stack>
      </Card>
    </>
  );

  return (
    <>
      <Box px={104}>
        <Stack align="center" mt={144}>
          <Text fz={40} fw={800}>
            Why Choose Us
          </Text>
          <Text fz="lg" fw={700} ta="center" c="#4F3527">
            Elevating Your Home Buying Experience with Expertise, Integrity,
            <br /> and Unmatched Personalized Service
          </Text>
          <Group justify="space-between" w="100%" mt="3rem">
            {aboutCard(
              Icons.locationIcon2,
              "Expert Guidance",
              "Benefit from our teams \n seasoned expertise for a \n smooth buying experience"
            )}
            {aboutCard(
              Icons.userIcon2,
              "Personalized Service",
              "Our services adapt to your \n unique needs, making your \n journey stress-free"
            )}
            {aboutCard(
              Icons.noteBookIcon,
              "Transparent Process",
              "Stay informed with our \n clear and honest approach \n to buying your home"
            )}
            {aboutCard(
              Icons.handeShkeIcon,
              "Exceptional Support",
              "Providing peace of mind \n with our responsive and \n attentive customer service"
            )}
          </Group>
        </Stack>
      </Box>
    </>
  );
}
