import React, {Component}   from 'react'
import PropTypes            from 'prop-types';
import { withStyles }       from 'material-ui/styles';
import AppBar               from 'material-ui/AppBar';
import Toolbar              from 'material-ui/Toolbar';
import Typography           from 'material-ui/Typography';
import IconButton           from 'material-ui/IconButton';
import MenuIcon             from 'material-ui-icons/Menu';


class main extends Component {

    render(){
        return(
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <IconButton color='inherit' 
                                aria-label='Menu'
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant= 'title' color='inherit'>
                        Super Promociones Acayucan
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default main