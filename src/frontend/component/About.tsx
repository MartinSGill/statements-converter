import * as React from "react";
import { Card, CardTitle, CardText } from "react-toolbox";

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class About extends React.Component<undefined, undefined> {
    render() {
        return <Card>
            <CardTitle
                title="About"
                subtitle="or what's the point?" />
            <CardText>
               <p>
                   Statements (Mutaties) from the ABN Amro online banking
site do not come in the nicest of formats. Specifically
ABN Amro does not provide OFX or even QIF formats, which
are the defacto standards for banking software.
                </p>    
                <p>
This site aims make it easy (or at least easier) to get 
those statements from ABN Amro into a format more easily
consumed by various banking software.
                </p>
            </CardText>
        </Card>;
    }
}
