import React from 'react';
import Canvas from './Canvas';
import Blocks from './Blocks';
import Toolbar from './Toolbar';
import Avatar from './Avatar';

class Editor extends React.Component {
    render() {
        return (
            <div className="editor">
                <Toolbar />
                <Canvas />
                <Blocks />
                <Avatar />
            </div>
        );
    }
}

export default Editor;
