import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('https://nestjsproject-production-364f.up.railway.app/Patient/signin', { email, password })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        //localStorage.setItem('email', response.data);
        router.push('/patient/dashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

 

    return (
        <>
            
   
            <div className="p-24 gap-10">
        <section className="text-gray-600 body-font mx-auto w-96">
        <form onSubmit={handleSubmit}>
  
    <div className="bg-blue-800 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0 ">
      <h2 className="text-white text-lg font-medium title-font mb-5 text-center">Sign In</h2>
      <div className="relative mb-4">
        <label for="full-name" className="leading-7 text-sm text-white">Email</label>

        <input type="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
       
                </div>
      <div className="relative mb-4">
        <label for="password" className="leading-7 text-sm text-white" >Password</label>
        <input type="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
    
                </div>
       <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign In</button>
                {error &&
                  <div>
                    
                    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">{error}</span></p>
                  </div>
                }   


                <Link href="./" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0">Home</Link>
              
                </div>
                
          </form>
      
</section>

</div>
            </>
  )
}