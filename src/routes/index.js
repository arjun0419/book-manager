import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {
  WelcomePage,
  AllBooksPage,
  SingleBookPage,
  AddNewBookPage,
  AllNotesPage,
  ImportExportPage,
  SettingsPage,
  AboutAppPage,
} from '../ui/pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/all-books" component={AllBooksPage} />
      <Route path="/add-book" component={AddNewBookPage} />
      <Route path="/edit/:id" component={AddNewBookPage} />
      <Route path="/books/:id" component={SingleBookPage} />
      <Route path="/all-notes" component={AllNotesPage} />
      <Route path="/exim" component={ImportExportPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/about" component={AboutAppPage} />
    </Switch>
  </Router>
);

export default Routes;
