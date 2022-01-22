import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployyesList from '../employees-list/employees-list';
import EmployyesListItem from '../employees-list-item/employees-list-item';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App () {

    const data = [
        {name: 'Smith C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 1500, increase: true, id: 2},
        {name: 'Carl W.', salary: 300, increase: false, id: 3}
    ];

    
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployyesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}


export default App;