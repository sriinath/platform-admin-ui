import styled from 'styled-components'

const CreateServicesWrapperEl = styled.div`
    height: calc(100% - 80px);
    overflow: scroll;
`;

const CreateFormEl = styled.form`
`;

const ElementCont = styled.div`
    display: flex;
    padding: 10px 0px;
    align-items: center;
`;

const LabelEl = styled.label`
    font-weight: bold;
    min-width: 120px;
    display: block;
    padding: 10px 0px;
`;

const InputEl = styled.input`
    padding: 10px;
    width: 280px;
    margin: 5px 0px 15px;
`;

const TextAreaEl = styled.textarea`
    padding: 10px;
    width: 280px;
`;

const DetailsContEl = styled.div`
    background: #f5f5f5;
    padding: 0px 0px 10px;
`;

const ElementsWrapper = styled.div`
    padding: 20px;
`;

const NextBtnEl = styled.div`
    width: 100px;
    text-align: center;
    margin: 15px auto;
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    background: #5bb769;
    color: #f7f7f7;
    opacity: ${props => props.disable ? '.5' : '1'};
    pointer-events: ${props => props.disable ? 'none' : 'all'};

    &:hover {
        color: #5bb769;
        background: #f7f7f7;
    }
`

export {
    CreateServicesWrapperEl,
    CreateFormEl,
    LabelEl,
    InputEl,
    ElementCont,
    DetailsContEl,
    TextAreaEl,
    ElementsWrapper,
    NextBtnEl
};
