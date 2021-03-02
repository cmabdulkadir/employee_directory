import React, { Component } from 'react';
import Row from '../Row/Row';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        this.getPeopleData()
    }


    getPeopleData = () => {
        fetch('https://randomuser.me/api/?results=25')
        .then(response => response.json())
        .then(data => this.setState({
            employeeList: data.results
        }));
    }


    render() {
        return (
            <>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeeList.map((employee, index) => {
                                return (
                                    <>
                                        <Row 
                                            count = {index + 1}
                                            firstName = {employee.name.first}
                                            lastName = {employee.name.last}
                                            email = {employee.email}
                                            phone = {employee.phone}
                                        />
                                    </>
                                )
                            })
                        }
                    </tbody>
                    </table>
            </>
        );
    }
}

export default Table;