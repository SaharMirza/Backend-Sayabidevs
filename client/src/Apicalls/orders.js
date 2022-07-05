import axios from 'axios';

export async function getPackages() {

   var response = axios.get(`http://localhost:3001/packages`)
      .catch(err => {
         console.log(err)
      })

      return response;
}