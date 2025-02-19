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
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        line-height: 10px;
                        padding-top: 10px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 10px;
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