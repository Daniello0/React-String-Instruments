import React from 'react';
import './App.css';
import {NavigateFunction, useNavigate} from "react-router";

function App() {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="app">
            <div className="main-container">
                <button className="button" onClick={() => {
                    navigate("/add-instruments");
                }}>
                    Добавить
                </button>
            </div>
            <div className="error-container"></div>
            <div className="urls-container">
                <div className="urls-header url-row-layout">
                    <div className="column-main-url">Основная ссылка</div>
                    <div className="column-short-url">Сокращенная ссылка</div>
                    <div className="column-stats">Статистика</div>
                    <div className="column-action">Действие</div>
                </div>

                <div className="url-row url-row-layout">
                    <div className="column-main-url">
                        <a className="url-text" href='https://google.com'
                           target="_blank" rel="noopener noreferrer">
                            https://google.com
                        </a>
                    </div>
                    <div className="column-short-url">
                        <div className="url-text" role="link">
                            {window.location.origin + "/"}
                        </div>
                    </div>
                    <div className="column-stats">
                        <div
                             className="stats-link">
                            {window.location.origin + "/stat/"}
                        </div>
                    </div>
                    <div className="column-action">
                        <button className="delete-button" title="Удалить ссылку">
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;