import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const AllRequests = () => {
    const token = Cookies.get("jwtToken");
    const [requests, setRequests] = useState([]);
    const fetchRequest = async()=>{
        const response = await fetch("http://localhost:5000/api/tasks/admin/tasks",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        setRequests(data);
    }
     useEffect(() => {
        fetchRequest();
        console.log("Use effect called");
    }, []);
    
    
    

    console.log(requests);

    return (
        <div>
            <h1>All Requests</h1>
            <p>{requests}</p>
            
        </div>
    );
}
export default AllRequests;