import React from 'react';

import {
    ProgressWrapperEl,
    ItemEl,
    IntermediateLineEl
} from './styled.jsx';

const CreationProgress = props => {
    const {
        stages,
        currentStage,
        updateStage
    } = props;

    const stagesEl = [];
    for (let i = 1; i <= stages; i++) {
        stagesEl.push(
            <ItemEl onClick={() => updateStage(i)} key={i} completed={i < currentStage} active={i === currentStage}>{i}</ItemEl>
        );
        if (i !== stages) {
            stagesEl.push(<IntermediateLineEl />);
        }
    }
    return <ProgressWrapperEl>
        {stagesEl}
    </ProgressWrapperEl>
};

export { CreationProgress };
