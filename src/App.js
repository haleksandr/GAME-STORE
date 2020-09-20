import React from 'react';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import CardItem from './components/CardItem/CardItem';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {setGamesAC} from './redux/reducers';

function App() {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games);
    // const isReady = useSelector(state => state.isReady);

    React.useEffect(() => {
        axios.get('db.json').then(({data}) => {
            setGames(data);
        })
    }, []);

    const setGames = React.useCallback((games) => {
        dispatch(setGamesAC(games));
    }, []);

    return (
        <div className="App">
            <Header />
            <Filter />
            {
                games.map((game, i) => (
                    <CardItem key={i} {...game} />
                ))
            }
        </div>
    );
}

export default App;
