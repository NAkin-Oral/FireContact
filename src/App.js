import { useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';

const initialValues = { username: '', phoneNumber: '', gender: '' };

function App() {
  const [info, setInfo] = useState(initialValues);
  return (
    <div className="App">
      <FormComponent setInfo={setInfo} info={info} />
      <Contacts />
    </div>
  );
}

export default App;
