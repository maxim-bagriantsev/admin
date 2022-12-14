import {Layout} from 'react-admin';
import * as React from "react";
import {MyAppBar} from "./MyAppBar/MyAppBar";
import {MySidebar} from "./MySidebar/MySidebar";
import Error404 from "../../pages/404";
import Menu from "../../Menu";

type MyLayout = {

}

const MyLayout = (props: MyLayout) => {

    return (
        <Layout
            {...props}
            appBar={MyAppBar}
            sidebar={MySidebar}
            error={Error404}
            menu={Menu}
        />
    )
}

export default MyLayout;