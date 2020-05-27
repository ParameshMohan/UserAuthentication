import React, { Component } from 'react';

import { connect } from 'react-redux';
import styles1 from './EmployeeList.module.css';

class EmployeeList extends Component {
    componentWillMount() {
        // console.log(this.props)
        if (this.props.isLoggedIn === false) {
            this.props.history.push("/login");
        }

    }
    generateData = () => {
        let tableData = this.props.user;
        let res = [];

        for (let i = 0; i < tableData.length; i++) {
            res.push(
                <tr key={i}>
                    <td key={tableData[i].id}>{tableData[i].id}</td>
                    <td key={tableData[i].name}>{tableData[i].name}</td>
                    <td key={tableData[i].age}>{tableData[i].age}</td>
                    <td key={tableData[i].gender}>{tableData[i].gender}</td>
                    <td key={tableData[i].email}>{tableData[i].email}</td>
                    <td key={tableData[i].phoneNo}>{tableData[i].phoneNo}</td>
                </tr>
            )
        }
        return res;
    }

    logoutFunc = () => {
        this.props.authLogout();
        this.props.history.push("/login");

    }

    render() {
        return (
            <div>

                <table className={styles1.table} >
                    <thead className={styles1.thead}>
                        <tr>
                            <th>Id</th>
                            <th> Name</th>
                            <th>Age</th>
                            <th> Gender</th>
                            <th>email</th>
                            <th> phoneNo</th>
                        </tr>
                    </thead>
                    <tbody className={styles1.tbody}>
                        {
                            this.generateData()
                        }
                    </tbody>
                </table>
                <button onClick={this.logoutFunc} className={styles1.Button}> Logout </button>
            </div>

        )

    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    };

};

const mapDispatchToProps = dispatch => {
    return {
        authLogout: () => dispatch({ type: 'AUTH_LOGOUT' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);