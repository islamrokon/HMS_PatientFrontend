
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router';
import MyLayout from "../../../component/layout";
import SessionCheck from '@/pages/component/sessioncheck'
export default function UserProfile({ data } ) {
const router = useRouter();
    return (
      <>
      <SessionCheck/>
      <MyLayout title="User"/>
      <div className="container mx-auto px-4 py-8 space-y-4 md:space-y-6 bg-white shadow-md rounded pt-6 pb-8 mb-4 py-10 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Name: {data.name}</h1>
  <h1 className="text-2xl font-bold mb-4">Email: {data.email}</h1>
  <h1 className="text-2xl font-bold mb-4">Address: {data.address}</h1>
  </div>
      <button type="button" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0" onClick={() => router.back()}>
      Click here to go back
    </button>
     
      </>
    )
  }
  
 export async function getServerSideProps(context) {
 const id=context.params.id;

    const response = await axios.get('https://nestjsproject-production-364f.up.railway.app/Patient/finddoctor/'+id);
    const data = await response.data;
   
return { props: { data } }
}