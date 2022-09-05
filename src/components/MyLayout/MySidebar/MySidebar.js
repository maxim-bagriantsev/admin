import * as React from 'react';
//
// import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, LocalAtm, Assessment, Drafts, Feedback, Forum, Work, Receipt, PieChart } from "@material-ui/icons";
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

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
//
// const SideBar = () => {
//     return (
//         <SidebarContainer>
//             <SidebarWrapper>
//                 <SidebarMenu>
//                     <SidebarTitle>Dashboard</SidebarTitle>
//                     <SidebarList>
//                         <SidebarListItem>
//                             <MyLineStyle />
//                             Home
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyTimeline />
//                             Analytics
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyTrendingUp />
//                             Sales
//                         </SidebarListItem>
//                     </SidebarList>
//                 </SidebarMenu>
//                 <SidebarMenu>
//                     <SidebarTitle>All Menu</SidebarTitle>
//                     <SidebarList>
//                         <SidebarListItem>
//                             <MyPermIdentity />
//                             Users
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyStorefront />
//                             Products
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyAssessment />
//                             Reports
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyLocalAtm />
//                             Transactions
//                         </SidebarListItem>
//                     </SidebarList>
//                 </SidebarMenu>
//                 <SidebarMenu>
//                     <SidebarTitle>Connect</SidebarTitle>
//                     <SidebarList>
//                         <SidebarListItem>
//                             <MyDrafts />
//                             Mail
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyFeedback />
//                             Feedback
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyForum />
//                             Messages
//                         </SidebarListItem>
//                     </SidebarList>
//                 </SidebarMenu>
//                 <SidebarMenu>
//                     <SidebarTitle>Employees</SidebarTitle>
//                     <SidebarList>
//                         <SidebarListItem>
//                             <MyWork />
//                             Manage
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyPieChart />
//                             Analytics
//                         </SidebarListItem>
//                         <SidebarListItem>
//                             <MyReceipt />
//                             Reports
//                         </SidebarListItem>
//                     </SidebarList>
//                 </SidebarMenu>
//             </SidebarWrapper>
//         </SidebarContainer>
//     )
// }
// export default SideBar