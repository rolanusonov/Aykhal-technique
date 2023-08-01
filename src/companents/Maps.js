import React from 'react';
import imgWat from './img/wat.svg';
import imgTele from './img/telegram.svg';
import imgMaps from './img/mapMetka.svg';
import imgtel from './img/tel.svg';
import imgSber from './img/sberbank.svg.svg'
const Maps = () => {
    return (
        <div id="map">

            <div className="container">
                <div className="map">
                    <h1>Контакты</h1>
                    <p>Звоните, проконсультируем, подберем лучшие варианты</p>

                        <div className="mapBlock">
                            <div className="mapContact">
                                <div>
                                    <img src={imgtel} alt=""/>
                                    <a href="tel:+79244613586">+7 (924) 461-35-86</a>
                                </div>
                                <div>
                                    <img src={imgWat} alt=""/>
                                    <a href="https://wa.me/+79244613586">+7 (924) 461-35-86</a>
                                </div>
                              
                                <div>
                                    <img src={imgMaps} alt=""/>
                                    <p>Респ. Саха (Якутия) поселок Айхал.Промышленная 33</p>
                                </div>
                                <div>
                                    <h2>Принимаем к оплате</h2>
                                </div>
                                <div>
                                    <img src={imgSber} alt="" className="paymentImg"/>
                                </div>

                            </div>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d4979.113473331055!2d111.50240552148736!3d65.95015590037123!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d65.94950659999999!2d111.5049889!5e0!3m2!1sru!2sru!4v1688012779834!5m2!1sru!2sru"
                                    className="mapName"  allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>


                </div>
            </div>
        </div>
    );
};

export default Maps;