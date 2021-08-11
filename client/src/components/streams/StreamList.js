import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    };

    renderList () {
        return this.props.streams.map( stream => {
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        });

    }

    render(){
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
            // console.log(this.props.streams),
            // <div>StreamList</div>
        );
    };
}

const mapStateToProps = state => {
        // takes an object and pulls out all the values which it then saves to an array. An array would simply be easier to work w/
    return{ streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);