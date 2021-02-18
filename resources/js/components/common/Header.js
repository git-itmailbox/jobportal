import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        marginBottom: '20px',
    },
}))

function Header() {
    const classes = useStyles()

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
                <Typography style={appNameStyle} variant="h6">
                    Job Portal
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header

const appNameStyle = {
    flexGrow: 1,
}
