import React from 'react';
import MyLayout from "./component/layout"
export default function HomePage() {
  return (
    <>
     <MyLayout title="Home" />
    <div className="bg-gray-100">
     
     
      <div>
      <img className="object-right-bottom object-contain mt-0.2" src="hmsp.png" alt="mockup" />
     
         </div>
     
      <main className="container mx-auto py-30 bg-sky-200">
    

         
        
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-2 text-center ">
        <p className="text-gray-600">© 2023 Hospital Management System. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};


