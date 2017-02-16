import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";
import { WorkflowStages } from '../reducers/ApplicationState'

interface ModifyDataProps {
    workflowStage: WorkflowStages;
}

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export function ModifyData(props: ModifyDataProps) {
    if (props.workflowStage === 'Modify')
    {
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

    return <div>Hidden!</div>
}
