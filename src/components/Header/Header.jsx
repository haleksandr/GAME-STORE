import React from 'react';
import {Menu, Popup, Button} from 'semantic-ui-react';
import uniqBy from 'lodash/uniqBy';
import Cart from './Cart/Cart';
import {connect} from 'react-redux';

const Header = ({totalPrice, count, cartItems, test}) => {

    console.log('totalPrice: ', totalPrice);
    console.log('cartItems: ', test);

    return (
        <Menu>
            <Menu.Item header style={{"background-color": "#003087", "color": "white"}}>GAMES STORE</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    Total: &nbsp; <b>{totalPrice}</b> &nbsp; usd.
                </Menu.Item>
                <Popup
                    trigger={
                        <Menu.Item content='Button'>
                            Shopping Cart (<b>{count}</b>)
                        </Menu.Item>
                    }
                    content={ cartItems.map((game, i) => <Cart key={i} {...game} />) }
                    on='click'
                    hideOnClick
                />
            </Menu.Menu>
        </Menu>
    )
};

// const totalPrice = useSelector( state => state.cartItems.reduce( (total, game) => total + game.price, 0 ) );

const mapStateToProps = (state) => {
    return {
        cartItems: uniqBy(state.cartItems, o => o.id),
        totalPrice: state.cartItems.reduce((total, game) => total + game.price, 0),
        count: state.cartItems.length,
        test: state.cartItems
        // totalPrice: state.items.reduce((total, book) => total + book.price, 0),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);