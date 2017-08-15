import React from 'react';
// import Snackbar from 'material-ui/Snackbar';

export default class ErrorMessage extends React.Component {

    // state = {
    //     open: false,
    // };

    // handleRequestClose = () => {
    //     this.setState({
    //         open: false,
    //     });
    // };

    render() {

        return (
            <div className="flash-error">
                ERROR: {this.props.message}
            </div>

        );

        // return (
        //     <div>
        //         <Snackbar
        //             open={this.state.open}
        //             message={this.props.message}
        //             autoHideDuration={4000}
        //             onRequestClose={this.handleRequestClose}
        //         />
        //     </div>
        // );

    }
}

Error.defaultProps = {
    message: 'An error occurred!'
};