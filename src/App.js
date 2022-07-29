import './App.css';
import { ToastContainer } from 'react-toastify';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
import { useState } from 'react';
import { AddUser, UpdateUser } from './utils/functions';

const initialValues = { username: '', phoneNumber: '', gender: '' };

function App() {
  const [info, setInfo] = useState(initialValues);
  const [update, setUpdate] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
      setUpdate(false);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setUpdate(true);
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
        update={update}
      />
      <Contacts editUser={editUser} />
      <ToastContainer />
    </div>
  );
}

export default App;
