import './App.css';
import { NavigateFunction, useNavigate } from "react-router";
import {useEffect, useState} from "react";
import React from 'react'
import {checkHealth} from "../../service/CheckHealth";

const mockInstruments = [
    {
        id: 1,
        name: 'Fender Player Stratocaster',
        type: 'Электрогитара',
        brand: 'Fender',
        brand_country: 'США',
        price: 799.99,
        production_year: 2021,
        num_strings: 6,
        is_electric: true,
        form_factor: 'Stratocaster',
        description: 'Классический стратокастер с современными улучшениями для комфортной игры.',
        materials: {
            body: 'Ольха',
            neck: 'Клён',
            fretboard: 'Палисандр'
        }
    },
    {
        id: 2,
        name: 'Martin D-28',
        type: 'Акустическая гитара',
        brand: 'Martin',
        brand_country: 'США',
        price: 3199.00,
        production_year: 2022,
        num_strings: 6,
        is_electric: false,
        form_factor: 'Dreadnought',
        description: 'Легендарный дредноут, стандарт индустрии для акустических гитар.',
        materials: {
            body: 'Ель / Палисандр',
            neck: 'Красное дерево',
            fretboard: 'Чёрное дерево'
        }
    }
];

function App() {
    const navigate: NavigateFunction = useNavigate();
    const [serverStatus, setServerStatus] = useState<string>('loading');
    const serverHost: string | undefined = process.env.REACT_APP_SERVER_HOST || undefined;
    const serverPort: string | undefined = process.env.REACT_APP_SERVER_PORT || undefined;
    const serverUrl = `${serverHost}:${serverPort}`;
    useEffect(() => {
        (async () => {
            if (await checkHealth(`${serverUrl}/healthz`) && serverHost && serverPort) {
                setServerStatus('connected');
            } else {
                setServerStatus('disconnected');
            }
        })()
    });

    if (serverStatus === 'disconnected_demo') {
        return <h2>Server disconnected</h2>
    }

    return (
        <div className="app">
            <div className="main-container">
                <button className="button" onClick={() => {
                    navigate("/add-instruments");
                }}>
                    Добавить инструмент
                </button>
            </div>
            <div className="error-container"></div>

            <div className="table-container">
                <div className="table-header table-row-layout">
                    <div className="column">Название модели</div>
                    <div className="column column-description">Описание</div>
                    <div className="column">Тип</div>
                    <div className="column">Бренд</div>
                    <div className="column">Страна бренда</div>
                    <div className="column column-materials">Материалы</div>
                    <div className="column">Цена, $</div>
                    <div className="column">Год</div>
                    <div className="column">Кол-во струн</div>
                    <div className="column">Электро</div>
                    <div className="column">Форм-фактор</div>
                    <div className="column-action">Редактировать</div>
                    <div className="column-action">Удалить</div>
                </div>

                {mockInstruments.map((instrument) => (
                    <div className="table-row table-row-layout" key={instrument.id}>
                        <div className="column">{instrument.name}</div>
                        <div className="column column-description">{instrument.description}</div>
                        <div className="column">{instrument.type}</div>
                        <div className="column">{instrument.brand}</div>
                        <div className="column">{instrument.brand_country}</div>

                        <div className="column column-materials">
                            <div><strong>Корпус:</strong> {instrument.materials.body}</div>
                            <div><strong>Гриф:</strong> {instrument.materials.neck}</div>
                            <div><strong>Накладка:</strong> {instrument.materials.fretboard}</div>
                        </div>

                        <div className="column">{instrument.price}</div>
                        <div className="column">{instrument.production_year}</div>
                        <div className="column">{instrument.num_strings}</div>
                        <div className="column">{instrument.is_electric ? 'Да' : 'Нет'}</div>
                        <div className="column">{instrument.form_factor}</div>
                        <div className="column-action">
                            <button className="edit-button" title="Редактировать инструмент">
                                Редактировать
                            </button>
                        </div>
                        <div className="column-action">
                            <button className="delete-button" title="Удалить инструмент">
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;