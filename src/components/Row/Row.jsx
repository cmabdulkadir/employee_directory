import React, { Component } from 'react';

class Row extends Component {
    render() {
        return (
            <>
                <tr>
                        <th scope="row">{this.props.count}</th>
                        <td>{this.props.firstName}</td>
                        <td>{this.props.lastName}</td>
                        <td>{this.props.email}</td>
                        <td>{this.props.phone}</td>
                    </tr>
                        
            </>
        );
    }
}

export default Row;