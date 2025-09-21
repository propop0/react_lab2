import './App.css'
import Profile from './components/Profile'

function App() {
const profiles = [
    { id: 1, name: "Bohdan", role: "Designer", avatarUrl: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 2, name: "Anna", role: "Developer", avatarUrl: "https://randomuser.me/api/portraits/women/35.jpg" },
    { id: 3, name: "Daniel", role: "Manager", avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg" },
    { id: 4, name: "Dima", role: "Tester", avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg" },
    { id: 5, name: "Kira", role: "Support", avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 6, name: "Vladyslava", role: "HR", avatarUrl: "https://randomuser.me/api/portraits/women/27.jpg" },
    { id: 7, name: "Taras", role: "Psychologist", avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 8, name: "Olga", role: "Marketer", avatarUrl: "https://randomuser.me/api/portraits/women/16.jpg" },
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
