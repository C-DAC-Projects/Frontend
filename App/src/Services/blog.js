import { config } from './config';
import axios from 'axios';

export async function addABlog(title, content, category,userId, postDate, author)
{
    try{
        const url = `${config.serverUrl}/blogs/addBlogs`

        const body = {title,
            content,
            category,
            userId,
            postDate,
            author,
        }

        const response = await axios.post(url,body)
        console.log(response.data)
        return response.data
    }
    catch(ex)
    {
        return (`Error :  ${ex}`)
    }
}