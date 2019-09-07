import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions'
import { ListItem } from './ListItem';

export class List extends Component {
    state = {
        showForm: false,
        formValue: ""
    }

    inputChange = e => {
        this.setState({formValue: e.target.value});
    }

    formSubmit = e => {
        const { formValue } = this.state;
        const { addTodo } = this.props;

        e.preventDefault();
        addTodo({title: formValue});
        this.setState({formValue: ""});
    }

    renderForm = () => {
        const { showForm, formValue } = this.state;
        if(showForm){
            return (
                <div>
                    <form onSubmit={this.formSubmit}>
                        <div>
                            <i>add</i>
                            <input
                                value={formValue}
                                onChange={this.inputChange}
                                id="toDoNext"
                                type="text"
                                // name="formValue"
                            />
                            <label htmlFor="toDoNext">What Next?</label>
                        </div>
                    </form>
                </div>
            );
        }
    }

    renderTodo(){
        const { data } = this.props;
        const todos = _.map(data, (value, key) => {
            return <ListItem key={key} todoId={key} todo={value} />;
        });

        if(!_.isEmpty(todos)){
            return todos;
        }

        return (
            <div>
                <h4>You have no more things ToDo!</h4>
            </div>
        );
    }

    componentWillMount(){
        this.props.fetchTodos();
    }
    render() {
        const { showForm } = this.state
        return (
            <div>
                <div>
                    {this.renderForm()}
                    {this.renderTodo()}
                </div> 
                <div>
                    <button onClick={() => this.setState({ showForm: !showForm })}>
                        {showForm ? (
                            <i>Close</i>
                        ) : (
                                <i>Add</i>
                            )}
                    </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStateToProps, actions)(List)
