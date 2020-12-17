import styled from 'styled-components'

const SubscriptionListContEl = styled.div`
    display: flex;
    overflow: scroll;
    flex-wrap: nowrap;
    padding: 25px 10px 5px;
`;

const SubscriptionItemEl = styled.div`
    min-width: 120px;
    padding: 10px;
    height: 100px;
    background-color: #4467da;
    color: #eaeffb;
    border-radius: 5px;
    margin: 10px;
`;

const SubscriptionURLEl = styled.div`
    padding: 5px;
`;

const SubscriptionHeadersEl = styled.div`
    padding: 5px;
`;

export {
    SubscriptionListContEl,
    SubscriptionItemEl,
    SubscriptionURLEl,
    SubscriptionHeadersEl
};
