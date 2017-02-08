import * as React from "react";
import { AppBar, Button } from 'react-toolbox';
import { Logo } from './Logo';
const theme = require<any>('./SiteBar.css');

// No props, so use undefined
// State is never set so we use the 'undefined' type.
export class SiteBar extends React.Component<undefined, undefined> {
    render() {
        return <AppBar theme={theme}>
            <Logo/>
            Abn Amro Statement Converter
        </AppBar>;
    }
}
