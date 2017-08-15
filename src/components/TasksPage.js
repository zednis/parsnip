import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TaskList from './TaskList';
import NewTaskDialog from './NewTaskDialog';

const TASK_STATUSES = [
	'Unstarted',
	'In Progress',
	'Completed'
];

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class TasksPage extends Component {

	renderTaskLists() {
		const { tasks } = this.props;
		return TASK_STATUSES.map(status => {
			const statusTasks = tasks.filter(task => task.status === status);
			return <TaskList key={status}
							 status={status}
							 tasks={statusTasks}
							 onStatusChange={this.props.onStatusChange}
							 onDelete={this.props.onDelete}
			/>;
		});
	}

	render() {
		return (
			<div className="tasks-list">
				<AppBar title={<span style={styles.title}>Tasks</span>}
						iconElementRight={<NewTaskDialog onCreateTask={this.props.onCreateTask}/>}
				/>

				<br />

				<div className="task-lists">
				{this.renderTaskLists()}
				</div>
			</div>
		);
	}
}

export default TasksPage;