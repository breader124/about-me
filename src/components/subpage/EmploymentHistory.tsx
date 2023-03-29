import {Text, Timeline} from "@mantine/core";
import {MoodBoy, MoodKid, Sunglasses} from 'tabler-icons-react';

const timelineItems = [
    {
        title: "Junior Java Developer [Artur Jackowski's Research Center]",
        getIcon: () => <MoodKid size={24}/>,
        dateRange: "Feb 2019 - Aug 2019"
    },
    {
        title: "Junior Java Developer [BEC Poland]",
        getIcon: () => <MoodKid size={24}/>,
        dateRange: "Jun 2020 - May 2021"
    },
    {
        title: "Software Engineer [BEC Poland]",
        getIcon: () => <MoodBoy size={24}/>,
        dateRange: "May 2021 - Nov 2021"
    },
    {
        title: "Java Developer [StepStone]",
        getIcon: () => <MoodBoy size={24}/>,
        dateRange: "Nov 2021 - Jan 2023"
    },
    {
        title: "Senior Java Developer [StepStone]",
        getIcon: () => <Sunglasses size={24}/>,
        dateRange: "Jan 2023 - present"
    },
]

export const EmploymentHistory = () => {
    return (
        <Timeline bulletSize={36} lineWidth={2}>
            {timelineItems.map(item => (
                <Timeline.Item bullet={item.getIcon()} title={item.title} key={item.title}>
                    <Text color="dimmed" size="sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum libero vitae nibh
                        mollis, in dictum elit maximus. Etiam id risus tristique, pharetra ipsum dapibus, dignissim
                        felis. Donec eros dolor, dignissim eget suscipit in, vulputate id turpis. Morbi nec nulla ac
                        dolor varius faucibus. Vivamus eget nibh sit amet augue placerat vehicula tempus id tellus.
                        Phasellus eget sem suscipit, volutpat urna id, vehicula ex. Maecenas in erat porttitor,
                        faucibus
                        ante ac, pharetra odio. Duis facilisis convallis libero, at feugiat ligula euismod ut.
                        Aenean
                        aliquam semper ullamcorper. Etiam sit amet posuere augue. Donec nec dui in libero aliquam
                        porttitor a non augue. Donec blandit lacinia lorem et fermentum. Morbi posuere magna vitae
                        justo
                        suscipit pretium.
                    </Text>
                    <Text size="xs" mt={4}>{item.dateRange}</Text>
                </Timeline.Item>
            ))}
        </Timeline>
    );
}

export default EmploymentHistory;