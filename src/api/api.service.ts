import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

type EmployeeType = {
  limit: number;
  page: number;
  search: string;
}

export async function getEmployee(param:EmployeeType ){
  try{
    const result = await axios.get(`/test-frontend`,{
      params:param
    })
    return result.data
  } catch (error){
    return error
  }
}

export async function getEmployeeById(id:string){
  try{
    const result = await axios.get(`/test-frontend/${id}`)
    return result.data
  } catch (error){
    return error
  }
}