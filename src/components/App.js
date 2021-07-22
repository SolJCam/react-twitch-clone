import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
// import StreamCreate from './streams/StreamCreate';
// import StreamDelete from './streams/StreamDelete';
// import StreamEdit from './streams/StreamEdit';
// import StreamList from './streams/StreamList';
// import StreamShow from './streams/StreamShow';
import * as streams from './streams';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Router path="/" exact component={ streams.SteamList } />
                    <Router path="/streams/new" component={ streams.SteamCreate } />
                    <Router path="/streams/edit" component={ streams.SteamEdit } />
                    <Router path="/streams/delete" component={ streams.SteamDelete } />
                    <Router path="/streams/show" component={ streams.SteamShow } />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;