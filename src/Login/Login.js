import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import { Route } from 'react-router-dom';
import Error from './Error';


class Login extends Component {
    state = {
        username: '',
        password: '',
        formState: true,
        errorMsg: "Credentials invalid",

    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.username, " ", this.state.password, this.props.login)
        if (this.state.username === this.props.login.username && this.state.password === this.props.login.password) {
            this.props.userLogin(this.state);
            this.props.history.push("/employeeList");
        }
        else {
            this.setState({ formState: false });
            this.callMethod();


        }
    };

    callMethod = () => {
        this.props.history.replace('/login/error');
    }

    render() {

        let form = (
            <form onSubmit={e => this.onSubmit(e)} >
                <label> Username</label>
                <input
                    className={styles.Input}
                    name='username'
                    type='text'
                    placeholder='Username'
                    onChange={e => this.change(e)} />
                <br />
                <label> Password </label>
                <input
                    className={styles.Input}
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={e => this.change(e)} />
                <br />
                <button className={styles.Button}> submit</button>
            </form>
        )


        return (
            <div>
                <div className={styles.Login}>
                    {form}
                </div>


                <Route path={this.props.match.url + '/error'} component={Error} />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        login: state.login,
        isLoggedIn: state.isLoggedIn,
        name: state.login.username,
        pass: state.login.password,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        userLogin: (loginObject) => dispatch({ type: 'AUTH_LOGIN', loginObject: loginObject }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
