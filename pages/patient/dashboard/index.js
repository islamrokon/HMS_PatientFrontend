import MyLayout from "@/pages/component/layout"
import Link from "next/link"
import SessionCheck from '../../component/sessioncheck'
import PatientDrawer from '../../component/patientdrawer'
export default function PatientDashboard() {
    

    return (
      <>
         <SessionCheck />

         <MyLayout title="Patient DashBoard" />
  
         <PatientDrawer />
  
      
      </>
    )
  }