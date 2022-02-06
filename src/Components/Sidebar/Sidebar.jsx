import { React } from "react"
import { NavLink } from "react-router-dom"
import { Container } from "./Style";
import { ReactComponent as Logo } from "../../Assets/icons/fitness-logo.svg";
import { sidebar } from "../../Utils/sidebar";
const Sidebar = () => {
    return (
        <Container>
            <div className="logo">
                <Logo />
                <p style={{ margin: "0" }}>My Fitness</p>

            </div>
            {sidebar.map(({ id, title, pathname, Icon, size }) => (
                <NavLink to={pathname} className="align__center menu__item" key={id}>
                    <Icon color="#84818A" className="icon" />
                    <p className="text">{title}</p>
                </NavLink>
            ))}
        </Container>
    )
}

export default Sidebar;