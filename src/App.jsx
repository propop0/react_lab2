import './App.css'
import Profile from './components/Profile'

function App() {
  const profiles = [
    {id:1, name: "Bohdan", role: "Designer", avatarUrl: "https://avatars.githubusercontent.com/u/71257296?v=4"}
  ];

  return  (
      <div className="container">
        {profiles.map(profile => (
          <Profile
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatarUrl={profile.avatarUrl}
          />
        ))}
      </div>
  )
}

export default App
