import React, {Component} from 'react';
import Auxs from '../../../hoc/Auxs/Auxs';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.module.css';

class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span>
                        {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Auxs>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxs>
        );
    }


};

export default OrderSummary;