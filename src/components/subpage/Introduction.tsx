import {Anchor, Card, Center, Divider, Image, List, SimpleGrid, Stack, Text} from "@mantine/core";
import ProfilePicture from "../../images/profile_picture_adrian.jpeg";
import CertifiedDeveloper from "../../images/certified_developer.png";

const openSourceItems = [
    {
        name: "Spring Kafka",
        link: "https://github.com/spring-projects/spring-kafka/pulls?q=is%3Apr+author%3Abreader124"
    },
    {
        name: "Micronaut Kafka",
        link: "https://github.com/micronaut-projects/micronaut-kafka/pulls?q=is%3Apr+author%3Abreader124"
    },
    {
        name: "Micronaut AWS",
        link: "https://github.com/micronaut-projects/micronaut-aws/pulls?q=is%3Apr+author%3Abreader124"
    }
]

const awsCertificateCard = (n: number) => (
    <Card shadow="sm" padding="lg" radius="md" withBorder key={n}>
        <Center>
            <Image maw={200} mb={15} src={CertifiedDeveloper} alt="AWS Certified Developer Associate badge"/>
        </Center>
        <Anchor my="xs" weight={500} href="https://www.credly.com/badges/871455c1-14ca-47c2-a2d3-1462a2f976eb"
                target={"_blank"}>
            AWS Certified Developer – Associate
        </Anchor>
        <Text mt={5} size="sm" color="dimmed">
            Earners of this certification have a comprehensive understanding of application life-cycle
            management. They demonstrated proficiency in writing applications with AWS service APIs, AWS
            CLI, and SDKs; using containers; and deploying with a CI/CD pipeline.
        </Text>
    </Card>
);

export const Introduction = () => {
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
                    {openSourceItems.map(item => (
                        <List.Item key={item.name}>
                            <Anchor
                                href={item.link}
                                target={"_blank"}>{item.name}</Anchor>
                        </List.Item>
                    ))}
                </List>
            </Center>
            <Divider my="md" label="Certificates" labelPosition="center"/>
            <SimpleGrid cols={3}>
                {Array.from(Array(1).keys()).map(n => awsCertificateCard(n))}
            </SimpleGrid>
        </Stack>
    );
}

export default Introduction;