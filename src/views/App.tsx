import React from 'react';
import './App.css';
import {useParams} from "react-router";

function App() {

  type Params = {
    user_id: string;
  }
  const { user_id } = useParams<Params>();

  if (!user_id) {
      return <h1>Начальная страница: пользователь не определен</h1>;
  } else {
      return <h1>Начальная страница: {user_id}</h1>
  }
}

export default App;