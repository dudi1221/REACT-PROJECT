import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserToken } from "../TokenContext/TokenContext";
import './NewTrip.css'

export default function NewTrip() {
    const token = useContext(UserToken);

    const [newTrip, setNewTrip] = useState({
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
        description: "",
        price: "",
        image: "",
        activities: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTrip({...newTrip, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/trips", newTrip, 
            {
                headers: {
                    authorization: token?.token
                },
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="new-trip-container">
            <h2 className="new-trip-heading">Add a new trip</h2>
            <Link to="/Trips">
                <button className="new-trip-to-trips-button">To trips page</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="new-trip-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={newTrip.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={newTrip.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={newTrip.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={newTrip.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">Description:</label>
                    <input
                        name="description"
                        value={newTrip.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={newTrip.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={newTrip.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="new-trip-label">Activities (comma-separated):</label>
                    <input
                        type="text"
                        name="activities"
                        value={newTrip.activities}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="new-trip-label">Add Trip</button>
            </form>
        </div>
    );
};