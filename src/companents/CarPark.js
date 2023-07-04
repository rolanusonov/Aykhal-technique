import React from 'react';
import imgTrac1 from './img/3.jpg'
import imgTrac2 from './img/16425277045425224_384.jpg'
import imgTrac3 from './img/Traktor-MTZ-892.jpg'
import imgMaz1 from './img/MAZ_5551_2.jpg'
import imgMaz2 from './img/МАЗ 533605.jpg'
import imgCat1 from './img/экскаватор-погрузчика-колес-на-работе-бульдозер-загружает-песок-160738560.webp'
import imgCat2 from './img/2029_326775476141.jpg'
import imgAnco1 from './img/amkodor-211-2.jpg'
import imgAnco2 from './img/amkodor-211.jpg'
import imgCargo from './img/456x342n.webp'

const CarPark = () => {
    return (
        <div id="carPark">
            <div className="container">
                <div className="carPark">
                    <div className="carBlockDesc">
                        <h1 className="carTitle">Автопарк</h1>
                        <p className="carDesc">Наша компания располагает собственным автопарком высокопроизводительной
                            техники для выполнения широкого спектра
                            строительных и других работ.</p>
                    </div>
                    <div className="carTabs">
                        <input type="radio" id="trac" name="tabs" className="tabsInput"/>
                        <input type="radio" id="maz" name="tabs" className="tabsInput"/>
                        <input type="radio" id="kat" name="tabs" className="tabsInput"/>
                        <input type="radio" id="anco" name="tabs" className="tabsInput"/>
                        <input type="radio" id="cargo" name="tabs" className="tabsInput"/>
                        <input type="radio" id="oll" name="tabs" className="tabsInput"/>


                        <label htmlFor="oll" className="tabsBtnOll olloll">Все</label>
                        <label htmlFor="trac" className="tabsBtn tractor">Трактор</label>
                        <label htmlFor="maz" className="tabsBtn carMaz">Маз</label>
                        <label htmlFor="anco" className="tabsBtn carAnco">Анкадор</label>
                        <label htmlFor="cargo" className="tabsBtn cargos">грузовой</label>
                        <label htmlFor="kat" className="tabsBtn tracKat">Кат</label>


                        <div className="trac tabsBlock ">
                            <div className="tracCard">
                                <img src={imgTrac1} alt="" className="tabsImg"/>
                                <h1 className="tracName">Трактор</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                            <div className="tracCard">
                                <img src={imgTrac2} alt="" className="tabsImg"/>
                                <h1 className="tracName">Трактор</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                            <div className="tracCard">
                                <img src={imgTrac3} alt="" className="tabsImg"/>
                                <h1 className="tracName">Трактор</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>


                        </div>
                        <div className="maz tabsBlock">
                            <div className="tracCard">
                                <img src={imgMaz1} alt="" className="tabsImg"/>
                                <h1 className="tracName">Маз</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                            <div className="tracCard">
                                <img src={imgMaz2} alt="" className="tabsImg"/>
                                <h1 className="tracName">Маз</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>

                        </div>
                        <div className="kat tabsBlock">
                            <div className="tracCard">
                                <img src={imgCat1} alt="" className="tabsImg"/>
                                <h1 className="tracName">Кат</h1>
                                <h2 className="tracPrice"> Цена<span>5 000</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                            <div className="tracCard">
                                <img src={imgCat2} alt="" className="tabsImg"/>
                                <h1 className="tracName">Кат</h1>
                                <h2 className="tracPrice"> Цена<span>5 000</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                        </div>
                        <div className="anco tabsBlock">
                            <div className="tracCard">
                                <img src={imgAnco1} alt="" className="tabsImg"/>
                                <h1 className="tracName">Анкадор</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                            <div className="tracCard">
                                <img src={imgAnco2} alt="" className="tabsImg"/>
                                <h1 className="tracName">Анкадор</h1>
                                <h2 className="tracPrice"> Цена<span>3 500</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>
                        </div>
                        <div className="cargo tabsBlock">
                            <div className="tracCard">
                                <img src={imgCargo} alt="" className="tabsImg"/>
                                <h1 className="tracName">Грузовой</h1>
                                <h2 className="tracPrice"> Цена<span>2 000</span>руб/час</h2>
                                <a href="tel:+79244613586" className="tracCardBtn">Заказать</a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarPark;