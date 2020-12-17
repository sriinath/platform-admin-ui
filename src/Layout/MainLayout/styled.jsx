import styled from 'styled-components';

const LeftContainerEl = styled.div`
    width: 20%;
    padding: 10px;
`;

const RightContainerEl = styled.div`
    width: 80%;
    padding: 10px;
    position: relative;
`;

const MainContainerEl = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
`;

export {
    LeftContainerEl,
    RightContainerEl,
    MainContainerEl
};
