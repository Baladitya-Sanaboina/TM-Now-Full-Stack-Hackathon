import { useState } from "react"

const CreateRequest = () =>{
    const [formData, setFormData] = useState({
        RequesterName: '',
        Department: '',
        items: '',
        quantity: '',
        EstimatedUnitCost: '',
        BusinessJustification: '',
        RequiredDate: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Requester Name</label>
            <input type="text" placeholder="Enter your name" value={formData.RequesterName} onChange={(e) => setFormData({ ...formData, RequesterName: e.target.value })}/>
            <br/>
           <label for="department">Choose a Department:</label>
           <select id="department" name="department" value={formData.Department} onChange={(e) => setFormData({ ...formData, Department: e.target.value })}>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="finance">Finance</option>
            <option value="Marketing">Marketing</option>
            </select>
            <br/>
            <label>Items</label>
            <input type="text" placeholder="Enter items" value={formData.items} onChange={(e) => setFormData({ ...formData, items: e.target.value })}/>
            <br/>
            <label>Quantity</label>
            <input type="number" placeholder="Enter quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}/>
            <br/>
            <label>Estimated Unit Cost</label>
            <input type="number" placeholder="Enter estimated unit cost" value={formData.EstimatedUnitCost} onChange={(e) => setFormData({ ...formData, EstimatedUnitCost: e.target.value })}/>
            <br/>
            <label>Business Justification</label>
            <input type="text" placeholder="Enter business justification" value={formData.BusinessJustification} onChange={(e) => setFormData({ ...formData, BusinessJustification: e.target.value })}/>
            <br/>
            <label>Expected Delivery Date</label>
            <input type="date" value={formData.RequiredDate} onChange={(e) => setFormData({ ...formData, RequiredDate: e.target.value })}/> 
            <br/>
            <button type="submit">Submit</button>
            </form>   
        </div>
    )
}

export default CreateRequest;