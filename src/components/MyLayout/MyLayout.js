import { Layout} from 'react-admin';
import * as React from "react";
import {MyAppBar} from "./MyAppBar/MyAppBar";
import {MySidebar} from "./MySidebar/MySidebar";

const MyLayout = props => <Layout
    {...props}
    appBar={MyAppBar}
    sidebar={MySidebar}
/>;

export default MyLayout;