
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router';
import MyLayout from "@/pages/component/layout";
import SessionCheck from '@/pages/component/sessioncheck'
export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <MyLayout title="Lab"/>
      <SessionCheck/>
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-6 bg-white shadow-md rounded pt-6 pb-8 mb-4 py-10 overflow-y-auto">
      <div>
              <label>Name:</label>
              <input type="text" value={fullname} onChange={handleNameChange} />
            </div>
      <h1 className="text-2xl font-bold mb-4">Name: {data.testid}</h1>
  <h1 className="text-2xl font-bold mb-4">Email: {data.email}</h1>
  <h1 className="text-2xl font-bold mb-4">Test Name: {data.testname}</h1>
  <h1 className="text-2xl font-bold mb-4">Prescription: </h1>
      <Image src={"http:/localhost:3000/Patient/getimage/"+data.prescription}  width="150" height="150" />
     <br></br>
  </div>
      <button type="button" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://nestjsproject-production-364f.up.railway.app/Patient/patientlab/'+id);
    const data = await response.data;
   
return { props: { data } }
}