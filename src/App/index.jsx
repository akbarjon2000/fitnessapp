import React, { useState } from 'react';
import { NavLink, Routes, Route } from "react-router-dom"
import "../index.css"
import "antd/dist/antd.css"
import { Layout, Menu } from "antd";
import { Container } from './AppStyle';
//ICONS:
import { ReactComponent as Logo } from "../Assets/icons/fitness-logo.svg";
import { MdDashboard } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai"
import { BsEnvelopeFill } from "react-icons/bs"
import { FaUserFriends } from "react-icons/fa";
import { sidebar } from '../Utils/sidebar';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
    const [background, setBackground] = useState(false)

    return (
        <Container background={background}>
            <Layout style={{ backgroundColor: "white" }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="80"
                    width="250"
                    className="custom-sidebar sider"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}

                >
                    <div className="logo">
                        <Logo />
                        <p style={{ margin: "0" }} className="logo__text">My Fitness</p>
                    </div>

                    <Menu className="menu" mode="inline" defaultSelectedKeys={['4']}>
                        {sidebar.map(({ id, title, pathname, Icon }) => (
                            <NavLink to={pathname} className="align__center menu__item" key={id}>
                                <Icon color="#84818A" className="icon" />
                                <p className="text">{title}</p>
                            </NavLink>
                        ))}
                    </Menu>
                </Sider>
                <Layout style={{ width: "fit-content", backgroundColor: "white", padding: "0" }}>
                    <Header className="site-layout-sub-header-background align__center header" style={{ padding: 0 }}>
                        <BiSearchAlt2 size={24} color="#84818A" />
                        <AiFillBell size={24} color="#84818A" />
                        <BsEnvelopeFill size={24} color="#84818A" />
                        <div className='userDiv'>
                            <div></div>
                            <div>

                            </div>
                        </div>
                    </Header>
                    <Content>
                        <div className="site-layout-background content" style={{ minHeight: 360 }}>
                            <Routes>
                                {
                                    sidebar.map(({ id, pathname, Component }) => (
                                        <Route key={id} path={pathname} element={<Component />} />
                                    ))
                                }
                                <Route path="*" element={<h1>404 Not Found</h1>} />
                            </Routes>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Container >
    )
}

export default App;
