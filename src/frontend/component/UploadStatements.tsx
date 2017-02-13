import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class UploadStatements extends React.Component<undefined, undefined> {
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
                    />
                </List>
            </CardText>
        </Card>;
    }
}
