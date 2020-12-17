import React from 'react';

import {
    ServiceListListRowEl,
    ServiceListListItemEl,
    MoreInfoEl
} from '../styled.jsx';

const TableList = props => {
    const {
        data
    } = props;
    return <>{
        data.map(item => <ServiceListListRowEl>
            <ServiceListListItemEl>
                {item.name || ''}
            </ServiceListListItemEl>
            <ServiceListListItemEl>
                {item.created_date || ''}
            </ServiceListListItemEl>
            <ServiceListListItemEl>
                {item.status || ''}
            </ServiceListListItemEl>
            <ServiceListListItemEl>
                {item.is_active ? 'Active' : 'Disabled'}
            </ServiceListListItemEl>
            <ServiceListListItemEl>
                <MoreInfoEl />
            </ServiceListListItemEl>
        </ServiceListListRowEl>)
    }</>
};

export { TableList };
