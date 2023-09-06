import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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

export default function TripDetails() {
    const [tripId, setTripId] = useState<TravelPackage | null>(null);

    const { id } = useParams();

    useEffect(() => {
        async function fetchTrips() {
            try {
                const response = await axios.get(`http://localhost:3000/api/trips/${id}`);
                setTripId(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchTrips();
    }, []);
    console.log(tripId);


    return (
        <div>
            <header>
                <h1>Trip Details</h1>
                <Link to="/Trips">
                    <button>To all trips</button>
                </Link>
                <Link to={`/UpdateTrip/${tripId?.id}`}>
                    <button>Update trip</button>
                </Link>
            </header>
            {tripId && (
                <section>
                    <h2>{tripId.name}</h2>
                    <img src={tripId.image} alt={tripId.name} />
                    <p>Destination: {tripId.destination}</p>
                    <p>Start Date: {tripId.startDate}</p>
                    <p>End Date: {tripId.endDate}</p>
                    <p>Price: {tripId.price}</p>
                    <p>Description: {tripId.description}</p>
                    <p>Activities: {tripId.activities}</p>
                </section>
            )}
        </div>
    );
};