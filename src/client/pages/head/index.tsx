import * as React from 'react';
import { Header } from '../../components/header/index';
import './app.pcss';

export class Head extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <Header />
            </div>
        );
    }
}