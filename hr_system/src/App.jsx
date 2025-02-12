
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
// import './App.css'  
import LoginPage from './page/auth/LoginPage'
import RegisterPage from './page/auth/RegisterPage'
import MainLayout from './components/layout/MainLayout' 


// call finances component here
import Billing from './page/finances/Billing' 
import Invoices from './page/finances/Invoices' 
import Payroll from './page/finances/Payroll'

// call organization component here
import Employee from './page/organization/Employee'
import Report from './page/organization/Report'
import Structure from './page/organization/Structure'

// call recruitment component here
import Recruitment from "./page/recruitment/Recruitment";
import Candidates from './page/recruitment/Candidates'
import Career_Site from './page/recruitment/Career_Site'
import Job from './page/recruitment/Job'
import My_Referral from './page/recruitment/My_Referral'

// call department component here 
import Admin_HR from './page/departments/Admin_HR' 
import IT_Team from "./page/departments/IT_Team";
import Cs_Bank from './page/departments/Cs_Bank'
import Finance_Account from './page/departments/Finance_Account'
import Property_MG from './page/departments/Property_MG'
import Sale_Marketing from './page/departments/Sale_Marketing'
import Security from './page/departments/Security'
import Users from './page/departments/Users'
// call homepage component here
import HomePage from './page/home/HomePage'

function App() { 
  return (
   <BrowserRouter>
     <Routes> 

         <Route path='/loginpage' element={<LoginPage/>} />
         <Route path='/registerpage' element={<RegisterPage/>} />

       

         {/* call layout component here */}
         <Route element={<MainLayout/>} >  
        {/* call homepage component here */} 
        <Route path='/' element={<HomePage/>} />

 
         {/* call finances component here */}
         <Route path='/billing' element={<Billing/>} /> 
         <Route path='/invoices' element={<Invoices/>} /> 
         <Route path='/payroll' element={<Payroll/>} /> 

         {/* call organization component here */}
         <Route path='/employee' element={<Employee/>} /> 
         <Route path='/report' element={<Report/>} /> 
         <Route path='/structure' element={<Structure/>} /> 

         {/* call recruitment component here */}
         <Route path='/recruitment' element={<Recruitment/>} /> 
         <Route path='/candidates' element={<Candidates/>} /> 
         <Route path='/career_site' element={<Career_Site/>} /> 
         <Route path='/job' element={<Job/>} /> 
         <Route path='/my_referral' element={<My_Referral/>} />

        {/* call department component here */} 
        <Route path="/admin_hr" element={<Admin_HR/>} />
        <Route path="/it_team" element={<IT_Team/>} />
        <Route path="/cs_bank" element={<Cs_Bank/>} />
        <Route path="/finance_account" element={<Finance_Account/>} />
        <Route path="/property_mg" element={<Property_MG/>} />
        <Route path="/sale_marketing" element={<Sale_Marketing/>} />
        <Route path="/security" element={<Security/>} />
        <Route path="/users" element={<Users/>} />

         <Route path="*" element={<h1>Error 404: Page not found</h1>} />
         </Route> 
     </Routes>
   </BrowserRouter>
  )
}
export default App
