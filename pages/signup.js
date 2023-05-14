import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import Link from 'next/link';

import { useRouter } from 'next/router'

export default function SignIn() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];

        if (!allowedtypes.includes(file.type)){
            return false;
        }
        }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('patientname', data.patientname);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('username', data.username);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('picture', data.picture[0]);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/Patient/signup",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Signup successfull');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Signup unsuccessfull ' + error.response.data.message);
        }
    };
    return (
        <>
 <div className="flex items-center justify-center h-screen scroll-smooth ">
     
        <div className="mb-8 h-10">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
        Signup
        </h1>
        <h3 id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></h3>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4 md:space-y-6 bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 py-10 overflow-y-auto">
          
          
          <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input id="username"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Username" 
        required=""
        {...register('username', { required: true })}                
                    />
                    {errors.username &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Username is required</span></p>
}
</div>

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
          Email
          </label>
          <input id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Email" 
        required=""
        {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}                
                    />
                    {errors.patientname &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Patient Name is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
         Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" id="password"
        placeholder="Password" 
        required=""
        {...register('password', { required: true})}                
                    />
                    {errors.password &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Password is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
         Phone
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Phone" 
        required=""
        {...register('phone', { required: true})}                
                    />
                    {errors.phone &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Phone number is required</span></p>
}
</div>

<div>
<label
            className="block text-gray-700 text-sm font-bold mb-2">
         Address
          </label>
          <textarea id="address"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        placeholder="Address" 
        required=""
        {...register('address', { required: true})}                
                    />
                    {errors.address &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Password is required</span></p>
}
</div>

<div>
                   
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Picture</label>
<input type="file" id="myfile" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
{...register('picture', { required: true, validate: validateFile })}
/>
{errors.picture && 
                    <p>
                    {errors.picture.type === 'required'
                                                    ?
  <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Picture is required</span></p>
                                                    :
                                                    
  <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid Picture</span></p>
        }
                </p>}      
                </div>
     
     
     
        <div className="flex items-center justify-between">
          <button  type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           
          >
            Sign Up
          </button>
          <Link href="./" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0">Home</Link>
        </div>
      </form>
      </div>
    </div>
    </>
    )
}