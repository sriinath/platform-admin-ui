import styled from 'styled-components';

const TableEl = styled.table`
    width: 100%;
    text-align: center;
    padding: 15px 20px;
`;

const TableRowEl = styled.tr`
    background-color: #eaedec;
    padding: 10px 0px;
`;

const TableHeaderItemEl = styled.th`
    padding: 10px 0px;
`;

const TableItemEl = styled.td`
    min-width: 150px;
    padding: 10px 0px;

    &:last-child {
        min-width: 20px;
    }
`;

const EmptyMessageEl = styled.div`
    padding: 15px 5px;
    text-align: center;
    font-weight: bold;
`;

export {
    TableEl,
    TableRowEl,
    TableHeaderItemEl,
    TableItemEl,
    EmptyMessageEl
};
