import * as React from 'react';
import { Header } from './common/header';

export class App extends React.Component<undefined, undefined>{
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}