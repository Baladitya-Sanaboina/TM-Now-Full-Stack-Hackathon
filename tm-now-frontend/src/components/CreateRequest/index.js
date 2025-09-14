import { useState } from "react"
import Cookies from 'js-cookie'
import './index.css'

const CreateRequest = () =>{
    const [formData, setFormData] = useState({
        RequesterName: '',
        Department: 'HR',
        items: '',
        quantity: '',
        EstimatedUnitCost: '',
        BusinessJustification: '',
        RequiredDate: ''
    });
    const token = Cookies.get('jwtToken');

    const handleSubmit = async(e) => {
        console.log(formData)
        e.preventDefault();
        const url = "http://localhost:5000/api/tasks/create";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
    }
        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok){
            alert("Request created successfully");
            setFormData({
                RequesterName: '',
                Department: '',
                items: '',
                quantity: '',
                EstimatedUnitCost: '',
                BusinessJustification: '',
                RequiredDate: ''
            });
        }else{
            alert(data.message || "Failed to create request");
        }
    }


    return(  
        
       <div class="for-container"> 
       
        <div>
        <form onSubmit={handleSubmit}>
            <label class="for-names">Requester Name:</label>
            
            <input type="text" class="for-boxes" placeholder="Enter your name" value={formData.RequesterName} onChange={(e) => setFormData({ ...formData, RequesterName: e.target.value })}/>
            <br/>
           <label  class="for-names" for="department">Choose a Department:</label>
           <select id="department" class="for-boxes" name="department" value={formData.Department} onChange={(e) => setFormData({ ...formData, Department: e.target.value })}>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            </select>
            <br/>
            <label class="for-names">Items:</label>
            <input type="text" class="for-boxes" placeholder="Enter items" value={formData.items} onChange={(e) => setFormData({ ...formData, items: e.target.value })}/>
            <br/>
            <label class="for-names">Quantity:</label>
            <input type="number" class="for-boxes" placeholder="Enter quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}/>
            <br/>
            <label class="for-names">Estimated Unit Cost:</label>
            <input type="number" class="for-boxes" placeholder="Enter estimated unit cost" value={formData.EstimatedUnitCost} onChange={(e) => setFormData({ ...formData, EstimatedUnitCost: e.target.value })}/>
            <br/>
            <label class="for-names">Business Justification:</label>
            <input type="text" class="for-boxes" placeholder="Enter business justification" value={formData.BusinessJustification} onChange={(e) => setFormData({ ...formData, BusinessJustification: e.target.value })}/>
            <br/>
            <label class="for-names">Expected Delivery Date:</label>
            <input type="date"  class="for-boxes" value={formData.RequiredDate} onChange={(e) => setFormData({ ...formData, RequiredDate: e.target.value })}/> 
            <br/>
            <button type="submit">Submit</button>
            </form>   
        </div> 
        
    </div>   
      
    )
}

export default CreateRequest;