import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componenDidMount () {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        // console.log(this.props);
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        
        return(
            <div>StreamEdit</div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);