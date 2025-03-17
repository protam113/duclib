//api/api.ts

/**
 Base URL
 **/

 const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
 const authService = process.env.NEXT_PUBLIC_Auth_Service;
 const version = process.env.NEXT_PUBLIC_Version;
 
 const apiHandle = `${baseURL}${authService}${version}`;
 
 const endpoints = {
   //auth
   // register: process.env.NEXT_PUBLIC_REGISTER,
   // refresh: process.env.NEXT_PUBLIC_REFRESH,
   // changePassword: process.env.NEXT_PUBLIC_CHANGE_PASSWORD,
   // codePassword: process.env.NEXT_PUBLIC_RESET_PASSWORD,
   // verifyCode: process.env.NEXT_PUBLIC_VERIFY_CODE,
   logout: process.env.NEXT_PUBLIC_Employee_Logout,
   login: process.env.NEXT_PUBLIC_Employee_Login,
 
   //current user lgin
   // updateProfile: process.env.NEXT_PUBLIC_UPDATE_PROFILE,
   currentUser: process.env.NEXT_PUBLIC_Employee_Detail,
 
   // role
   roles: process.env.NEXT_PUBLIC_Roles,
   role: process.env.NEXT_PUBLIC_Role,
   roleEdit: process.env.NEXT_PUBLIC_RoleEdit,
 
   // employee
   employees: process.env.NEXT_PUBLIC_Employees,
   employee: process.env.NEXT_PUBLIC_Employee,
   employeeEdit: process.env.NEXT_PUBLIC_EmployeeEdit,
 

 };
 
 export { apiHandle, endpoints };
 