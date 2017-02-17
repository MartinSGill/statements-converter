import * as React from "react";
import { Card, CardTitle, CardText, List, ListItem, Navigation } from "react-toolbox";
import { WorkflowStage } from '../constants/WorkflowStage';
import { nextWorkflowStage, prevWorkflowStage } from '../actions/App';
import { NextStageButton } from './NextStageButton';
import { PreviousStageButton } from './PreviousStageButton';

interface ModifyDataProps {
    workflowStage: number;
    onNext: typeof nextWorkflowStage;
    onPrevious: typeof prevWorkflowStage;
}

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export function ModifyData(props: ModifyDataProps) {
    if (props.workflowStage === WorkflowStage.MODIFY)
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
                <Navigation>
                    <PreviousStageButton onPrevious={props.onPrevious} />
                    <NextStageButton onNext={props.onNext} />
                </Navigation>
            </CardText>
        </Card>;
    }
    return <div/>
}
