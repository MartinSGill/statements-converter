import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class GettingStarted extends React.Component<undefined, undefined> {
    render() {
        return <Card>
            <CardTitle
                title="Getting Started"
                subtitle="" />
            <CardText>
                <List>
                    <ListItem
                        caption="Download MT940 statements from ABN Amro Site"
                        leftIcon="file_download"
                    />
                    <ListItem
                        caption="Upload statements to this page"
                        leftIcon="file_upload"
                    />
                    <ListItem
                        caption="Fix &amp; Update Data"
                        leftIcon="edit"
                    />
                    <ListItem
                        caption="Download QIF statements"
                        leftIcon="file_download"
                    />
                </List>
            </CardText>
        </Card>;
    }
}
