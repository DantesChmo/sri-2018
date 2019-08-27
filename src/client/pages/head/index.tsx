import * as React from 'react';
import { Header } from '../../components/header/index';
import './app.pcss';

export class Main extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="MainWrapper">
                <Header />
            </div>
        );
    }
}
