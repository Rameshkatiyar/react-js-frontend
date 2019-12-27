import React from 'react';
import { Grid } from 'semantic-ui-react'
import ComponentOne from './components/componentOne';
import ComponentTwo from './components/componentTwo';
import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div>
        <Grid>
            <Grid.Row></Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column></Grid.Column>
                <Grid.Column><SearchMovie/></Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
            <Grid.Row></Grid.Row>
            <br/><br/>
            <Grid.Row columns={5}>
                <Grid.Column></Grid.Column>
                <Grid.Column><ComponentOne/></Grid.Column>
                <Grid.Column></Grid.Column>
                <Grid.Column><ComponentTwo/></Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
  );
}

export default App;
