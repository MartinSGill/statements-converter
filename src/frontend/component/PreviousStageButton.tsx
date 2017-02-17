import * as React from "react";
import { Button } from "react-toolbox";
import * as DropZone from 'react-dropzone';
import { prevWorkflowStage } from '../actions/App';

interface PreviousStageButtonProps {
    onPrevious: typeof prevWorkflowStage;
}

export function PreviousStageButton(props: PreviousStageButtonProps) {
    return  <Button label="Previous" primary raised onClick={props.onPrevious} />
}