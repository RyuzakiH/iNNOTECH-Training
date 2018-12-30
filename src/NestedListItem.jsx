import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import Wrapper from './Wrapper';

class NestedListItem extends React.Component {

    state = { open: false };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        return (
            <Wrapper>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <this.props.icon />
                    </ListItemIcon>
                    <ListItemText inset primary={this.props.listItemText} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <NavLink to={this.props.reactTo} style={{ textDecoration: 'none' }}>
                            <ListItem button className={this.props.nestedClassName}>
                                <ListItemText inset primary="React" />
                            </ListItem>
                        </NavLink>
                        <NavLink to={this.props.reduxTo} style={{ textDecoration: 'none' }}>
                            <ListItem button className={this.props.nestedClassName}>
                                <ListItemText inset primary="Redux" />
                            </ListItem>
                        </NavLink>
                    </List>
                </Collapse>
            </Wrapper >
        );
    }
}

export default NestedListItem