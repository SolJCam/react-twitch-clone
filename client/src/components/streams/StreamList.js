import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    compnentDidMount(){
        this.props.fetchStreams();
    };

    render(){
        return(
            <div>StreamList</div>
        );
    };
}

export default connect(null, { fetchStreams })(StreamList);