import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";
import * as DropZone from 'react-dropzone';

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class UploadStatements extends React.Component<undefined, undefined> {
    
    private onDrop (files: string[]) {
      console.log('Received files: ', files);        
    }
    render() {
        return <Card>
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
                <DropZone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </DropZone>
            </CardText>
        </Card>;
    }
}
