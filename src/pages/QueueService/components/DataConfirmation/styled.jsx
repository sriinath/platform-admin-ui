import styled from 'styled-components';

const SubscriptionInfoItem = styled.div`
    display: flex;
    padding: 10px 0px;
`;

const ItemLabelEl = styled.div`
    min-width: 15%;
    font-weight: bold;
`;

const ItemValueEl = styled.div`
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    display: -webkit-box;
`;

export {
    SubscriptionInfoItem,
    ItemLabelEl,
    ItemValueEl
}
