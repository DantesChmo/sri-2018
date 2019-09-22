import * as React from 'react';
import './header.pcss';

export class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='HeaderWrapper'>
                <div className='Header'>
                    <div className='Logo Header-Logo'>
                        <span className='Logo-First' >яндекс</span>
                        <span className='Logo-Second'>дом</span>
                    </div>
                    <div className='Navigation Header-Navigation'>
                        <div className='NavigationItemWrap Navigation-Item Navigation-Item_active'>
                            <a href='#' className='NavigationItemWrap-Link'>Сводка</a>
                        </div>
                        <div className='NavigationItemWrap Navigation-Item'>
                            <a href='#' className='NavigationItemWrap-Link'>Устройства</a>
                        </div>
                        <div className='NavigationItemWrap Navigation-Item'>
                            <a href='#' className='NavigationItemWrap-Link'>Сценарии</a>
                        </div>
                    </div>
                </div>
                <hr className='HorizontalLine' />
            </div>
        );
    }
}
