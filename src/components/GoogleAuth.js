import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        // the gapi object is made accessible by creating this project on Google Cloud Platform and adding
        // url localhost:3000 to the list of URL credetials
        // the gapi object is accessible throught the global window object and has a number of methods, 
        // of which load is used first to access OAuth data before passing my client ID in the callback funtion
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '371937029876-c5sns0q9a52vokpdmt756gqgs4chpfs3.apps.googleusercontent.com',
                scope: 'email' //merely tells us what parts of the users profile/account we want access to
            }).then(()=>{       // give the app access to the users authentication status
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    };

    toSignIn = () => {
        this.auth.signIn();
    }

    toSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
            return(
                <button className="ui red google button" onClick={ this.toSignOut }>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else{
            return(
                <button className="ui red google button" onClick={ this.toSignIn }>
                    <i className="google icon" />
                    Sign In with Google
                </button>            
            )
        }
    }

    render() {
        return(
            <div>{ this.renderAuthButton() }</div>
        );
    };
};

export default connect(
    null,
    { signIn, signOut }
)(GoogleAuth);