import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Link from 'next/link';
import SessionCheck from '../../component/sessioncheck'
import { useRouter } from 'next/router'

export default function Appointment() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('patientname', data.patientname);
        formData.append('age', data.age);
        formData.append('departmentname', data.departmentname);
        formData.append('doctorname', data.doctorname);
        formData.append('bloodgroup', data.bloodgroup);
        formData.append('date', data.date);
        formData.append('doctorId', data.doctorId);
        formData.append('patientid1', data.patientid1);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/Patient/takeappoinment",
                formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
               
            });
          

            setSuccess('Appointment have taken successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Try again!' + error.response.data.message);
        }
    };
    return (
        <>
        <SessionCheck/>
 <div className="flex items-center justify-center h-screen scroll-smooth ">
     
        <div className="mb-8 h-10">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
        Appointment
        </h1>
        <h3 id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></h3>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4 md:space-y-6 bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 py-10 overflow-y-auto">
          
          
          <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2">
            Patient Name
          </label>
          <input id="patientname"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Patient Name" 
        required=""
        {...register('patientname', { required: true })}                
                    />
                    {errors.patientname &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Patient Name is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input id="age"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Age" 
        required=""
        {...register('age', { required: true })}                
                    />
                    {errors.age &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Age is required</span></p>
}
</div>



<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
          Department Name
          </label>
          <input id="departmentname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Department Name" 
        required=""
        {...register('departmentname', { required: true})}                
                    />
                    {errors.departmentname &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Department Name is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
         Doctor Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" id="doctorname"
        placeholder="doctorname" 
        required=""
        {...register('doctorname', { required: true})}                
                    />
                    {errors.doctorname &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Password is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
         Blood Group
          </label>
          <input id="bloodgroup" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="bloodgroup" 
        required=""
        {...register('bloodgroup', { required: true})}                
                    />
                    {errors.bloodgroup &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Blood Group is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
       Appointment Date
          </label>
          <input id="date"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
        placeholder="Date" 
        required=""
        {...register('date', { required: true})}                
                    />
                    {errors.date &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Date is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
       ID of the doctor you want to appoint.
          </label>
          <input id="doctorId"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
        placeholder="Doctor ID" 
        required=""
        {...register('doctorId', { required: true})}                
                    />
                    {errors.doctorId &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">DoctorId is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
      Your ID
          </label>
          <input id="patientid1"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
        placeholder="Your ID" 
        required=""
        {...register('patientid1', { required: true})}                
                    />
                    {errors.patientid1 &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Your ID is required</span></p>
}
</div>
     
     
     
        <div className="flex items-center justify-between">
          <button  type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           
          >
            Submit
          </button>
          <Link href="./" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0">Home</Link>
        </div>
      </form>
      </div>
    </div>
    </>
    )
}