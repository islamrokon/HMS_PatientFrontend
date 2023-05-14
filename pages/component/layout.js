import Session from "./session"

export default function MyLayout(props)   
{
   
    return(
        <>
                  <header className="bg-blue-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">Hospital Management System</h1>
          <nav>
            <ul className="flex space-x-4">
            
              <li><a href="/signup" className="text-white">Sign Up</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <div>
              <Session />
              </div>
            </ul>
          </nav>
        </div>
      </header>
          
            
        
        <main>

        </main>
 

       
            
        </>
    )
}