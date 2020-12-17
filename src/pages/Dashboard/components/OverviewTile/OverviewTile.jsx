import React from 'react';

import { Tile } from '../../../../components';
import {
    TitleEl,
    DescEl,
    LinkEl,
    LinkWrapperEl
} from './styled.jsx';

const OverviewTile = props => {
    const {
        title,
        desc,
        maxDescLines,
        link,
        linkText
    } = props;
    return <Tile>
        <TitleEl>{title}</TitleEl>
        <DescEl clampLines={maxDescLines}>{desc}</DescEl>
        <LinkWrapperEl>
            <LinkEl to={link}>{linkText}</LinkEl>
        </LinkWrapperEl>
    </Tile>
}

export { OverviewTile };
