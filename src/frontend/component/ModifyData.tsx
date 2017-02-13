import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class ModifyData extends React.Component<undefined, undefined> {
    render() {
        return <Card>
            <CardTitle
                title="Modify Data"
                subtitle="" />
            <CardText>
                <List>
                    <ListItem
                        caption="Fix &amp; Update Data"
                        leftIcon="edit"
                    />
                </List>
            </CardText>
        </Card>;
    }
}
