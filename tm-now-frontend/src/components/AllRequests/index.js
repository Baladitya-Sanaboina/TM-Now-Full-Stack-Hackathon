import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const AllRequests = () => {
    const token = Cookies.get("jwtToken");
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await fetch("http://localhost:5000/api/tasks/person-tasks", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setRequests(data);
        };
        fetchRequests();
    }, [token]);

    console.log(requests);

    return (
        <div>
            <h1>All Requests</h1>
            <ul>
                {requests.length === 0 && (<p>No requests found.</p>)}
                {requests.map((requests) => (
                    <li key={requests._id}>
                        {requests.Department}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
export default AllRequests;