import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    
            // React.Fragment operates like an invisble ele having no impact on the dom. 
            // We use it here in place of nesting divs which produced unusual display effects.
    const actions = (
        <React.Fragment>
            <button className='ui button negative'>Delete</button>
            <button className='ui button'>Cancel</button>
        </React.Fragment>
    )

    return(
        <div>
            StreamDelete
            <Modal 
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={ actions }
                onDismiss={ ()=> history.push('/') }
            />
        </div>
    );
};

export default StreamDelete;