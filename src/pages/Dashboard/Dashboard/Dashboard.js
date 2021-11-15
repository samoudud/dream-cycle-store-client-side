import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import AddReview from '../AddReview/AddReview';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { logOut, admin, user } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    if (!user?.email) {
        return <><CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" /></>
    }

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Dream Bicycle Store
                </Typography>
            </Toolbar>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to='/'><Button color="inherit">
                <HomeIcon />
                Home</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}`}><Button color="inherit"><DashboardIcon /> Dashboard</Button></Link>
            <Divider />
            {
                !admin ?
                    <Box>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}><Button color="inherit"><PaymentTwoToneIcon /> Pay</Button></Link>
                        <Divider />
                        <Link style={{ textDecoration: 'none' }} to={`${url}/myOrder`} ><Button color="inherit"><ShoppingBasketIcon /> My Orders</Button></Link>
                        <Divider />
                        <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`} ><Button color="inherit"><RateReviewTwoToneIcon /> Add Review</Button></Link>

                    </Box>
                    :
                    <Box>

                        <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}><Button color="inherit"><ShoppingBasketIcon />  Manage Orders</Button></Link>
                        <Divider />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`} ><Button color="inherit"><ProductionQuantityLimitsIcon /> Add Product</Button></Link>
                        <Divider />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`} ><Button color="inherit"><AdminPanelSettingsTwoToneIcon />Make Admin</Button></Link>
                        <Divider />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/manageProduct`} ><Button color="inherit"><ManageAccountsTwoToneIcon /> Manage Products</Button></Link>

                    </Box>
            }

            <Divider />
            <Box>
                <Button sx={{ color: 'blue' }} onClick={logOut} color="inherit"><LoginTwoToneIcon /> Log Out</Button>

            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ background: '#1B3E41' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>

                    {/* Admin Routes */}

                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
