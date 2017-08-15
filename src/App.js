import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import { createTask, editTask, deleteTask, fetchTasks } from './actions';
import TasksPage from './components/TasksPage';
import ErrorMessage from "./components/ErrorMessage";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTasks());
    };

    onCreateTask = ({title, description}) => {
        this.props.dispatch(createTask({title, description}));
    };

    onStatusChange = (id, status) => {
        this.props.dispatch(editTask(id, {status}));
    };

    onDelete = (id) => {
        this.props.dispatch(deleteTask(id));
    };

    render() {
        return (
            <div className="container">
                {this.props.error && <ErrorMessage message={this.props.error}/>}
                <div className="main-content">
                    <MuiThemeProvider>
                        <TasksPage tasks={this.props.tasks}
                                   onCreateTask={this.onCreateTask}
                                   onStatusChange={this.onStatusChange}
                                   onDelete={this.onDelete}
                                   isLoading={this.props.isLoading}
                        />
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { tasks, isLoading, error } = state.tasks;
    return {
        tasks,
        isLoading,
        error
    };
}

export default connect(mapStateToProps) (App);
