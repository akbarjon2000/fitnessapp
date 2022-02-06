import { MdInsertChart, MdTrendingUp, MdRestore, MdSettings } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { GiStrongMan } from "react-icons/gi"
// COMPONENTS:
import Generic from "../Pages/Generic"
import Equipment from "../Components/Equipment/Equipment"

export const sidebar = [
    {
        id: 1,
        title: "Equipment",
        pathname: "/Equipment",
        child: [],
        Component: Equipment,
        hidden: false,
        Icon: GiStrongMan,
        size: 30
    },
    {
        id: 2,
        title: "Members",
        pathname: "/Members",
        child: [],
        Component: Generic,
        hidden: false,
        Icon: FaUsers,
    }, {
        id: 3,
        title: "Products",
        pathname: "/Products",
        child: [],
        Component: Generic,
        hidden: false,
        Icon: MdInsertChart,
    }, {
        id: 4,
        title: "Payments",
        pathname: "/Payments",
        child: [],
        Component: Generic,
        hidden: false,
        Icon: MdTrendingUp,
    }, {
        id: 5,
        title: "Attendance",
        pathname: "/Attendance",
        child: [],
        Component: Generic,
        hidden: false,
        Icon: MdRestore,
    },
    {
        id: 6,
        title: "Settings",
        pathname: "/Settings",
        child: [],
        Component: Generic,
        hidden: false,
        Icon: MdSettings,
    },

]