import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    };

    render(){
        return(
            console.log(this.props.streams),
            <div>StreamList</div>
        );
    };
}

const mapStateToProps = state => {
        // takes an object and pulls out all the values which it then saves to an array. An array would simply be easier to work w/
    return{ streams: Object.values(state.streams) };
}

// export default connect(null, { fetchStreams })(StreamList);
export default connect(mapStateToProps, { fetchStreams })(StreamList);