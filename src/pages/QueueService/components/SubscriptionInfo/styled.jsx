import styled from 'styled-components'
import {
    NextBtnEl
} from '../../styled.jsx';

import EditIcon from '../../../../assets/edit.svg';
import DeleteIcon from '../../../../assets/delete.svg';

const SubscriptionActionWrapper = styled.div`
    display: flex;
    justify-content: center
    
    ${NextBtnEl} {
        margin: 10px;
    }
`;

const EditIconEl = styled.i`
    content: url(${EditIcon});
    width: 24px;
    cursor: pointer;
    margin-right: 10px;
`;

const DeleteIconEl = styled.i`
    content: url(${DeleteIcon});
    width: 24px;
    cursor: pointer;
`;

export {
    SubscriptionActionWrapper,
    EditIconEl,
    DeleteIconEl
};
