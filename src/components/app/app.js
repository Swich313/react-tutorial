import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployyesList from '../employees-list/employees-list';
import EmployyesListItem from '../employees-list-item/employees-list-item';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
constructor(props){
    super(props);
    this.state = {
         data: [
            {name: 'Smith C.', salary: 800, increase: false, id: 1},
            {name: 'Alex M.', salary: 1500, increase: true, id: 2},
            {name: 'Carl W.', salary: 300, increase: false, id: 3}
        ]
    }
    this.maxId = 4;
}
    
deleteItem = (id) => {
    this.setState(({data})=>{
    // const index = data.findIndex(item=>item.id===id)
    // const before = data.slice(0, index);
    // const after = data.slice (index + 1);
    // const newData = [...after, ...before];
    
    const newData = data.filter(item => {       //shortcut (item =>item.id!==id)
        return item.id!==id
    })
    return {
        data: newData
    }
    
});
}

createItem = (name, salary) => {
    const newItem = {
        name,
        salary,
        increase: false,
        id: uuidv4()
    }
    console.log(newItem)
    this.setState(({data})=>{
        const newData = [...data, newItem];
        return{
            data: newData
        }
    })

}    

   render() {
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployyesList data={this.state.data} onDelete={this.deleteItem}/>
            <EmployeesAddForm onAdd={this.createItem}/>
        </div>
    )
   }
}


export default App;