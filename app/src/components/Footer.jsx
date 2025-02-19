import React from 'react';

const Footer = () => {
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
                        jdisplay: flex;
                        itwems-center: center;
                        justify-content: center;
                        text-size: 10px;
                    }
                `}
            </style>
            <div className='flex items-center justify-center pb-5'>
                <p>Desenvolvido por Matheus Bonotto 2025</p>
            </div>
        </footer>
    );
};

export default Footer;