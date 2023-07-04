import React from 'react';
import logoHome from './img/logoHome.svg'
import logoSet from './img/logoSettings.svg'
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="headBlock">
                        <div className="headLogo">
                            <img src={logoHome} alt='' className='headLogoHome' />
                            <img src={logoSet} alt='' className="headlogoSet" />
                        </div>


                        <h1 className="nameHead">ООО УК "АйхалЦентр"</h1>
                        <a href="tel:+79244613586" className="numberHeadBlock">
                            <svg className='headNumberIcon' viewBox="0 0 41 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.470001" width="40" height="40" rx="20" fill="#1A1A1A" fillOpacity="0.1" />
                                <g clipPath="url(#clip0_1_36)">
                                    <g clipPath="url(#clip1_1_36)">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M26.597 27.7025L25.2225 24.7425C25.1215 24.5251 24.9607 24.3411 24.7589 24.2118C24.5571 24.0825 24.3227 24.0134 24.083 24.0125C23.9623 24.0125 23.8422 24.03 23.7265 24.0645L22.092 24.497C21.857 24.2935 21.105 23.4795 19.7635 20.5915C18.4145 17.6865 18.2815 16.595 18.279 16.29L19.6595 15.3065C19.9096 15.1372 20.0914 14.8847 20.1728 14.5939C20.2541 14.3031 20.2295 13.9929 20.1035 13.7185L18.729 10.758C18.6238 10.5321 18.4564 10.3409 18.2465 10.2066C18.0365 10.0724 17.7927 10.0007 17.5435 10C17.2925 10 17.0475 10.073 16.8355 10.211L16.0135 10.7455C15.284 11.1985 14.7695 11.8875 14.4845 12.7925C14.2345 13.588 14.161 14.556 14.2675 15.6695C14.446 17.542 15.149 19.8765 16.2475 22.242C17.1985 24.2895 18.351 26.1435 19.4935 27.4635C20.95 29.1465 22.384 30 23.7555 30C24.133 30 24.507 29.9335 24.8675 29.8025L25.799 29.5135C25.9776 29.4571 26.1421 29.3632 26.2815 29.2382C26.4209 29.1132 26.5321 28.9599 26.6076 28.7885C26.6831 28.6171 26.7213 28.4316 26.7194 28.2444C26.7176 28.0571 26.6759 27.8724 26.597 27.7025Z"
                                            fill="#1A1A1A" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_36">
                                        <rect width="20" height="20" fill="white" transform="translate(10.47 10)" />
                                    </clipPath>
                                    <clipPath id="clip1_1_36">
                                        <rect width="20" height="20" fill="white" transform="translate(10.47 10)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h1 className="numberHead">+7 (924) 461-35-86</h1>
                        </a>
                    </div>
                    <a href="#map"
                        className="headPathMap">
                        <svg className='headNumberIcon' viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.609985" width="40" height="40" rx="20" fill="#1A1A1A" fillOpacity="0.1" />
                            <g clipPath="url(#clip0_1_48)">
                                <g clipPath="url(#clip1_1_48)">
                                    <path opacity="0.9" fillRule="evenodd" clipRule="evenodd"
                                        d="M20.61 10C16.75 10 13.61 13.121 13.61 16.9565C13.61 18.7795 14.752 21.514 17.0035 25.0835C18.0504 26.7347 19.1734 28.3365 20.369 29.8835C20.3978 29.9199 20.4344 29.9492 20.4761 29.9694C20.5179 29.9896 20.5636 30 20.61 30H20.611C20.6574 30 20.7033 29.9894 20.745 29.969C20.7868 29.9486 20.8233 29.9191 20.852 29.8825C20.8685 29.8605 22.554 27.697 24.2165 25.0505C26.4685 21.4665 27.61 18.7435 27.61 16.9565C27.61 13.121 24.47 10 20.61 10ZM20.61 20.3115C18.7485 20.3115 17.2345 18.8065 17.2345 16.9565C17.2345 15.107 18.7485 13.602 20.61 13.602C22.4715 13.602 23.9855 15.107 23.9855 16.9565C23.9855 18.8065 22.4715 20.3115 20.61 20.3115Z"
                                        fill="#1A1A1A" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_48">
                                    <rect width="20" height="20" fill="white" transform="translate(10.61 10)" />
                                </clipPath>
                                <clipPath id="clip1_1_48">
                                    <rect width="20" height="20" fill="white" transform="translate(10.61 10)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='headAddress'>Респ. Саха (Якутия) село Айхал.Промышленная 33</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;