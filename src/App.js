import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import { createTask, editTask } from './actions';
import TasksPage from './components/TasksPage';

class App extends Component {

    onCreateTask = ({title, description}) => {
        this.props.dispatch(createTask({title, description}));
    };

    onStatusChange = (id, status) => {
        this.props.dispatch(editTask(id, {status}))
    };

    render() {
        return (
            <div className="main-content">
                <MuiThemeProvider>
                    <TasksPage tasks={this.props.tasks}
                               onCreateTask={this.onCreateTask}
                               onStatusChange={this.onStatusChange}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps) (App);
