import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";

// https://api.github.com/users/Vishal-Kanabargi
// http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json

const initState = {
  numOfFollowers: '',
  NoOfPublicRepos: ''
}

function App() {
  const [profile, setprofile] = useState(initState)

  const getUserDetails = async () =>{
    const profileData = await fetch('https://api.github.com/users/Vishal-Kanabargi')
    const jsonProfileData = await profileData.json()

    setprofile({
      numOfFollowers: jsonProfileData.followers ,
      NoOfPublicRepos: jsonProfileData.public_repos
    })
  }
  useEffect(()=>{
     getUserDetails()
  }, [])
  return (
    <div className="App">
      <header className="">
        <h2>Fetch Data</h2>
        <h3>`Number of followers: {profile.numOfFollowers}`</h3>
        <h3>`Number of public Repos: {profile.NoOfPublicRepos}`</h3>
      </header>
    </div>
  );
}

export default App;