import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'native-base';

import ExpensesPage from '../Components/ExpensesPage';

import * as action from '../store/actions/expenses';

class Expenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            description: '',
            child: null,
            modalVisible: false,
        }
    }

    inputChange = (target, value) => {
        this.setState({ [target]: value })
    }

    setModalVisible = (visible) => {
        if (!this.state.child) {
            return Toast.show({
                text: "please choose child",
                buttonText: "Okay",
                duration: 5000
            })
        }
        this.setState({ modalVisible: visible });
    }

    addExpense = () => {
        const {price, description, child} = this.state;
        console.log('addExpense', child)
        const data = {
            parent_id: this.props.user.data.activeUser.id,
            child_id: child,
            description: description,
            expenses: price,
            family_id: this.props.user.data.activeUser.family_id
        }
        this.props.addExpense(data, this.props.user.data.token)
        this.setState({price: '', description: '', modalVisible: false})
    }

    changeChild = (id) => {
        this.props.getExpenses({child_id: id}, this.props.user.data.token)
        this.setState({ child: id })
    }

    render() {
        console.log('user', this.props.expenses)
        return (
            <ExpensesPage
                childs={this.props.user.data.family.childs}
                addExpense={this.addExpense}
                changeChild={this.changeChild}
                price={this.state.price}
                description={this.state.description}
                child={this.state.child}
                modalVisible={this.state.modalVisible}
                setModalVisible={this.setModalVisible} 
                inputChange={this.inputChange}
                expenses={this.props.expenses.data}
                disable={this.props.expenses.disable}/>
        )
    }
}

mapStateToProps = (state) => {
    return {
        user: state.user,
        expenses: state.expenses
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (data, token) => {
            action.addExpense(dispatch, data, token)
        },
        getExpenses: (data, token) => {
            action.getExpenses(dispatch, data, token)
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Expenses)