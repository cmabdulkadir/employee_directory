import React, { Component } from "react";
import Row from "../Row/Row";
import Search from "../Search/Search"

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      displayedList: []
    };

    this.sortByProperty = () => {
      function compare(a, b) {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0;
      }

      let sortedEmployeeList = this.state.employeeList;

      sortedEmployeeList.sort(compare);

      //this is changing the state live in real time
      this.setState({
        displayedList: sortedEmployeeList,
      });
    };

    this.filterByProperty = (keyword) => {
      function filter(a) {
        return a.name.last.includes(keyword)
      }

      let filteredEmployeeList = this.state.employeeList.filter(filter);

      //this is changing the state live in real time
      this.setState({
        displayedList: filteredEmployeeList,
      });
    };
  };

  componentDidMount() {
    this.getPeopleData();
    console.log(this.state.employeeList);
  }

  getPeopleData = () => {
    fetch("https://randomuser.me/api/?results=25")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          employeeList: data.results,
          displayedList: data.results
        });

        console.log(this.state.employeeList);
      });
  };

  render() {
    return (
      <>
      <Search filterByProperty={this.filterByProperty}/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th id="first" scope="col">
                First
              </th>
              <th id="last" onClick={this.sortByProperty} scope="col">
                Last
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedList.map((employee, index) => {
              return (
                <>
                  <Row
                    count={index + 1}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    email={employee.email}
                    phone={employee.phone}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
