import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput ({ input, label }){    {/* desctructure out the props object to access onChange Event Handler and Input Value which are REQUIRED FOR ANY REACT input ele */}
        // console.log(input);
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }
    
    render () {
        return(
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />  {/* name prop is allways required for Field Component, component prop is required to pass content or show a form ele */}
                <Field name="description" component={this.renderInput} label="Enter Description" /> {/* these label props do not come w/ Field component but once added can be passed/accesed through renderInput component */}
            </form>                                         
        );
    };
};



export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);