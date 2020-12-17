import React, { useRef, useState } from 'react';

import {
    SubscriptionActionWrapper,
    EditIconEl,
    DeleteIconEl
} from './styled.jsx';
import {
    LabelEl,
    TextAreaEl,
    InputEl,
    ElementsWrapper,
    NextBtnEl,
    NextBtnEl as AddBtnEl
} from '../../styled.jsx';
import { TableList } from '../../../../components';

const SubscriptionInfo = props => {
    const {
        subscriptionList,
        updateSubscriptionList,
        onNext,
        onPrev
    } = props;

    const [headerValue, updateHeadervalue] = useState('');
    const [urlValue, updateURLvalue] = useState('');
    
    const onEdit = index => {
        const tempData = [...subscriptionList];
        const editData = tempData[index];
        updateHeadervalue(editData['headers']);
        updateURLvalue(editData['url']);
        tempData.splice(index, 1);
        updateSubscriptionList(tempData);
    }
    const onDelete = index => {
        const tempData = [...subscriptionList];
        tempData.splice(index, 1);
        updateSubscriptionList(tempData);
    }

    return <>
        <TableList
            listData={subscriptionList}
            listKeys={[
                'headers',
                'url'
            ]}
            emptyDataMessage="No Services"
            CustomEl={props => <>
                <EditIconEl onClick={() => onEdit(props.index)} />
                <DeleteIconEl onClick={() => onDelete(props.index)} />
            </>}
        />
        <ElementsWrapper>
            <LabelEl htmlFor="headers">Headers:</LabelEl>
            <TextAreaEl
                type="text"
                id="headers"
                cols="4"
                placeholder="Headers"
                value={headerValue}
                onChange={e => updateHeadervalue(e.currentTarget.value)}
            />
            <LabelEl htmlFor="url">URL:</LabelEl>
            <InputEl
                type="text"
                id="url"
                placeholder="URL"
                value={urlValue}
                onChange={e => updateURLvalue(e.currentTarget.value)}
            />
            <SubscriptionActionWrapper>
                <NextBtnEl
                    onClick={() => onPrev()}
                >
                    PREV
                </NextBtnEl>
                <AddBtnEl 
                    onClick={() => {
                        updateHeadervalue('');
                        updateURLvalue('');
                        const tempList = [...subscriptionList];
                        tempList.push({
                            headers: headerValue,
                            url: urlValue
                        });
                        updateSubscriptionList(tempList);
                    }}
                >
                    ADD
                </AddBtnEl>
                <NextBtnEl
                    disable={!(subscriptionList.length)}
                    onClick={() => onNext()}
                >
                    NEXT
                </NextBtnEl>
            </SubscriptionActionWrapper>
        </ElementsWrapper>
    </>
};

export { SubscriptionInfo };
