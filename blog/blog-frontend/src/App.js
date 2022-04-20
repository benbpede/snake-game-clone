import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import { Route, Switch } from '../node_modules/react-router-dom/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/register">
          <RegisterPage></RegisterPage>
        </Route>
        <Route path="/write">
          <WritePage></WritePage>
        </Route>
        <Route path="/@:username/:postId">
          <PostPage></PostPage>
        </Route>
        <Route path={['/@:username', '/']} exact>
          <PostListPage></PostListPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
