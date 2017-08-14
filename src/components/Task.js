import React from 'react';

import { Card, CardTitle, CardText, CardActions, SelectField, MenuItem } from 'material-ui';

const TASK_STATUSES = [
    'Unstarted',
    'In Progress',
    'Completed'
];

const Task = props => {
	return (
		<Card>
			<CardTitle title={props.task.title}/>
			<CardText>{props.task.description}</CardText>
			<CardActions>
				<SelectField value={props.task.status} onChange={onStatusChange}>
					{TASK_STATUSES.map(status => (
						<MenuItem key={status} value={status} primaryText={status}/>
					))}
				</SelectField>
			</CardActions>
		</Card>
	);

    function onStatusChange(e, index, value) {
        props.onStatusChange(props.task.id, value)
    }
};

export default Task;