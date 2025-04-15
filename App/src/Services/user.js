import axios from 'axios'
import { config } from './config'

export async function addUser(
    name,
  email,
  password,
) {
  try {
    // create the API url
    const url = `${config.serverUrl}/user/signup`

    // create the request body
    const body = {
      name,
      email,
      password,
    }

    // make the POST /user/register API call
    const response = await axios.post(url, body)

    // return the response body to the caller
    return response.data
  } catch (ex) {
    console.log(`exception occurred: `, ex)
  }
}


export async function loginUser(email, password) {
    try {
      // create url
      const url = `${config.serverUrl}/user/signin`
  
      // create body
      // const body = {
      //   email: email,
      //   password: password,
      // }
      const body = { email, password }
  
      // make the api call
      const response = await axios.post(url, body)
      console.log(response.data)
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  }