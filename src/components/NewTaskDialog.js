import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class NewTaskDialog extends React.Component {

    state = {
        open: false,
        valid: false,
        title: '',
        description: ''
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.resetDialog();
        this.setState({open: false});
    };

    resetDialog = () => {
        this.setState({title: '', description: '', valid: false})
    };

    handleCreateTask = (e) => {
        e.preventDefault();
        this.props.onCreateTask({
            title: this.state.title,
            description: this.state.description
        });
        this.handleClose();
    };

    onTitleChange = (e) => {
        this.setState({ title: e.target.value });
        this.validate();
    };

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
        this.validate();
    };

    validate = () => {
      if(this.state.title && this.state.description) {
          this.setState({valid: true});
      }
    };

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Create Task"
                primary={true}
                disabled={!this.state.valid}
                onTouchTap={this.handleCreateTask}
            />,
        ];

        return (
            <div>
                <FlatButton label="New Task" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Create New Task"
                    actions={actions}
                    modal={true}
                    open={this.state.open}>

                    <TextField id="task-title"
                               hintText="Title"
                               value={this.state.title}
                               onChange={this.onTitleChange}/>
                    <br/>
                    <TextField id="task-description"
                               hintText="Description"
                               value={this.state.description}
                               onChange={this.onDescriptionChange}/>
                    <br/>

                </Dialog>
            </div>
        );
    }
}