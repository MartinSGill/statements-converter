import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";
import * as DropZone from 'react-dropzone';

function onDrop(files: File[]) {
    console.log('Received files: ', files);
    const reader = new FileReader();
    reader.onload = (event: Event) => {
        console.log((event.target as FileReader).result);
    }
    reader.readAsText(files[0]);
}

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export function UploadStatements(props: any) {
    if (props.workflowStage == 'Upload') {
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
            </CardText>
        </Card>);
    } return <div>It's Hidden! {props.workflowStage}</div>
}

