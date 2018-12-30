import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import NestedListItem from './NestedListItem';

import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import TvIcon from '@material-ui/icons/Tv';
import DashboardIcon from '@material-ui/icons/Dashboard';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class NestedList extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">

                    <NestedListItem
                        icon={DashboardIcon}
                        listItemText={"Admin Panel"}
                        nestedClassName={classes.nested}
                        reactTo='admin-panel'
                        reduxTo='admin-panel-redux' />

                    <NestedListItem
                        icon={AddIcon}
                        listItemText={"Counter"}
                        nestedClassName={classes.nested}
                        reactTo='counter'
                        reduxTo='counter-redux' />

                    <NestedListItem
                        icon={ListIcon}
                        listItemText={"Todo List"}
                        nestedClassName={classes.nested}
                        reactTo='todo-list'
                        reduxTo='todo-list-redux' />

                    <NestedListItem
                        icon={TvIcon}
                        listItemText={"Movie Store"}
                        nestedClassName={classes.nested}
                        reactTo='movie-store'
                        reduxTo='movie-store-redux' />

                </List>
            </div >
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);