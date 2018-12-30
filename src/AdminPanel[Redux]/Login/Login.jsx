import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../Store/actions';
import './Login.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        //props.setLoginRedirectPath(props.location.state && props.location.state.redirect);
    }

    componentWillUpdate() {
        //this.props.setLoginRedirectPath(this.props.location.state && this.props.location.state.redirect);
    }

    onLoginHandler = (e) => {
        e.preventDefault();
        this.props.onLogin(e.target.elements.username.value, e.target.elements.password.value);
    }

    redirect = () => {
        this.props.history.push(this.props.location.state && this.props.location.state.redirect);
    }

    render() {
        return (
            <div className="login-form">
                <form className="form-horizontal"
                    onSubmit={(e) => {
                        this.onLoginHandler(e);
                        if (this.props.isAuthenticated)
                            this.redirect();
                    }}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="glyphicon glyphicon-user"></i>
                            </span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="glyphicon glyphicon-lock"></i>
                            </span>
                            <input type="password" className="form-control" name="password" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary login-btn btn-block">Log in</button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.loggedIn,
        loginRedirectPath: state.loginRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username, password) => dispatch(actions.login(username, password)),
        setLoginRedirectPath: (path) => dispatch(actions.setLoginRedirectPath(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);