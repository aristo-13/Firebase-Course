import Auth from "./components/Auth"
import {db} from '../config/firebase'
import { useEffect, useState } from "react"
import { getDocs,collection, addDoc, doc, deleteDoc } from "firebase/firestore"


function App() {
  const [movies,setMovies] = useState([])
  const [newMovieTitle,setNewMovieTitle] = useState('')
  const [newRDate,setNewRDate] = useState(0)
  const [watched,setwatched] = useState(false)

  useEffect(() =>{
    const fetchData = async() =>{
      try{
        const res = await getDocs(collection(db,"movies"))
        const data = res.docs.map((doc) => (
          {...doc.data(), id: doc.id}
        ))
       setMovies(data)
      }catch(err){
        console.log(err)
      }
    }

    fetchData()
  },[movies])
  
  const postDoc = async() =>{
    try{
      const res = await addDoc(collection(db,"movies"),
      {title: newMovieTitle,releaseDate: newRDate, watched: watched})
    }catch(err){
       console.log(err)
    }
    setNewMovieTitle('')
    setNewRDate('')
    setwatched(!watched)
  }
 
const deleteMovie = async(id) => {
  const MovieDoc = doc(db,"movies",id )
  await deleteDoc(MovieDoc)
}

  return (
    <>
      <Auth />


      <div>
         <input type="text" placeholder="movie title" value={newMovieTitle} onChange={(e) => setNewMovieTitle(e.target.value)}/>
        <input type="number" placeholder="release date" value={newRDate} onChange={(e) => setNewRDate(Number(e.target.value))}/>
        <input type="checkbox" checked={watched} onChange={(e) => setwatched(e.target.checked)}/>
        <label>watched</label>
        <button onClick={postDoc}>submit</button>
      </div>
      <div>
        {
          movies.map((movie,index) => (
            <div key={index}>
              <h1 style={{ color: movie.watched === true? 'green': 'red'}}>{movie.title}</h1>
              <p>{movie.releaseDate}</p>
              <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
