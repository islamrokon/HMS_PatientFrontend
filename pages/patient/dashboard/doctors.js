import Link from "next/link"
import axios from "axios";
import { useRouter } from 'next/router'
import SessionCheck from "@/pages/component/sessioncheck";
import MyLayout from "@/pages/component/layout";
import PatientDrawer from "@/pages/component/patientdrawer";
export default function GetUsers({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <MyLayout title="Doctors" />
     
      <div class="p-24 sm:ml-64">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        All Doctors
              </h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
            <Link href={"/patient/dashboard/users/" + item.id}><div className="font-bold text-blue-600/100 bg-gray-200 px-16 m-10"
            >{item.name}</div></Link>
            </li>
        ))}
      </ul>
      <Link href="./" className="text-white bg-blue-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 pl-100 text-right mr-3 -mt-4 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 right-0">Home</Link>
        </div>
    
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://nestjsproject-production-364f.up.railway.app/Patient/showalldoctor');
      const data = await response.data;
    
  return { props: { data } }
  }
  