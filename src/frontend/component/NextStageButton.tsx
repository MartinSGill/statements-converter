import * as React from "react";
import { Button } from "react-toolbox";
import * as DropZone from 'react-dropzone';
import { nextWorkflowStage } from '../actions/App';

interface NextStageButtonProps {
    onNext: typeof nextWorkflowStage;
}

export function NextStageButton(props: NextStageButtonProps) {
    return  <Button label="Next" primary raised onClick={props.onNext} />
}