import React from 'react';

import {
    DashboardWrapperEl,
    DashboardServicesWrapperEl
} from './styled.jsx';
import { OverviewTile } from './components';

const Dashboard = props => {
    return <DashboardWrapperEl>
        <div className="title">SERVICES</div>
        <DashboardServicesWrapperEl>
            <OverviewTile
                title='Message Queue'
                desc='A Managed Queue Service for distributed systems and micro service architecture.'
                link='/queue'
                linkText='Show More'
                maxDescLines={3}
            />
            <OverviewTile
                title='Search Platform'
                desc='Platform to enable the search and suggestion without worrying about the infrastructure.'
                link='/services/search'
                linkText='Show More'
                maxDescLines={3}
            />
        </DashboardServicesWrapperEl>
    </DashboardWrapperEl>
}

export { Dashboard };
