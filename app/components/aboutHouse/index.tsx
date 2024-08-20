import Images from "@/app/constants/Images";
import { Stack, Box, Grid, Group, Text, Image } from "@mantine/core";

export default function AboutHouse() {
  const houseDetail = (title: string, description: string) => (
    <>
      <Stack gap={0}>
        <Text fz="3rem" fw={700} c="#4F3527">
          {title}
        </Text>
        <Text fz="lg" fw={600} c="#4F3527" mt="-10">
          {description}
        </Text>
      </Stack>
    </>
  );
  return (
    <>
      <Box>
        <Grid px="104" mt="144" gutter="8rem">
          <Grid.Col span={6}>
            <Image src={Images.detailHouse} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack gap="2rem">
              <Text
                fz={40}
                fw={800}
                style={{
                  lineHeight: "1.2",
                  textShadow: "2px 2px 4px gray;",
                }}
              >
                We Help You To Find
                <br /> Your Dream Home
              </Text>
              <Text fz="lg" fw={700} c="#4F3527">
                From cozy cottages to luxurious estates, our
                <br /> dedicated team guides you through every step of the
                <br /> journey, ensuring your dream home becomes a reality
              </Text>
              <Group justify="space-between">
                {houseDetail("8K+", "Houses Available")}
                {houseDetail("6K+", "Houses Sold")}
                {houseDetail("2K+", "Trusted Agents")}
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
