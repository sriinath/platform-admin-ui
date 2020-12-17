import React from 'react';

import {
    ServiceListContEl,
    ServiceListListEl,
    ServiceListWrapperEl,
    ServiceListListHeaderEl,
    ServiceListListRowEl,
    NoServicesEl,
    ServiceListActionCont,
    CreateBtnEl,
    PlusEl
} from './styled.jsx';
import { TableList } from './TableList';

const ServiceList = props => {
    const {
        servicesData=[],
        match
    } = props;

    const {
        serviceName
    } = match.params;

    return <ServiceListWrapperEl>
        <div className="title">{serviceName} Services</div>
        <ServiceListContEl>
            <ServiceListActionCont>
                <CreateBtnEl to={`/${serviceName}/create`}>CREATE <PlusEl /></CreateBtnEl>
            </ServiceListActionCont>
            <ServiceListListEl>
                <thead>
                    <ServiceListListRowEl>
                        <ServiceListListHeaderEl>Name</ServiceListListHeaderEl>
                        <ServiceListListHeaderEl>Created Date</ServiceListListHeaderEl>
                        <ServiceListListHeaderEl>Status</ServiceListListHeaderEl>
                        <ServiceListListHeaderEl>Active</ServiceListListHeaderEl>
                        <ServiceListListHeaderEl></ServiceListListHeaderEl>
                    </ServiceListListRowEl>
                </thead>
                <tbody>
                    {servicesData.length ? <TableList data={servicesData} /> : <></>}
                </tbody>
            </ServiceListListEl>
            {servicesData.length ? <></> : <NoServicesEl>No Services Found</NoServicesEl>}
        </ServiceListContEl>
    </ServiceListWrapperEl>
};

export { ServiceList };
