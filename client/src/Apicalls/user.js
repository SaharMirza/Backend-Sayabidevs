import axios from 'axios';

export async function getusers(){

   var response = axios.get(`http://localhost:3001/user`)
      .catch(err => {
         console.log(err)
      })

      return response;
}