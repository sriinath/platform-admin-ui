import styled from 'styled-components'

import { Link } from 'react-router-dom';
import MoreIcon from '../../assets/dots.svg';
import PlusIcon from '../../assets/plus.svg';

const ServiceListWrapperEl = styled.div`
`;

const ServiceListContEl = styled.div`
`;

const ServiceListListEl = styled.table`
    width: 100%;
    text-align: center;
    padding-top: 10px;
`;

const ServiceListListRowEl = styled.tr`
    background-color: #f5f5f5;
    padding: 10px 0px;
`;

const ServiceListListHeaderEl = styled.th`
    padding: 10px 0px;
`;

const ServiceListListItemEl = styled.td`
    min-width: 150px;

    &:last-child {
        min-width: 20px;
    }
`;

const MoreInfoEl = styled.i`
    content: url(${MoreIcon});
    width: 24px;
    height: 30px;
`;

const NoServicesEl = styled.div`
    padding: 15px 5px;
    text-align: center;
    font-weight: bold;
`;

const ServiceListActionCont = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CreateBtnEl = styled(Link)`
    padding: 10px;
    width: 100px;
    background: #f5f5f5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;

const PlusEl = styled.i`
    content: url(${PlusIcon});
    width: 24px;
`;

export {
    ServiceListContEl,
    ServiceListListEl,
    ServiceListWrapperEl,
    ServiceListListHeaderEl,
    ServiceListListRowEl,
    ServiceListListItemEl,
    MoreInfoEl,
    NoServicesEl,
    ServiceListActionCont,
    CreateBtnEl,
    PlusEl
};
