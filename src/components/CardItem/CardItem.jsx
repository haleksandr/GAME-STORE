import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';
import {addToShoppingCartAC} from '../../redux/reducers';

const CardItem = (props) => {

    const dispatch = useDispatch();

    const addToShoppingCart = React.useCallback((item) => {
        dispatch(addToShoppingCartAC(item));
        console.log('click');
    }, []);

    const addedCount = useSelector(state => state.cartItems.reduce(
        (count, game) => count + (game.id === props.id ? 1 : 0), 0));

    console.log(props);

    return (
        <Card>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.company}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='dollar'/>
                    {props.price}
                </a>
            </Card.Content>
            <Card.Content>
                <Button onClick={addToShoppingCart.bind(this, props.id)}>
                    ADD ({addedCount > 0 && `(${addedCount})`})
                </Button>
            </Card.Content>
        </Card>
    )
};

export default CardItem;