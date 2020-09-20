import React from 'react';
import {Menu, Input} from 'semantic-ui-react';
import {useDispatch, useSelector} from "react-redux";
import {setFilterAC} from "../../redux/reducers";

const Filter = (props) => {

    const dispatch = useDispatch();
    const filterBy = useSelector(state => state.filterBy);

    const setFilter = React.useCallback((filter) => {
        dispatch(setFilterAC(filter))
    }, []);

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
                    active={filterBy === 'author'}
                    onClick={setFilter.bind(this, 'author')}
                >
                    AUTHOR(A-Z)
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
};

export default Filter;