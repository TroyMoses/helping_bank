import './css/globals.css';
import './css/bootstrap.css';
import './css/css_slider.css';
import './css/font-awesome.min.css';
import './css/style.css';
import Head from 'next/head';

export const metadata = {
    title: 'Helping Bank',
    description: 'Developed by TroyMoses',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Head>
                <link rel="shortcut icon" href="./public/assets/helping bank.jpg" alt="" className="img-fluid" />
            </Head>
            <body>
                { children }
            </body>
        </html>
    )
}