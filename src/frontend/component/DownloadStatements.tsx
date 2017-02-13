import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class DownloadStatements extends React.Component<undefined, undefined> {
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
                </List>
            </CardText>
        </Card>;
    }
}
