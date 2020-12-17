import React from 'react';

import {
    SubscriptionListContEl,
    SubscriptionItemEl,
    SubscriptionURLEl,
    SubscriptionHeadersEl
} from './styled.jsx';

const SubscriptionList = props => {
    const {
        subscriptionData
    } = props;

    return <SubscriptionListContEl>
        {subscriptionData.map(item => <SubscriptionItemEl>
            <SubscriptionURLEl>{item.url}</SubscriptionURLEl>
            <SubscriptionHeadersEl>{item.headers}</SubscriptionHeadersEl>
        </SubscriptionItemEl>)}
    </SubscriptionListContEl>
};

export { SubscriptionList };
