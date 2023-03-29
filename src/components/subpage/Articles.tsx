import {Anchor, Badge, Button, Popover, Stack, Table} from "@mantine/core";

const elements = [
    {
        title: {
            name: "Be careful when building your CQRS read model using domain events",
            link: "https://medium.com/stepstone-tech/be-careful-when-building-your-cqrs-read-model-using-domain-events-4c1916163c7e"
        },
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi lacus, faucibus quis tincidunt ut, vulputate at magna. Donec ullamcorper vitae lorem in gravida. Vestibulum pretium risus vel hendrerit lacinia. Phasellus sed eros velit. Maecenas rutrum risus at sagittis efficitur. Quisque turpis felis, tristique eu enim ut, imperdiet luctus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras finibus, magna consectetur rutrum ullamcorper, odio justo volutpat ex, fermentum tempus tortor leo at risus. Proin pellentesque risus et dui pellentesque ornare. Etiam ornare mi in scelerisque lacinia. Mauris consequat commodo imperdiet.",
        publishedIn: 'StepStone Tech Blog',
        publishedOn: 'Jan 19, 2023',
        tags: ["Software Architecture", "Event Driven Architecture", "CQRS", "Microservices", "Technology"]
    },
    {
        title: {
            name: "How to pass param from Terraform to AWS ECS-powered app?",
            link: "https://medium.com/stepstone-tech/how-to-pass-param-from-terraform-to-aws-ecs-powered-app-b9ecfc2c260e"
        },
        abstract: "Suspendisse at nisl et dui iaculis cursus. Suspendisse vel erat in turpis aliquet bibendum eu et ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo massa, congue eu aliquam et, porttitor sed ex. Proin accumsan id mauris at fermentum. Fusce eros augue, egestas sit amet massa a, congue congue magna. Cras venenatis felis ut venenatis pretium. Mauris et urna nunc. Nam sed dui sed diam tempor pellentesque. Suspendisse potenti. In lectus risus, bibendum sit amet ornare ut, aliquet sed velit. Mauris eu leo ut enim vulputate bibendum. Ut laoreet pharetra interdum.",
        publishedIn: 'StepStone Tech Blog',
        publishedOn: 'Aug 2, 2022',
        tags: ["Terraform", "Micronaut", "Java", "Spring", "Technology"]
    },
    {
        title: {
            name: "How to start contributing to and what to expect from open-source projects?",
            link: "https://medium.com/stepstone-tech/how-to-start-contributing-to-and-what-to-expect-from-open-source-projects-93dc9eeac78d"
        },
        abstract: "Aenean nibh enim, pharetra et fringilla vitae, dignissim et tortor. Mauris vehicula eros vel mi aliquet, posuere accumsan lorem sodales. Aliquam dictum, leo in mollis bibendum, sem erat ultricies orci, sit amet molestie elit ligula nec massa. Maecenas non augue et tortor commodo mattis. In ultricies nisi et felis bibendum, vel dapibus dui lobortis. Curabitur non auctor nunc. Pellentesque accumsan ante in tellus finibus, ac aliquam est pretium. Nunc neque sapien, malesuada eu viverra a, congue eu nibh. In quis aliquet libero. Fusce pharetra mi ut malesuada dapibus.",
        publishedIn: 'StepStone Tech Blog',
        publishedOn: 'Jul 13, 2022',
        tags: ["Open Source", "Contribution", "Software Development", "Engineering", "Technology"]
    }
];

export const Articles = () => {
    const rows = elements.map((element) => (
        <tr key={element.title.name}>
            <td>
                <Anchor weight={500} href={element.title.link} target={"_blank"}>{element.title.name}</Anchor>
            </td>
            <td>
                <Popover width={'50%'} position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <Button>Show abstract</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        {element.abstract}
                    </Popover.Dropdown>
                </Popover>
            </td>
            <td>{element.publishedIn}</td>
            <td>{element.publishedOn}</td>
            <td>
                <Stack spacing={"xs"}>
                    {element.tags.map(t => <Badge key={t}>{t}</Badge>)}
                </Stack>
            </td>
        </tr>
    ));

    return (
        <Table horizontalSpacing={"md"} verticalSpacing={"lg"}>
            <thead>
            <tr>
                <th>Title</th>
                <th>Abstract</th>
                <th>Published in</th>
                <th>Published on</th>
                <th>Tags</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
}

export default Articles;