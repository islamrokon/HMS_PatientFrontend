import React, { useState, useEffect } from 'react';
import SessionCheck from '../../component/sessioncheck'
import axios from 'axios';
import Link from 'next/link';
const UpdateDataForm = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [patientname, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [testname, setTestname]= useState('');
  const [patientid, setPatientid] = useState('');
  const [prescription, setPrescription] = useState('');



  useEffect(() => {
    axios.get('http://localhost:3000/Patient/labs')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = e => {
    const testid = parseInt(e.target.value);
    const selected = data.find(d => d.testid === testid);
    setSelectedData(selected);
    setName(selected.patientname);
    setEmail(selected.email);
    setUsername(selected.username);
    setTestname(selected.testname);
    setPrescription(selected.prescription);
    setPatientid(selected.patientid);

  
  };

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleTestChange = e => setTest(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    axios.put(`https://nestjsproject-production-364f.up.railway.app/Patient/updatelab/${selectedData.testid}`, {
      ...selectedData,
      patientname,
      email,
      testname
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div>
        <SessionCheck/>
      <h2 className="text-2xl font-bold mb-4">Update Lab</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-2xl font-bold mb-4">Select Lab:</label>
          <select onChange={handleSelectChange} className="text-2xl font-bold mb-4">
            <option value="">Test Name</option>
            {data.map(d => (
              <option key={d.testid} value={d.testid}>{d.testname}</option>
            ))}
          </select>
        </div>
        {selectedData && (
          <>
            <div>
              <label className="text-2xl font-bold mb-4"><h1>Name:</h1></label>
              <h1><input type="text"  className="text-2xl font-bold mb-4" value={patientname} onChange={handleNameChange} /></h1>
            </div>
            <div>
              <label className="text-2xl font-bold mb-4">Email:</label>
              <input type="email" className="text-2xl font-bold mb-4" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label className="text-2xl font-bold mb-4">Test Name:</label>
              <input type="text" className="text-2xl font-bold mb-4" value={testname} onChange={handleTestChange} />
            </div>
            
            <button type="submit" className="text-2xl font-bold mb-4">Save Changes</button>
            <Link href="./" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0">Home</Link>
          </>
          
        )}
      </form>
    </div>
    
  );
};

export default UpdateDataForm;