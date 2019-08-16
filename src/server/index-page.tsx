import * as React from 'react';

export interface Props {
    title: string;
}

export function IndexPage(props: Props): React.ReactElement {
    return (
        <html>
            <head>
                <meta charSet='utf-8' />
                <title>{props.title}</title>
                <meta name='viewport' content='width=device-width,minimum-scale=1.0' />
                <style>{'.Page{margin:0;padding:0;}'}</style>
            </head>
            <body className='Page'>
                <div id='root' />
                <script src='main.js' />
            </body>
        </html>
    );
}
