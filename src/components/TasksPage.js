import React, { Component } from 'react';
import TaskList from './TaskList';
import NewTaskDialog from './NewTaskDialog';

const TASK_STATUSES = [
	'Unstarted',
	'In Progress',
	'Completed'
];

class TasksPage extends Component {

	renderTaskLists() {
		const { tasks } = this.props;
		return TASK_STATUSES.map(status => {
			const statusTasks = tasks.filter(task => task.status === status);
			return <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={this.props.onStatusChange}/>;
		});
	}

	// Add an AppBar?

	render() {
		return (
			<div className="tasks-list">
				<div className="task-list-header">
					<NewTaskDialog onCreateTask={this.props.onCreateTask}/>
				</div>
				<div className="task-lists">
				{this.renderTaskLists()}
				</div>
			</div>
		);
	}
}

export default TasksPage;