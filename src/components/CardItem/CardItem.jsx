import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addToShoppingCartAC} from '../../redux/reducers';

const CardItem = (game) => {

    const {addToShoppingCart, addedCount, image, title, company, price} = game;

    return (
        <Card style={{"margin-top": "25px"}}>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{company}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='dollar'/>
                    {price}
                </a>
            </Card.Content>
            <Card.Content>
                <Button onClick={addToShoppingCart.bind(this, game)}>
                    ADD {addedCount > 0 && `(${addedCount})`}
                </Button>
            </Card.Content>
        </Card>
    )
};

/*const dispatch = useDispatch();
const addToShoppingCart = React.useCallback((item) => {
    dispatch(addToShoppingCartAC(item));
}, []);
const cartItems = useSelector(state => state.cartItems);
const addedCount = (cartItems.reduce(
    (count, game) => count + (game.id === props.id ? 1 : 0), 0));
// const addedCount = useSelector(state => state.cartItems.length);*/


const mapStateToProps = (state, {id}) => {
    return {
        addedCount: state.cartItems.reduce( (count, game) => count + (game.id === id ? 1 : 0), 0)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToShoppingCart: (obj) => {
            dispatch(addToShoppingCartAC(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);