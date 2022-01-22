import EmployyesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';

const EmployyesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployyesListItem key={id} 
            {...itemProps}
            onDelete={()=>onDelete(id)} /> // {...item} instead of props
        )
    })
    
    return (
        <ul className="app-list list-group">
            {elements}         
        </ul>
    )
}

export default EmployyesList;