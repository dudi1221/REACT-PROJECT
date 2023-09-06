import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { UserToken } from "../TokenContext/TokenContext";
import './UpdateTrip.css'

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

export default function UpdateTrip() {
    const token = useContext(UserToken);

    const { id } = useParams();

    console.log(id);
    

    useEffect(() => {
        async function fetchTrips() {
            try {
                const response = await axios.get(`http://localhost:3000/api/trips/${id}`);
                setUpdatedTrip(response.data);
                console.log(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchTrips();
    }, [id]);
    

    const [updatedTrip, setUpdatedTrip] = useState({
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        price: 0,
        image: "",
        activities: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedTrip({...updatedTrip, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/trips/${id}`, updatedTrip,
            {
                headers: {
                    authorization: token?.token
                }
            });
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    };
    

    return (
        <div className="update-trip-container">
            <h2 className="update-trip-header">Update a trip</h2>
            <Link to="/Trips" className="update-trip-link">
                <button className="update-trip-link-button">To trips page</button>
            </Link>
            <form onSubmit={handleSubmit} className="update-trip-form">
                <div>
                    <label className="update-trip-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={updatedTrip.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={updatedTrip.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={updatedTrip.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={updatedTrip.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">Description:</label>
                    <input
                        name="description"
                        value={updatedTrip.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={updatedTrip.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={updatedTrip.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="update-trip-label">Activities (comma-separated):</label>
                    <input
                        type="text"
                        name="activities"
                        value={updatedTrip.activities}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="update-trip-button">Update Trip</button>
            </form>
        </div>
    );
};