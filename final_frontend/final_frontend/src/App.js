import "./App.css";
import SideMenu from "./components/SideMenu";
import JobCategories from "./pages/JobCategories";
import CreateJobCategories from "./pages/CreateJobCategories";
import CreateLocations from "./pages/CreateLocations";
import CreateSkills from "./pages/CreateSkills";
import EditJobCategories from "./pages/EditJobCategories";
import EditLocations from "./pages/EditLocations";
import EditSkills from "./pages/EditSkills";
import Skills from "./pages/Skills";
import JobLocations from "./pages/JobLocations";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LoginForm from "./pages/LoginForm";
import BusinessSettings from "./pages/BusinessSettings";
import JobOnboard from "./pages/JobOnboard";
import Interview from "./pages/Interview";
import Team from "./pages/Team";
import CreateTeam from "./pages/CreateTeam";
import Subscribe from "./pages/Subscribe";
import Delete from "./pages/Delete";
import Zoom from "./pages/Zoom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";


function App() {
  const [inactive, setInactive] = useState(false);
  const isloggedin=true;
  if(!isloggedin){
    return(
      <Router>
        <Switch>
            {/* {!isloggedin ? <Redirect to="/" /> : <Redirect to="/admin/dashboard" />} */}
             <Route exact path={"/"}>
                 <LoginForm/>
             </Route>
           </Switch>
      </Router>
    )
  }
  else{
  return (
    <div className="App">
      <Router>  
            <>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          
              <Switch>
              
              <Route exact path={"/admin/dashboard"}>
                <Dashboard />
              </Route>
              <Route exact path={"/admin/job-categories"}>
                <JobCategories />
              </Route>
              <Route exact path={"/admin/createjobcategory"}>
                <CreateJobCategories />
              </Route>
              <Route exact path={"/admin/editjobcategory/:id"}>
                <EditJobCategories />
              </Route>
              <Route exact path={"/admin/skills"}>
                <Skills />
              </Route>
              <Route exact path={"/admin/createskill"}>
                <CreateSkills />
              </Route>
              <Route exact path={"/admin/editskill/:id"}>
                <EditSkills />
              </Route>
              <Route exact path={"/admin/locations"}>
                <JobLocations />
              </Route>
              <Route exact path={"/admin/createlocation"}>
                <CreateLocations />
              </Route>
              <Route exact path={"/admin/editlocation/:id"}>
                <EditLocations />
              </Route>
              <Route exact path={"/admin/job"}>
                <Skills />
              </Route>
              <Route exact path={"/admin/job-company"}>
                <Skills />
              </Route>
              <Route exact path={"/admin/job-applications"}>
                <Skills />
              </Route>
              <Route exact path={"/admin/applications-archive"}>
                <Skills />
              </Route>
              <Route exact path={"/admin/job-onboard"}>
                <JobOnboard />
              </Route>
              <Route exact path={"/admin/interview-schedule"}>
                <Interview />
              </Route>
              <Route exact path={"/admin/team"}>
                <Team />
              </Route>
              <Route exact path={"/admin/team/create-team"}>
                <CreateTeam />
               </Route>
              <Route exact path={"/admin/subscribe"}>
                <Subscribe />
              </Route>
              <Route exact path={"/admin/profile"}>
                <Profile />
              </Route>
              <Route exact path={"/admin/setting"}>
                <BusinessSettings />
              </Route>
              <Route exact path={"/admin/settings/application-setting"}>
                <Profile />
               </Route>
              <Route exact path={"/admin/settings/role-permission"}>
                <Profile />
              </Route>
              <Route exact path={"/admin/settings/delete-account"}>
                <Delete />
              </Route>
              <Route path={"/admin/settings/zoom-setting"}>
                <Zoom />
              </Route>
              <Redirect to="/admin/dashboard" />
            </Switch>
          
        </div>
        </>
      </Router>
    </div>
  );
  }
}

export default App;
