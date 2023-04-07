import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import './App.css'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField),
    )
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex </h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       monsters: [],
//       filteredMonsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         }),
//       )
//   }

//   onSearchChange = (event) => {
//     this.setState({
//       searchField: event.target.value.toLocaleLowerCase(),
//     })
//   }
//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField),
//     )
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex </h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
//   // generateID(length) {
//   //   return [...Array(length)]
//   //     .map((i) => (~~(Math.random() * 36)).toString(36))
//   //     .join('')
//   // }
// }

export default App
