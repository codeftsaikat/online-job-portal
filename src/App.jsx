
// import './App.css'
import Header from './components/header/Header'
import JobCard from './components/jobcard/JobCard'
import Navbar from './components/navbar/Navbar'
import SearchBar from './components/searchbar/SearchBar'
import jobData from '../public/jobDummyData'
function App() {
  
console.log(jobData);

  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar/>
      {
        jobData.map((job)=><JobCard key={job.id} {...job}/>)
      }
    </div>
  )
}

export default App
