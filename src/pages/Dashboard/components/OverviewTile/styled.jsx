import styled from 'styled-components';

import { Link } from 'react-router-dom';

const TitleEl = styled.div`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
`;

const DescEl = styled.div`
    margin: 10px 0px;
    overflow: hidden;
    -webkit-line-clamp: ${props => props.clampLines || '2'};
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;

const LinkWrapperEl = styled.div`
    padding: 20px 0px;
`;

const LinkEl = styled(Link)`
    margin: 10px;
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
    color: inherit;
    text-decoration: none;
`;

export {
    TitleEl,
    DescEl,
    LinkEl,
    LinkWrapperEl
};
