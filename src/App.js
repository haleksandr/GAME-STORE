import React from 'react';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import CardItem from './components/CardItem/CardItem';
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import {connect} from "react-redux";
import {setGamesAC} from './redux/reducers';
import { Container, Card } from 'semantic-ui-react';

function App({setGames, games}) {

   //  const dispatch = useDispatch();
    // const games = useSelector(state => state.games && searchGames(state.games, state.filterBy, state.searchQuery));
    // const isReady = useSelector(state => state.isReady);

    React.useEffect(() => {
        axios.get('db.json').then(({data}) => {
            setGames(data);
        })
    }, []);

/*    const setGames = React.useCallback((games) => {
        dispatch(setGamesAC(games));
    }, []);*/

    return (
        <Container className="App">
            <Header />
            <Filter />
            <Card.Group itemsPerRow={4}>
                {
                    games && games.map((game, i) => (
                        <CardItem key={i} {...game} />
                    ))
                }
            </Card.Group>
        </Container>
    );
}

const sortBy = (games, filterBy) => {
    switch(filterBy) {
        case 'price_high_to_low':
            return orderBy(games, 'price', 'desc');
        case 'price_low_to_high':
            return orderBy(games, 'price', 'asc');
        case 'company':
            return orderBy(games, 'company', 'asc');
        default:
            return games;
    }
};

const filterGames = (games, searchQuery) =>
    games.filter(
        o =>
            o.title.toUpperCase().indexOf(searchQuery.toUpperCase()) >= 0 ||
            o.company.toUpperCase().indexOf(searchQuery.toUpperCase()) >= 0
    );

const searchGames = (games, filterBy, searchQuery) => {
    return sortBy(filterGames(games, searchQuery), filterBy)
}

const mapStateToProps = (state) => {
    return {
        games: state.games && searchGames(state.games, state.filterBy, state.searchQuery)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setGames: (games) => {
            dispatch(setGamesAC(games))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

