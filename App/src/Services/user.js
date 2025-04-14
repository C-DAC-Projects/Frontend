import axios from 'axios'
import { config } from './config'

export function async signup(name, email, password)
{
    const url = `${config.serverUrl}/user/signup`
    const body = {name,
        email,
        password,
    }

    const response = await axios(url, body)
}


