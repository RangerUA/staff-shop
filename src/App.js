import {Switch, Route, Link} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
    console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics/12")}>Topic Details</button>
      <Link to="/topics">
        go to
      </Link>
      HATS PAGE
    </div>
  )

};

const HatsPageDet = (props) => {
    console.log(props);
    return (
      <div>
        <Link to="/topics">
          go to
        </Link>
        HATS PAGE DET
      </div>
    )

};

const TopicsList = (props) => {
    console.log(props);
    return <div>TOPICS LIST PAGE</div>
};

const TopicsDetails = (props) => {
    console.log(props);
    return <div>TOPICS DETAILS PAGE</div>
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage}/>
        <Route path={"/hats"} component={HatsPage}/>
        <Route path={"/hats/:hatId"} component={HatsPageDet}/>
        <Route exact path={"/topics"} component={TopicsList}/>
        <Route path={"/topics/:topicId"} component={TopicsDetails}/>
      </Switch>
      {/*<HomePage/>*/}
    </div>
  );
}

export default App;
