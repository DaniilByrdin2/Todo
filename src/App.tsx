import './App.css';
import Header from './Components/todo-header/todo-header';
import TodoList from './Components/todo-lisst/todo-list';
import { useState } from 'react';

let todoData = {
  date: [
    { id: 1, status: true, text: 'Drink Coffee' },
    { id: 2, status: false, text: 'Pokushat' },
    { id: 3, status: true, text: 'Pokakat' },
    { id: 4, status: false, text: '213' },
    { id: 5, status: true, text: 'gfvdfv' }
  ],
  term: ''
}

function App() {
  const [store, setStore] = useState(todoData)
  const [typeToogle, setTypeToogle] = useState('all')
  const [term, setTerm] = useState(todoData.term)

  const changeTerm = (text) => {
    if (text.length === 0) {
      setStore(todoData)
    } else {
      setStore(
        {
          date: [...store.date].filter(el => { return el.text.indexOf(text) > -1 }),
          term: text
        }
      )
    }
  }

  const AddPost = (post, tg = typeToogle) => {
    if (typeToogle === 'done') {
      setStore( {
        ...store,
        date: [...store.date, { id: Date.now(), status: false, text: post }]
      } );
    } else {
      setStore( {
        ...store,
        date: [...store.date, { id: Date.now(), status: true, text: post }]
      } );
    }
  }

  const deletePost = (id) => {
    const index = store.date.findIndex((obj) => {
      return obj.id === id
    })
    if (index !== store.date.length - 1) {
      const one = store.date.slice(0, index)
      const two = store.date.slice(index + 1, store.length)
      setStore(
        {
          ...store,
          date: [...one, ...two]
        } 
      )
    }
    if (index === store.date.length - 1) {
      setStore(
        {
          ...store,
          date: [...store.date.slice(0, store.date.length - 1)] 
        } 
      )
    }
  }

  const getInfo = () => {
    const info = {
      'more': 0,
      'done': 0,
    }
    store.date.map(el => {
      if (el.status) info.more++
      if (!el.status) info.done++
    })
    return info
  }

  const toogleTodoItem = (id) => {
    store.date.map((el) => {
      if (id === el.id) {
        let toogelEl = { ...el, status: !el.status } 

        const index = store.date.findIndex((obj) => {
          return obj.id === id
        })

        const one = store.date.slice(0, index)
        const two = store.date.slice(index + 1, store.length)
        setStore( {
          ...store,
          date: [...one, toogelEl, ...two]
        } )
      }
    })
  }

  const toogleState = (params) => {
    setTypeToogle(params)
  }

  return (
    <div className="App">
      <Header getInfo={getInfo} state={store} />
      <TodoList
                  term={term}
                  changeTerm={changeTerm}
                  typeToogle={typeToogle}
                  state={store}
                  toogleState={toogleState}
                  toogleTodoItem={toogleTodoItem}
                  deletePost={deletePost}
                  AddPost={AddPost} />
    </div>
  );
}

export default App;
