import axios from 'axios';

export async function getservices() {

   var response = axios.get(`http://localhost:3001/services`)
      .catch(err => {
         console.log(err)
      })

      return response;
}