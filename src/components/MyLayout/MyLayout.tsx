import {Layout} from 'react-admin';
import * as React from "react";
import {MyAppBar} from "./MyAppBar/MyAppBar";
import {MySidebar} from "./MySidebar/MySidebar";
import Error404 from "../../pages/404";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    myLayout: {
        backgroundColor: 'red'
    },

});

const MyLayout = (props: any) => {
    const classes = useStyles();

    return (
        <Layout
            {...props}
            appBar={MyAppBar}
            sidebar={MySidebar}
            error={Error404}
            className={classes.myLayout}
        />
    )
}

export default MyLayout;