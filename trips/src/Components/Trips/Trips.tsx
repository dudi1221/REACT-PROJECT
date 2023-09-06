import axios from "axios";
import { useEffect, useState, useContext } from "react";
import './Trips.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { UserToken } from "../TokenContext/TokenContext";

interface TravelPackage {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
}

export default function Trips () {
    
    const [trips, setTrips] = useState<TravelPackage[]>([]);

    const navigate = useNavigate();

    const token = useContext(UserToken);

    useEffect(() => {
        async function fetchTrips() {
            try {
                const response = await axios.get("http://localhost:3000/api/trips");
                setTrips(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTrips();
    }, []);


    const navigateHandler = (id: string) => {
        navigate(`/trip-details/${id}`);
    }

    async function deleteTrip(id: string) {
        const response = await axios.delete(`http://localhost:3000/api/trips/${id}`,
        {
            headers: {
                authorization: token?.token
            },
        });
        console.log(response.data);
    };

    return (
        <div className="a">
        <div>
            <header>
                <h1>Trips</h1>
                <Link to="/"><button>To Home</button></Link>
                <Link to="/NewTrip"><button>To new trip</button></Link>
            </header>
        </div>
        <section className="cards">
            {trips.map((trip) => (
                <div key={trip.id} className="card-trip" onClick={() => navigateHandler(trip.id)}>
                    <h2>{trip.name}</h2>
                    <p>Destination: {trip.destination}</p>
                    <img src={trip.image} alt="" />
                    <p>Start Date: {trip.startDate}</p>
                    <p>End Date: {trip.endDate}</p>
                    <Link to='/Trips'><button onClick={() => deleteTrip(trip.id)}>Delete trip</button></Link>
                </div>
            ))}
        </section>
        </div>
    );
};