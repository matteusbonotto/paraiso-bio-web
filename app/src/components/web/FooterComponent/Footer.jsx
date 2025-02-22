import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <footer className="footer">
            <style>
                {`
                    .footer {
                        background-color: #333;
                        color: white;
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        height: 30px;
                        line-height: 10px;
                        padding-top: 22px;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        font-size: 12px;
                    }
                `}
            </style>
            <div className='flex items-center justify-center pb-5'>
                {isMobile ? (
                    <p>Versão Mobile - Desenvolvido por Matheus Bonotto 2025</p>
                ) : (
                    <p>Versão Desktop - Desenvolvido por Matheus Bonotto 2025</p>
                )}
            </div>
        </footer>
    );
};

export default Footer;