import React from 'react';
import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoutes from './Components/authRoutes/privateRoutes';
import PublicRoutes from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/AddEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayer from './Components/admin/players/AddEditPlayer';

const Routes = props => {
  return (
    <div>
      <Layout>
        <Switch>
          <PrivateRoutes
            {...props}
            path='/admin_players/add_player'
            exact
            component={AddEditPlayer}
          />
          <PrivateRoutes
            {...props}
            path='/admin_players/add_player/:id'
            exact
            component={AddEditPlayer}
          />
          <PrivateRoutes
            {...props}
            path='/admin_players'
            exact
            component={AdminPlayers}
          />
          <PrivateRoutes
            {...props}
            path='/admin_matches/edit_match'
            exact
            component={AddEditMatch}
          />
          <PrivateRoutes
            {...props}
            path='/admin_matches/edit_match/:id'
            exact
            component={AddEditMatch}
          />
          <PrivateRoutes
            {...props}
            path='/admin_matches'
            exact
            component={AdminMatches}
          />
          <PrivateRoutes
            {...props}
            path='/dashboard'
            exact
            component={Dashboard}
          />
          <PublicRoutes
            {...props}
            restricted={true}
            path='/sign_in'
            exact
            component={SignIn}
          />
          <PublicRoutes
            {...props}
            restricted={false}
            path='/the_matches'
            exact
            component={TheMatches}
          />
          <PublicRoutes
            {...props}
            restricted={false}
            path='/the_team'
            exact
            component={TheTeam}
          />
          <PublicRoutes
            {...props}
            restricted={false}
            path='/'
            exact
            component={Home}
          />
          <PublicRoutes {...props} restricted={false} component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default Routes;
