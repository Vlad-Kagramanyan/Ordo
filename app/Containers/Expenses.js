import React, { Component } from 'react';
import ExpensesPage from '../Components/ExpensesPage';

class Expenses extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }

    render() {
        return (
            <ExpensesPage/>
        )
    }
}

export default Expenses;