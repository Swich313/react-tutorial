import { Component } from 'react';
import './employees-list-item.css';


class EmployyesListItem extends Component{
 constructor (props){
    super(props);
    this.state = {
        increase: false,
        promotion: false
    }
}

onIncrease = () => {
    this.setState(({increase}) => ({
        increase: !increase
    }))
}
addPromotion = () => {
    this.setState(({promotion}) => ({
        promotion: !promotion
    }))
}

render(){
    const {name, salary, onDelete} = this.props;
    const {increase, promotion} = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase){
        classNames+= " increase"
    }
    if (promotion){
        classNames+= " like"
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={this.addPromotion}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"
                    onClick={this.onIncrease}></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

    }
}  

export default EmployyesListItem;