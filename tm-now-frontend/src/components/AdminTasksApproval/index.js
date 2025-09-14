import { useState, useEffect } from "react";
import Cookies from 'js-cookie'

const AdminTasksApproval = () => {
    const [tasks, setTasks] = useState([{
        "BusinessJustification":"",
        "EstimatedUnitCost":0,
        "RequesterName": "",
        "items":"",
        "quantity":0,
        "status":""
    }]);

    const fetchTasks = async () => {
        try {
           const url = 'http://localhost:5000/api/tasks'; 
              
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    
                }
            });
            const data = await response.json();
            setTasks(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    const changeStatus = async(id, status) =>{
        const token = Cookies.get("jwtToken");
        
    }

    const updateTaskStatus = async (id, status) => {
        const token = Cookies.get("jwtToken");
        console.log(id)
        try {
            const url = `http://localhost:5000/api/tasks/update/${id}`; 
            const updatedTask = { status: 'Approved' };
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedTask)
            });
            if (!response.ok) {
                throw new Error('Failed to update task status');
            }
        } catch (err) {
            console.log(err);
        }
    }
  return(
    <div>
    <h1>Admin Tasks Approval</h1>
      {tasks.map((task, index) => (
        <div key={index} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
        <p>{task._id}</p>
          <p><strong>Requester Name:</strong> {task.RequesterName}</p>
          <p><strong>Department:</strong> {task.Department}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Items:</strong> {task.items}</p>
          <p><strong>Quantity:</strong> {task.quantity}</p>
          <p><strong>Estimated Unit Cost:</strong> {task.EstimatedUnitCost}</p>
          <p><strong>Business Justification:</strong> {task.BusinessJustification}</p>
          <p><strong>Required Date:</strong> {task.RequiredDate}</p>
          <button onClick = {() => updateTaskStatus(task._id)}>Approve the Task</button>
        </div>
      ))}
    </div>
  )
}

export default AdminTasksApproval;