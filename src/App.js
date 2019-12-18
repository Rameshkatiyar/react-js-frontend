import React from 'react';
// import Header from './components/header';
// import SideBar from './components/sidebar';
// import UserList from './components/userList';
// import { Segment } from 'semantic-ui-react'
import ComponentOne from './components/componentOne';
import ComponentTwo from './components/componentTwo';
import Counter from './components/Counter';

function App() {
  return (
    <div>
        {/*<Header user={'Ramesh'}/>*/}
        {/*<Segment>Welcome to MyBook App!</Segment>*/}
        {/*<SideBar/>*/}
        {/*<UserList/>*/}
        <div>
            <Counter/>
            <br/>
            <ComponentOne/>
            <br/>
            <ComponentTwo/>
        </div>
    </div>
  );
}

export default App;
