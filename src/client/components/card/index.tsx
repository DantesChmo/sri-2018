import * as React from 'react';
import './header.pcss';

export class Header extends React.Component {
    render(): React.ReactNode {

        return (
            <div className="HeaderWrapper">
                <div className="Header">
                    <div className="Logo Header-Logo">
                        <span className='Logo-First' >яндекс</span>
                        <span className='Logo-Second'>дом</span>
                    </div>
                    <div className="Header-Navigation Navigation">
                        <div className="Navigation-Item Navigation-Item_active NavigationItemWrap">
                            <a href="#" className="NavigationItemWrap-link">Сводка</a>
                        </div>
                        <div className="Navigation-Item NavigationItemWrap">
                            <a href="#" className="NavigationItemWrap-link">Устройства</a>
                        </div>
                        <div className="Navigation-Item NavigationItemWrap">
                            <a href="#" className="NavigationItemWrap-link">Сценарии</a>
                        </div>
                    </div>
                </div>
                <hr className="HorizontalLine" />
            </div>
        );
    }
}
