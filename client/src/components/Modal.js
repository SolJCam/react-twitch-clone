import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={ () => history.push('/') } className='ui dimmer modals visible active'>
            <div onClick={ (e) => e.preventPropogation() } className='ui standard modal visible active'> {/* preventPropogation: stop onClick actions in child divs from bubblng up to parent and executing */}
                <div className='header'>Delete Stream</div>
                <div className='content'>Are you sure you want to delete this stream?</div>
                <div className='actions'>
                    <button className='ui primary button'>Delete</button>
                    <button className='ui button'>Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector("#Modal")
    );
};

export default Modal;