import React from 'react';

import {
    TileWrapperEl
} from './styled.jsx';

const Tile = props => {
    const {
        wrapperStyle,
        children
    } = props;

    return <TileWrapperEl tileWrapperStyle={wrapperStyle}>
        {children}
    </TileWrapperEl>
};

export { Tile };
