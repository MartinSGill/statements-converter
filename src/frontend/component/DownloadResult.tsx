import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem } from "react-toolbox";
import { WorkflowStages } from '../reducers/ApplicationState';

interface DownloadResultProps {
    workflowStage: WorkflowStages;
}

export function DownloadResult(props: DownloadResultProps) {
    if (props.workflowStage === 'Download') {

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

    return <div>Hidden</div>
}
