import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem, Navigation } from "react-toolbox";
import { WorkflowStage } from '../constants/WorkflowStage';
import * as DropZone from 'react-dropzone';
import { nextWorkflowStage, prevWorkflowStage } from '../actions/App';
import { NextStageButton } from './NextStageButton';
import { PreviousStageButton } from './PreviousStageButton';

function onDrop(files: File[]) {
    console.log('Received files: ', files);
    const reader = new FileReader();
    reader.onload = (event: Event) => {
        console.log((event.target as FileReader).result);
    }
    reader.readAsText(files[0]);
}

interface UploadStatementsProps {
    workflowStage: number;
    onNext: typeof nextWorkflowStage;
    onPrevious: typeof prevWorkflowStage;
}


// No props, so use undefined
// State is never set so we use the 'undefined' type.
export function UploadStatements(props: UploadStatementsProps) {
    if (props.workflowStage == WorkflowStage.UPLOAD) {
    return (
        <Card>
            <CardTitle
                title="Upload Statements"
                subtitle="" />
            <CardText>
                <List>
                    <ListItem
                        caption="Upload statements to this page"
                        leftIcon="file_upload"
                    >
                    </ListItem>
                </List>
                <DropZone onDrop={onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </DropZone>
                <Navigation>
                    <PreviousStageButton onPrevious={props.onPrevious} />
                    <NextStageButton onNext={props.onNext} />
                </Navigation>
            </CardText>
        </Card>);
    } 
    return <div/>
}

