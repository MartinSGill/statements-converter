import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem, Navigation } from "react-toolbox";
import { WorkflowStage } from "../constants/WorkflowStage";
import { prevWorkflowStage } from "../actions/App";
import { PreviousStageButton } from "./PreviousStageButton";

interface DownloadResultProps {
    workflowStage: number;
    onPrevious: typeof prevWorkflowStage;
}

export function DownloadResult(props: DownloadResultProps) {
    if (props.workflowStage === WorkflowStage.DOWNLOAD) {

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
                <Navigation>
                    <PreviousStageButton onPrevious={props.onPrevious} />
                </Navigation>
            </CardText>
        </Card>;
    }
    return <div/>
}
