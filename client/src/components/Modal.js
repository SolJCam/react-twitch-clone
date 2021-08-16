import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={ props.onDismiss } className='ui dimmer modals visible active'>
            <div onClick={ (e) => e.preventPropogation() } className='ui standard modal visible active'> {/* preventPropogation: stop onClick actions in child divs from bubblng up to parent and executing */}
                <div className='header'>{ props.title }</div>
                <div className='content'>{ props.content }</div>
                <div className='actions'>{ props.actions }</div>
            </div>
        </div>,
        document.querySelector("#Modal")
    );
};

export default Modal;