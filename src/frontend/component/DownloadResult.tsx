import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class DownloadResult extends React.Component<undefined, undefined> {
    render() {
        return <Card>
            <CardTitle
                title="Almost Done"
                subtitle="" />
            <CardText>
                <List>
                    <ListItem
                        caption="Download QIF statements"
                        leftIcon="file_download"
                    />
                </List>
            </CardText>
        </Card>;
    }
}
