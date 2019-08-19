import * as React from 'react';
import { Head } from '../pages/head';
import './app.pcss';

export class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <Head />
            </div>
        );
    }
}
