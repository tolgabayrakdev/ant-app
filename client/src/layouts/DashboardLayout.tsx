import { Link, Outlet } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, Space, theme } from "antd";
import { useState } from "react";
import { DownOutlined } from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

const items: any = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <Link to="settings">Settings</Link>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: 'Log out',
        key: '3',
    },
];

export default function DashboardLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <section>
            <Layout className="h-screen overflow-auto">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <p className="text-center text-white mt-3">AntApp</p>
                    <div className="demo-logo-vertical mt-12" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        className="flex justify-between"
                        style={{
                            padding: 0,
                            background: colorBgContainer,

                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Dropdown
                        className="mr-8"
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                Tolga BAYRAK

                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </section>

    )
}