import React from 'react';
import Header from './components/header';
import SideBar from './components/sidebar';
import UserList from './components/userList';

function App() {
  return (
    <div>
        Welcome to MyBook App!
        <Header user={'Ramesh'}/>
        <SideBar/>
        <UserList/>
    </div>
  );
}

export default App;
