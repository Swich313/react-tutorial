import EmployyesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';

const EmployyesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployyesListItem />
            <EmployyesListItem />
            <EmployyesListItem />
        </ul>
    )
}

export default EmployyesList;