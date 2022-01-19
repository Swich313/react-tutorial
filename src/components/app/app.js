import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployyesList from '../employees-list/employees-list';
import EmployyesListItem from '../employees-list-item/employees-list-item';
import EmployeesAddForm
 from '../employees-add-form/employees-add-form';
function App () {
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployyesList />
            <EmployeesAddForm />
        </div>
    )
}


export default App;