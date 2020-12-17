import React from 'react';

import {
    TableEl,
    TableRowEl,
    TableHeaderItemEl,
    TableItemEl,
    EmptyMessageEl
} from './styled.jsx';

const TableList = props => {
    const {
        listKeys,
        listData,
        emptyDataMessage,
        CustomEl
    } = props;

    return <>
        {listData.length ? <TableEl>
            <thead>
                <TableRowEl>
                    {listKeys.map((key, index) => <TableHeaderItemEl key={index}>{key}</TableHeaderItemEl>)}
                    {CustomEl ? <TableHeaderItemEl /> : null}
                </TableRowEl>
            </thead>
            <tbody>
                {listData.map((data, dataIndex) => <TableRowEl key={dataIndex}>
                    {listKeys.map((key, index) => <TableItemEl key={index}>{data[key]}</TableItemEl>)}
                    {CustomEl ? <TableHeaderItemEl>
                        <CustomEl index={dataIndex} />
                    </TableHeaderItemEl> : null}
                </TableRowEl>)}
            </tbody>
        </TableEl> : <EmptyMessageEl>{emptyDataMessage}</EmptyMessageEl>
        }
    </>
};

export { TableList };
