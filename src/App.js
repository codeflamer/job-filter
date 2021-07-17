import React,{useEffect} from 'react'
import BodyContent from './components/BodyContent'
import Header from './components/Header'
import axios from 'axios'
import { setJobdata } from './features/dataJob/jobSlice'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch();

  const getData = async()=>{
      await axios.get('data.json')
      .then((response)=> {
        // handle success
        console.log(response.data);
        dispatch(setJobdata(response.data));
      })
      .catch((error)=> {
        // handle error
        console.log(error);
      })
  }

  useEffect(()=>{
    getData()
  })


  return (
    <div>
      <Header/>
      <BodyContent/>
    </div>
  )
}

export default App
