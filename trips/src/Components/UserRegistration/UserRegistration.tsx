import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface UserRegistration {
    email: string;
    password: string;
    role: "admin";
}

export default function UserRegistration() {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        role: "admin"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", newUser);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Add new user</h2>
            <Link to="/">
                <button>Back to home</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};