import {Text, Timeline} from "@mantine/core";
import {MoodBoy, MoodKid, Sunglasses} from 'tabler-icons-react';

export const EmploymentHistory = () => {
    return (
        <Timeline bulletSize={36} lineWidth={2}>
            <Timeline.Item bullet={<MoodKid size={24}/>} title="Junior Java Developer [Artur Jackowski's Research Center]">
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
                <Text size="xs" mt={4}>Feb 2019 - Aug 2019</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<MoodKid size={24}/>} title="Junior Java Developer [BEC Poland]">
                <Text color="dimmed" size="sm">
                    Phasellus varius turpis sed ullamcorper molestie. Fusce viverra sed nisi et pharetra. Etiam in
                    semper erat. Nulla lectus ligula, gravida ac turpis sed, luctus rhoncus metus. Nullam in diam
                    vel nulla viverra scelerisque. Cras ac ornare nisl. Cras sit amet pellentesque risus. In hac
                    habitasse platea dictumst. Curabitur pulvinar convallis sapien. Integer at lacinia ante. Fusce
                    ullamcorper pulvinar metus, quis sollicitudin risus molestie molestie. Integer eu leo risus.
                    Cras bibendum, odio et facilisis egestas, arcu eros euismod metus, sed placerat dolor augue vel
                    ex.
                </Text>
                <Text size="xs" mt={4}>Jun 2020 - May 2021</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<MoodBoy size={24}/>} title="Software Engineer [BEC Poland]">
                <Text color="dimmed" size="sm">
                    Suspendisse tortor est, sollicitudin eget consequat sed, porttitor sed risus. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nec
                    vestibulum turpis. Etiam rhoncus quam quam, varius imperdiet elit faucibus et. Fusce at varius
                    augue. Morbi tempus elementum ex vel tempor. Nam metus orci, tempor at ligula a, imperdiet
                    dapibus enim. Sed aliquam condimentum massa, quis tristique dui condimentum in. Phasellus risus
                    orci, molestie consectetur hendrerit a, semper imperdiet sem. Curabitur purus felis, venenatis
                    et nulla ac, viverra eleifend sapien. Phasellus fermentum, quam in ullamcorper condimentum,
                    augue urna fermentum justo, sit amet interdum urna turpis at eros. Sed fermentum velit sem, at
                    efficitur justo aliquet non. Ut ut mattis lorem, quis tincidunt enim. Mauris id ipsum lacus.
                </Text>
                <Text size="xs" mt={4}>May 2021 - Nov 2021</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<MoodBoy size={24}/>} title="Java Developer [StepStone]">
                <Text color="dimmed" size="sm">
                    Sed ornare odio est, a laoreet libero scelerisque at. Phasellus mattis rutrum elit, a vehicula
                    libero sagittis vitae. In hac habitasse platea dictumst. Fusce enim nulla, porttitor sed rhoncus
                    vel, porta nec dui. Phasellus volutpat velit et sodales interdum. Nullam a purus porta,
                    tristique nisl eu, facilisis lorem. Mauris commodo nulla non dui pretium faucibus. Sed id
                    venenatis lacus. Integer vitae dolor ligula. Mauris ac sem finibus, vestibulum ante vel, tempus
                    neque. Sed laoreet ullamcorper lorem. Donec vel metus eu mauris elementum euismod sit amet vitae
                    urna. Curabitur non mattis quam, vitae condimentum massa. Integer hendrerit gravida nulla, et
                    vulputate metus. Suspendisse vestibulum enim non nibh ultricies, ac commodo tellus aliquam.
                    Donec blandit semper est eu volutpat.
                </Text>
                <Text size="xs" mt={4}>Nov 2021 - Jan 2023</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<Sunglasses size={24}/>} title="Senior Java Developer [StepStone]">
                <Text color="dimmed" size="sm">
                    Proin dolor mi, feugiat vel sapien placerat, lobortis luctus urna. Curabitur congue iaculis
                    volutpat. Nunc ultrices ligula et turpis sodales, nec consequat tellus faucibus. Integer sit
                    amet sapien nec erat scelerisque auctor facilisis et nibh. Etiam arcu enim, feugiat eu fringilla
                    a, gravida id tortor. Ut et ligula nec nisi aliquet efficitur. Duis fermentum mauris condimentum
                    elit ullamcorper, eget molestie velit eleifend. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Nulla ac magna vel odio sagittis bibendum. Nunc eget
                    elementum massa, vel fringilla augue. Etiam dignissim magna nec turpis malesuada, sit amet
                    faucibus nisl egestas.
                </Text>
                <Text size="xs" mt={4}>Jan 2023 - present</Text>
            </Timeline.Item>
        </Timeline>
    );
}

export default EmploymentHistory;