import React from 'react';
import utils from '../../utils'
import './Login.css'

const Login = (props) => {

    let onLoginHandler = (e) => {

        e.preventDefault();

        if (utils.isObject(props.db.find(emp =>
            emp.userName.toLowerCase() === e.target.elements.username.value.toLowerCase() &&
            emp.password.toLowerCase() === e.target.elements.password.value.toLowerCase())))
            props.onLoginSuccess();
    }

    return (
        <div className="login-form">
            <form className="form-horizontal" onSubmit={onLoginHandler}>
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
};

export default Login;