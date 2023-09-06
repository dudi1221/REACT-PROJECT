import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Trips from './Components/Trips/Trips';
import TripDetails from './Components/TripDetails/TripDetails';
import NewTrip from './Components/NewTrip/NewTrip';
import UpdateTrip from './Components/UpdateTrip/UpdateTrip';
import UserRegistration from './Components/UserRegistration/UserRegistration';
import { SineIn } from './Components/UserLogin/UserLogin';

function Ruoter() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/trip-details/:id" element={<TripDetails />} />
                    <Route path="/NewTrip" element={<NewTrip />} />
                    <Route path="/UpdateTrip/:id" element={<UpdateTrip />} />
                    <Route path="/registration" element={<UserRegistration />} />
                    <Route path="/login" element={<SineIn />} />
                </Routes>
            </Router>
    )
}
export default Ruoter