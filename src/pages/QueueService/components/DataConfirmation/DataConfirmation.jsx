import React from 'react';

import {
    SubscriptionActionWrapper
} from '../SubscriptionInfo/styled.jsx';
import {
    SubscriptionInfoItem,
    ItemLabelEl,
    ItemValueEl,
} from './styled.jsx';
import {
    NextBtnEl,
    NextBtnEl as AddBtnEl,
    ElementsWrapper,
    DetailsContEl
} from '../../styled.jsx';
import { TableList } from '../../../../components';

const DataConfirmation = props => {
    const {
        name,
        description,
        subscriptionList,
        onConfirm,
        onPrev
    } = props;

    return <>
        <DetailsContEl>
            <div className="content-title">Service Details</div>
            <ElementsWrapper>
                <SubscriptionInfoItem>
                    <ItemLabelEl>Name:</ItemLabelEl>
                    <ItemValueEl>{name}</ItemValueEl>
                </SubscriptionInfoItem>
                <SubscriptionInfoItem>
                    <ItemLabelEl>Description:</ItemLabelEl>
                    <ItemValueEl>{description}</ItemValueEl>
                </SubscriptionInfoItem>
            </ElementsWrapper>
        </DetailsContEl>
        <DetailsContEl>
            <div className="content-title">Subscriber Details</div>
            <TableList
                listData={subscriptionList}
                listKeys={[
                    'headers',
                    'url'
                ]}
                emptyDataMessage="No Services"
            />
        </DetailsContEl>
        <SubscriptionActionWrapper>
            <NextBtnEl
                onClick={() => onPrev()}
            >
                PREV
            </NextBtnEl>
            <AddBtnEl 
                onClick={() => onConfirm}
            >
                Confirm
            </AddBtnEl>
        </SubscriptionActionWrapper>
    </>
};

export { DataConfirmation };
