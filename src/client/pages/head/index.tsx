import * as React from 'react';
import './app.pcss';
import {Header} from '../../components/header/index';

export class App extends React.Component {
    render(): React.ReactNode {
        return (
                <div>
                    <Header />
                </div>
                );
    }
}
