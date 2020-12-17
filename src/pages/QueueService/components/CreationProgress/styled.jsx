import styled from 'styled-components'

const ProgressWrapperEl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
`;

const ItemEl = styled.div`
    border-radius: 100%;
    border: ${props => props.active ? '3px' : '1px'} solid #cac9c9;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #2a3d4d;
    cursor: ${props => props.completed ? 'pointer' : 'default'};
    pointer-events: ${props => props.completed ? 'default' : 'none'};
    background: ${props => props.active ? '#f5f5f5' : (props.completed ? '#5bb769' : '')};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const IntermediateLineEl = styled.div`
    width: 40px;
    height: 2px;
    background: #cac9c9;
`;

export {
    ProgressWrapperEl,
    ItemEl,
    IntermediateLineEl
};
