import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';
import { TableProvider } from './services/TableContext';
import { useState } from 'react';


function App() {
  let [tableDataList, setTableDataList] = useState([]);
  
  return (
    <div className="App">
      <TableProvider>
        <Table></Table>
      </TableProvider>
    </div>
  );
}

export default App;
