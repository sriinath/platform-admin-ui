import React, { useState } from 'react';
import { SubscriptionInfo, CreationProgress, DataConfirmation } from './components';

import {
    CreateServicesWrapperEl,
    CreateFormEl,
    LabelEl,
    InputEl,
    DetailsContEl,
    ElementsWrapper,
    NextBtnEl
} from './styled.jsx';

const QueueService = () => {
    const [ subscriptionList, updateSubscriptionList ] = useState([]);
    const [ currentStage, updateStage ] = useState(1);
    const [ name, updateName ] = useState('');
    const [ description, updateDescription ] = useState('');

    const getCurrentStageWrapper = () => {
        switch(currentStage) {
            case 1:
                return <>
                    <div className="content-title">Details</div>
                    <ElementsWrapper>
                        <LabelEl
                            htmlFor="name"
                        >
                            Name:
                        </LabelEl>
                        <InputEl
                            type="text"
                            id="name"
                            placeholder="Name"
                            defaultValue={name}
                            onBlur={e => updateName(e.currentTarget.value)}
                        />
                        <LabelEl
                            htmlFor="description"
                        >
                            Description:
                        </LabelEl>
                        <InputEl
                            type="text"
                            id="description"
                            placeholder="Description"
                            defaultValue={description}
                            onBlur={e => updateDescription(e.currentTarget.value)}
                        />
                    </ElementsWrapper>
                    <NextBtnEl
                        disable={!(name && description)}
                        onClick={() => {
                            updateStage(2);
                        }}
                    >
                        NEXT
                    </NextBtnEl>
                </>
            case 2:
                return <>
                    <div className="content-title">Subscription Info</div>
                    <SubscriptionInfo
                        subscriptionList={subscriptionList}
                        updateSubscriptionList={updateSubscriptionList}
                        onPrev={() => updateStage(1)}
                        onNext={() => updateStage(3)}
                    />
                </>
            case 3:
                return <>
                    <DataConfirmation
                        name={name}
                        description={description}
                        subscriptionList={subscriptionList}
                        onConfirm={() => console.log('on confirm')}
                        onPrev={() => updateStage(2)}
                    />
                </>
            default:
                return <></>
        }
    }

    return <CreateServicesWrapperEl>
        <div className="title">Create Service</div>
        <CreationProgress stages={3} currentStage={currentStage} updateStage={updateStage} />
        <CreateFormEl>
            <DetailsContEl>
                {getCurrentStageWrapper()}
            </DetailsContEl>
        </CreateFormEl>
    </CreateServicesWrapperEl>
};

export { QueueService };
