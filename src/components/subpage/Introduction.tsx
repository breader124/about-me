import {Anchor, Card, Center, Divider, Image, List, SimpleGrid, Stack, Text} from "@mantine/core";
import ProfilePicture from "../../images/profile_picture_adrian.jpeg";
import CertifiedDeveloper from "../../images/certified_developer.png";

export const Introduction = () => {
    const awsCertificateCard = (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Center>
                <Image maw={200} mb={15} src={CertifiedDeveloper} alt="AWS Certified Developer Associate badge"/>
            </Center>
            <Anchor my="xs" weight={500} href="https://www.credly.com/badges/871455c1-14ca-47c2-a2d3-1462a2f976eb" target={"_blank"}>
                AWS Certified Developer – Associate
            </Anchor>
            <Text mt={5} size="sm" color="dimmed">
                Earners of this certification have a comprehensive understanding of application life-cycle
                management. They demonstrated proficiency in writing applications with AWS service APIs, AWS
                CLI, and SDKs; using containers; and deploying with a CI/CD pipeline.
            </Text>
        </Card>
    );

    return (
        <Stack>
            <Image maw={250} mx="auto" radius="xl" src={ProfilePicture} alt="Adrian's profile picture"/>
            <Center maw={700} mx="auto">
                <Text align="center">
                    Software developer experienced in working on international projects in multicultural teams. I am a
                    fast learner developing my skills in Java, cloud, and software architecture-related topics.
                </Text>
            </Center>
            <Divider my="md" label="Open source" labelPosition="center"/>
            <Center maw={700} mx="auto">
                <Text>
                    In my spare time, I contribute to open-source projects:
                </Text>
            </Center>
            <Center maw={700} mx="auto">
                <List>
                    <List.Item>
                        <Anchor href="https://github.com/spring-projects/spring-kafka/pulls?q=is%3Apr+author%3Abreader124" target={"_blank"}>Spring Kafka</Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://github.com/micronaut-projects/micronaut-kafka/pulls?q=is%3Apr+author%3Abreader124" target={"_blank"}>Micronaut Kafka</Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://github.com/micronaut-projects/micronaut-aws/pulls?q=is%3Apr+author%3Abreader124" target={"_blank"}>Micronaut AWS</Anchor>
                    </List.Item>
                </List>
            </Center>
            <Divider my="md" label="Certificates" labelPosition="center"/>
            <SimpleGrid cols={3}>
                {Array.from(Array(1).keys()).map(_ => awsCertificateCard)}
            </SimpleGrid>
        </Stack>
    );
}

export default Introduction;