import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navigation = (props) => {
    const { user, logOut, admin } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to='explore'><Button color="inherit">Explore</Button>
                </NavLink>
            </MenuItem>
            {
                user.email ?
                    <>
                        {
                            !admin && <MenuItem>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to='dashboard'><Button color="inherit">Dashboard</Button>
                                </NavLink>
                            </MenuItem>

                        }
                        <MenuItem>
                            <Button onClick={logOut}>Log Out</Button>
                        </MenuItem>
                    </>
                    :
                    <MenuItem>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'><Button color="inherit">Login</Button>
                        </NavLink>
                    </MenuItem>
            }

        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, pb: 1 }}>
            <AppBar
                style={{ background: '#1B3E41' }}
                position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Dream Bicycle
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {
                            !admin && <NavLink
                                style={{ textDecoration: 'none', color: 'white' }}
                                to='explore'><Button color="inherit">Explore</Button>
                            </NavLink>
                        }
                        {
                            user.email ?
                                <>
                                    <NavLink
                                        style={{ textDecoration: 'none', color: 'white' }}
                                        to='dashboard'><Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button style={{ color: 'white' }} onClick={logOut}>Log Out</Button>
                                </>
                                :
                                <NavLink
                                    style={{ textDecoration: 'none', color: 'white' }}
                                    to='/login'><Button color="inherit">Login</Button>
                                </NavLink>
                        }

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default Navigation;
