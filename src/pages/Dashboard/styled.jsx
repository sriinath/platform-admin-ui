import styled from 'styled-components';
import { TileWrapperEl } from '../../components/Tile/styled.jsx';

const DashboardWrapperEl = styled.div`
`;

const DashboardServicesWrapperEl = styled.div`
    display: flex;
    padding: 15px;

    ${TileWrapperEl} {
        width: 25%;
        height: 100%;
        background-color: #4467da;
        padding: 15px 10px;
        margin: 10px;
        color: #eaeffb;
        text-align: center;
        cursor: default;
        border-radius: 5px;

        &:hover {
            color: #4467da;
            background-color: #eaeffb;
            border: 1px solid;
            box-shadow: 0 -10px 20px 4px rgba(0,0,0,.4);
        }
    }
`;

export {
    DashboardWrapperEl,
    DashboardServicesWrapperEl
}
