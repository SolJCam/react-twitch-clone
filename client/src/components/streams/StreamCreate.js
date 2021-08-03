import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if( error && touched) {
            return(
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            );
        };
    };
    
    // desctructure out the props object to access onChange Event Handler and Input Value which are REQUIRED FOR ANY REACT input ele
    renderInput = ({ input, label, meta }) => {    
        // console.log(input);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={ className }>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                { this.renderError(meta) }
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }
    
    render () {
        return(                 
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form"> {/* use redux-form's handleSubmit to handle on submit. automatically passes form values and no need manually pass preventDefault*/}
                <Field name="title" component={this.renderInput} label="Enter Title" />  {/* name prop is allways required for Field Component, component prop is required to pass content or show a form ele */}
                <Field name="description" component={this.renderInput} label="Enter Description" /> {/* these label props do not come w/ Field component but once added can be passed/accesed through renderInput component */}
                <button className= "ui button primary">Submit</button>
            </form>                                         
        );
    };
};

const validate = formValues => {
    const errors = {};

    if (!formValues.title){
        errors.title = 'You must enter a title';
    };

    if (!formValues.description){
        errors.description = 'You must enter a description';
    };

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

// Yes cnnect and reduxForm essentially do the same thing. here we're nesting them for the purposes of this project
export default connect(null, { createStream })(formWrapped)