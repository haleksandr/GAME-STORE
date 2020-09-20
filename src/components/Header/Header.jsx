import React from 'react';
import {Menu, Popup, Button} from 'semantic-ui-react';
import uniqBy from 'lodash/uniqBy';
import CardItem from './Cart/Cart';
import {useSelector} from 'react-redux';

const Header = (props) => {

    const games = useSelector(state => state.games);

    return (
        <Menu>
            <Menu.Item header>GAMES STORE</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    Total: {props.totalPrice}
                </Menu.Item>
                <Popup
                    trigger={
                        <Menu.Item content='Button'>
                            Shopping Cart (<b>{props.count}</b>)
                        </Menu.Item>
                    }
                    content={ games.map((game, i) => <CardItem key={i} {...game} />) }
                    //content={games}
                    on='click'
                    hideOnScroll
                />
            </Menu.Menu>
        </Menu>
    )
};

export default Header;