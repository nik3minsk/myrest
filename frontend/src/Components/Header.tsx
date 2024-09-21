import React from "react";
import {AppShell, Burger, Center, Container, Group, Menu} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

const links = [
    { link: '/about', label: 'Features' },
    {
        link: '#1',
        label: 'Learn',
        links: [
            { link: '/docs', label: 'Documentation' },
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { link: '/about', label: 'About' },
    { link: '/pricing', label: 'Pricing' },
    {
        link: '#2',
        label: 'Support',
        links: [
            { link: '/faq', label: 'FAQ' },
            { link: '/demo', label: 'Book a demo' },
            { link: '/forums', label: 'Forums' },
        ],
    },
];


const Header = (): React.JSX.Element => {
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span >{link.label}</span>
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={".link"}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });
    return(
        <AppShell.Header className={".header"}>
            <Container size="md">
                <div className={".inner"}>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </AppShell.Header>
    )
}
export default Header