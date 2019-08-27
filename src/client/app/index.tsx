import * as React from 'react';
import { Main } from '../pages/head';
import './app.pcss';

export class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}
