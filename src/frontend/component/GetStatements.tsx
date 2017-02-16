import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";
import { WorkflowStages } from '../reducers/ApplicationState';

interface GetStatementsProps {
    workflowStage: WorkflowStages;
}

export function GetStatements(props: GetStatementsProps) {
    if (props.workflowStage === 'Get')
    {
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

    return <div>Hidden</div>
}
