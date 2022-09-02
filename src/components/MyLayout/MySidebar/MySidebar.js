import * as React from 'react';
import { Sidebar } from 'react-admin';

export const MySidebar = (props) => (
    <Sidebar
        sx={{
            "& .RaSidebar-drawerPaper": {
                backgroundColor: "red",
            },
        }}
        {...props}
    />
);