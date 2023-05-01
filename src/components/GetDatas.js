import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'


const GetDatas = () => {
 
        const [getData, setGetData] = useState([])

 // Get data from API
useEffect(() => {
    axios.get(`${baseUrl}/posts`)
    .then((response) => {
        setGetData(response.data)
    })
    .catch((err) => {
        alert(err)
    })
})

const postData = () => {
    axios.post((`${baseUrl}/posts`), {
        id: 1,
        title: 'Hello Post API',
        body: 'Trying out axios api'
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((err => {
        alert("post data was not successful")
    }))
}

function updatePost() {
    axios
      .put((`${baseUrl}/posts`), {
        id: 2,
        title: "Hi",
        body: "This is an updated Data."
      })
      .then((response) => {
        console.log(response.data);
      });
  }

const noPost = () => {
    axios.delete(`${baseUrl}/posts`)
    .then(() => {
        alert("Post deleted!");
})
}

return (
    <div>
        <h2>{getData.id}</h2>
        <h3>{getData.title}</h3>
        <p>{getData.body}</p>

        <button onClick={postData}>Upload</button>

        <button onClick={noPost}>Remove </button>

        <button onClick={updatePost}>Edit</button>

       
    </div>
   )

}

export default GetDatas