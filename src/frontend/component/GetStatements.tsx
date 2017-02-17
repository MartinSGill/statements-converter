import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem, Navigation } from "react-toolbox";
import { WorkflowStage } from '../constants/WorkflowStage';
import { NextStageButton } from './NextStageButton';
import { nextWorkflowStage } from '../actions/App';

interface GetStatementsProps {
    workflowStage: number;
    onNext: typeof nextWorkflowStage;
}

export function GetStatements(props: GetStatementsProps) {
    if (props.workflowStage === WorkflowStage.GET)
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
                <Navigation>
                    <NextStageButton onNext={props.onNext} />
                </Navigation>
            </CardText>
        </Card>;
    }
    return <div/>
}
