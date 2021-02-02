import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import {
  MovieDetailsView,
  OverallTvShowsView,
  OverallMovieView,
  TrendingShowsView,
} from "./views/index";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={OverallMovieView} />
        <Route exact path="/tvshows" component={OverallTvShowsView} />
        <Route exact path="/moviedetails" component={MovieDetailsView} />
        <Route exact path="/trendings" component={TrendingShowsView} />
      </Switch>
    </div>
  );
}
export default App;
