import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }
    
    renderActions () {
            // React.Fragment operates like an invisble ele having no impact on the dom. 
            // We use it here in place of nesting divs which produced unusual display effects.
        return(
            <React.Fragment>
                <button className='ui button negative'>Delete</button>
                <button className='ui button'>Cancel</button>
            </React.Fragment>
        );
    }

    render () {
        return(
            <div>
                StreamDelete
                <Modal 
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={ this.renderActions() }
                    onDismiss={ ()=> history.push('/') }
                />
            </div>
        );
    }
};

export default connect(null, { fetchStream })(StreamDelete);