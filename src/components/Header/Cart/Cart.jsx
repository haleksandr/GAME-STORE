import React from 'react';
import { Menu, Popup, List, Button, Image, Icon } from 'semantic-ui-react';
import {connect} from "react-redux";
import {removeFromShoppingCartAC, minusFromShoppingCartAC} from "../../../redux/reducers";

let Cart = ({minusFromShoppingCart, removeFromShoppingCart, addedCount, id, title, image}) => {

    console.log(addedCount);

    return (
        <List selection divided verticalAlign='middle' >
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={minusFromShoppingCart} icon>
                        <Icon name='minus' />
                    </Button>
                    <Button onClick={removeFromShoppingCart.bind(this, id)} color="red">
                        REMOVE
                    </Button>
                </List.Content>
                <Image avatar src={image} />
                <List.Content>
                    {title} &nbsp; {addedCount > 0 && `(${addedCount})`}
                </List.Content>
            </List.Item>
        </List>
    )
};

/*
const addedCount = useSelector(state => state.cartItems.reduce(
    (count, book) => count + (book.id === props.id ? 1 : 0), 0));
*/

const mapStateToProps = (state, {id}) => {
    return {
        addedCount: state.cartItems.reduce(
            (count, game) => count + (game.id === id ? 1 : 0), 0)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        minusFromShoppingCart: (id) => {
            dispatch(minusFromShoppingCartAC(id))
        },
        removeFromShoppingCart: (id) => {
            dispatch(removeFromShoppingCartAC(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);