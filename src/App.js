
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Table from './components/Table';

function App() {
  const [inputvalue, setinputvalue] = useState("");
  const btnclick = () => { console.log('Button Clicked') }
  const rows = [
    { id: 1, first: 'Wajiha', lastName: 'mukhtar', age: 19 },
    { id: 2, first: 'Ali', lastName: 'munawer', age: 23 },
    { id: 3, first: 'Ahmer', lastName: 'mukhtar', age: 25 },
    { id: 4, first: 'Yamna', lastName: 'akhter', age: 18 }
  ];

  const columns = [
    { feild: 'id', headerName: 'ID', width: '70' },
    { feild: 'first', headerName: 'First Name', width: '150' },
    { feild: 'lastName', headerName: 'Last Name', width: '150' },
    { feild: 'age', headerName: 'Age', width: '70' }
  ];
  return (
    <div>
      <Input
        type={'text'}
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
        placeholder='Enter todo value.'
      />
      <Button onClick={btnclick} text="Add" className='bg-red-400 px-3 border rounded' />
      <Table className='text-red-700' columns={columns} rows={rows} />
    </div>
  );
}

export default App;
