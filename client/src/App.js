import "./App.css";
import "./component/AdminPanel/AdminPanel.css";
import "./component/AdminControlPanel/AdminDashboard.css";
import "./component/Utility/Utiles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer/Footer";
import Login from "./component/Navbar/Login";
import Register from "./component/Navbar/Register";
import AdminRegister from "./component/AdminPanel/AdminRegister";
import AdminLogin from "./component/AdminPanel/AdminLogin";
import AddtrainingData from "./component/AdminPanel/AddtrainingData";
import { Provider } from "react-redux";
import Store from "./component/Store_Reducer/Store";
import UpddateCardData from "./component/AdminPanel/UpddateCardData";
import Teachwithus from "./component/Utility/Teachwithus";
import TrainersMentorship from "./component/Utility/Trainings/TrainersMentorship";
import ExploreWebinar from "./component/Utility/ExploreWebinar";
import UpcomingTrainings from "./component/Utility/UpcomingTrainings";
import Trainings from "./component/Utility/Trainings/Trainings";
import JoinCommunity from "./component/Utility/JoinCommunity";
import AdminDashboard from "./component/AdminControlPanel/AdminDashboard";
import AddBannerandVideo from "./component/AdminPanel/AddBannerandVideo";
import UsersPanel from "./component/Panels/UsersPanel/UsersPanel";
import TrainersPanel from "./component/Panels/TrainersPanel/TrainersPanel";
import SingleTrainers from "./component/Utility/SingleTrainers";
import SingleTrainings from "./component/Utility/Trainings/SingleTrainings";
import Contact from "./component/Footer/Contact";
import PrivacyPolicy from "./component/Footer/PrivacyPolicy";
import TermsCondition from "./component/Footer/TermsCondition";
import About from "./component/Footer/About";

function App() {
  // const params = useParams();
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/kna_contact/contact_us" element={<Contact />} />
            <Route exact path="/kna_about/about_us" element={<About />} />
            <Route
              exact
              path="/kna_privacy-policy/privacy_policy"
              element={<PrivacyPolicy />}
            />
            <Route
              exact
              path="/kna_terms-condition/terms_condition"
              element={<TermsCondition />}
            />
            <Route
              exact
              path="/add/add-banner-video"
              element={<AddBannerandVideo />}
            />

            {/* Admin control panel */}
            <Route
              exact
              path="/admin/admin-panel/dashboard"
              element={<AdminDashboard />}
            />
            <Route exact path="/admin/admin-login" element={<AdminLogin />} />
            <Route
              exact
              path="/admin/admin-register"
              element={<AdminRegister />}
            />

            {/* Admin handle panel */}
            <Route
              exact
              path="/trainers/panels/trainers-panels"
              element={<TrainersPanel />}
            />

            <Route
              exact
              path="/users/panels/users-panels"
              element={<UsersPanel />}
            />

            {/* Product-Panel-Router */}
            <Route
              exact
              path="/admin/add-training"
              element={<AddtrainingData />}
            />
            <Route
              exact
              path="/update/edit-products/:id"
              element={<UpddateCardData />}
            />

            {/* user Router */}
            <Route exact path="/users/login" element={<Login />} />
            <Route exact path="/users/register" element={<Register />} />

            {/* Training-Data */}
            <Route
              exact
              path="/trainings/trainings_category"
              element={<Trainings />}
            />
            <Route
              exact
              path="/trainings/single_trainings/:id"
              element={<SingleTrainings />}
            />

            {/* Trainers */}
            <Route
              exact
              path="/trainers/single_trainers/:id"
              element={<SingleTrainers />}
            />

            <Route
              exact
              path="/learner/entrepreneur-teach"
              element={<Teachwithus />}
            />

            <Route
              exact
              path="/trainings/users-mentorship"
              element={<TrainersMentorship />}
            />

            <Route
              exact
              path="/webinar/upcoming-trainings"
              element={<UpcomingTrainings />}
            />
            <Route
              exact
              path="/webinar/expolore-webinar"
              element={<ExploreWebinar />}
            />
            <Route
              exact
              path="/community/join_community"
              element={<JoinCommunity />}
            />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
