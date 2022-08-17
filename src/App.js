import Home from "./Home";
import Navbar from "./navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./blog-details";
import NotFound from "./notFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
           <Route exact path={'/'}>
              <Home />
           </Route>
           <Route path={'/create'}>
              <Create />
           </Route>
           <Route path={'/blogs/:id'}>
              <BlogDetails />
           </Route>
           <Route path={'*'}>
              <NotFound />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
