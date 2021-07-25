import React from "react";

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

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return <div>I don't know if we are signed in.</div>
        }else if(this.state.isSignedIn){
            return <div>I am signed in</div>
        }else{
            return <div>I am not signed in</div>
        }
    }

    render() {
        return(
            <div>{ this.renderAuthButton() }</div>
        );
    };
};

export default GoogleAuth;