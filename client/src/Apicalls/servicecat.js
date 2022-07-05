import axios from 'axios';

export async function getservicecats() {

   var response = axios.get(`http://localhost:3001/servicescat`)
      .catch(err => {
         console.log(err)
      })

      return response;
}