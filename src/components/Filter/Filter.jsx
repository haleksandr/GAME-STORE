import React from 'react';
import {Menu, Input} from 'semantic-ui-react';
import {connect} from "react-redux";
import {setFilterAC, setQueryAC} from "../../redux/reducers";

const Filter = ({filterBy, setFilter, searchQuery, setQuery}) => {
    return (
        <div>
            <Menu secondary>
                <Menu.Item
                    active={filterBy === 'all'}
                    onClick={setFilter.bind(this, 'all')}
                >
                    ALL
                </Menu.Item>
                <Menu.Item
                    active={filterBy === 'price_high_to_low'}
                    onClick={setFilter.bind(this, 'price_high_to_low')}
                >
                    PRICE(HIGH to LOW)
                </Menu.Item>
                <Menu.Item
                    active={filterBy === 'price_low_to_high'}
                    onClick={setFilter.bind(this, 'price_low_to_high')}
                >
                    PRICE (LOW to HIGH)
                </Menu.Item>
                <Menu.Item
                    active={filterBy === 'company'}
                    onClick={setFilter.bind(this, 'company')}
                >
                    AUTHOR(A-Z)
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search'
                               placeholder='Search'
                               value={searchQuery}
                               onChange={e => setQuery(e.target.value)} />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filterBy: state.filterBy,
        searchQuery: state.searchQuery
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilterAC(filter))
        },
        setQuery: (query) => {
            dispatch(setQueryAC(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);