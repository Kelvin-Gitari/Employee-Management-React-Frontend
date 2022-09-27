import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import Table from 'react-bootstrap/Table';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []

        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount() {

        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })

        });
    }

    addEmployee(){
        this.props.history.push("/add-employees");
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className = "row">
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className='row'>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee  Email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>

                                    </tr>
                                )
                            }
                        </tbody>

                    </Table>

                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;