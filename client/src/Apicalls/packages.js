import axios from 'axios';

export async function getpackagebyid(id) {

   var response = axios.get(`http://localhost:3001/packages/${id}`)
      .catch(err => {
         console.log(err)
      })

      return response;
}

export async function getPackages() {

   var response = axios.get(`http://localhost:3001/packages`)
      .catch(err => {
         console.log(err)
      })

      return response;
}