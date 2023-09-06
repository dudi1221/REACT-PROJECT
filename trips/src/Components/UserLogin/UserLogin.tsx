import { useState, useContext } from "react";
import { UserToken } from "../TokenContext/TokenContext";
import axios from "axios";
import { Link } from "react-router-dom";

export function SineIn() {
    const token = useContext(UserToken);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:3000/api/auth/login", user);
        token?.setToken(response.data.responseObj.token);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Signe In</h2>
            <Link to="/">
                <button>Back to home</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <button type="submit">connect</button>
            </form>
        </div>
    );
};