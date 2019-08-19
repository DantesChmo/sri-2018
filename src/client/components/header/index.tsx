import * as React from 'react';
import './header.pcss';

export class Header extends React.Component {
    render(): React.ReactNode {

        return (
            <div>
                <div className="Header">
                    <div className="Logo Header-Logo">
                        <span className='Logo_first' >яндекс</span>
                        <span className='Logo_second'>дом</span>
                    </div>
                    <div className="Header-Navigation">
                        <div className="Header-Navigation-Item Header-Navigation-Item_active"><a href="#" className="Header-Navigation-Item-link">Сводка</a></div>
                        <div className="Header-Navigation-Item"><a href="#" className="Header-Navigation-Item-link">Устройства</a></div>
                        <div className="Header-Navigation-Item"><a href="#" className="Header-Navigation-Item-link">Сценарии</a></div>
                    </div>
                </div>
                <hr className="HorizontalLine" />
            </div>
        );
    }
}
