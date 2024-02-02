import React from 'react';
import { useState } from 'react';

import Header from './Components/todo-header/todo-header.tsx';
import TodoList from './Components/todo-list/todo-list.tsx';

import './App.css';

export type getInfoType = {
  'more': number,
  'done': number
}

export type Task = {
  id: number,
  status: boolean,
  text: string
}

export interface InitState {
  "data": Task[],
  "term": string
}

export type TogleType = 'all' | 'done' | "active";


let todoData = {
  data: [
    { id: 1, status: true, text: 'Drink Coffee' },
    { id: 2, status: false, text: 'Pokushat' },
    { id: 3, status: true, text: 'Pokakat' },
    { id: 4, status: false, text: '213' },
    { id: 5, status: true, text: 'gfvdfv' }
  ],
  term: ''
}

function App() {
  const [store, setStore] = useState<InitState>(todoData)
  const [typeToogle, setTypeToogle] = useState<TogleType>('all')
  const [term] = useState<string>(todoData.term)

  const changeTerm = (text: string): void => {
    if (text.length === 0) {
      setStore(todoData)
    } else {
      setStore(
        {
          data: [...store.data].filter(el => { return el.text.indexOf(text) > -1 }),
          term: text
        }
      )
    }
  }

  const AddPost = (post: string, tg = typeToogle): void => {
    
    if (typeToogle === 'done') {
      setStore( {
        ...store,
        data: [...store.data, { id: Date.now(), status: false, text: post }]
      } );
    } else {
      setStore( {
        ...store,
        data: [...store.data, { id: Date.now(), status: true, text: post }]
      } );
    }
  }

  const deletePost = (id: number): void => {
    const index = store.data.findIndex((obj) => {
      return obj.id === id
    })
    if (index !== store.data.length - 1) {
      const one = store.data.slice(0, index)
      const two = store.data.slice(index + 1, store.data.length)
      setStore(
        {
          ...store,
          data: [...one, ...two]
        } 
      )
    }
    if (index === store.data.length - 1) {
      setStore(
        {
          ...store,
          data: [...store.data.slice(0, store.data.length - 1)] 
        } 
      )
    }
  }

  const getInfo = (): getInfoType => {
    const info = {
      'more': 0,
      'done': 0,
    }
    store.data.forEach( (el) => {
      if (el.status) info.more++;
      if (!el.status) info.done++;
    });

    return info
  }

  const toogleTodoItem = (id: number): void => {
    store.data.forEach((el) => {
      if (id === el.id) {
        let toogelEl = { ...el, status: !el.status } 

        const index = store.data.findIndex((obj) => {
          return obj.id === id
        })

        const one = store.data.slice(0, index)
        const two = store.data.slice(index + 1, store.data.length)
        setStore( {
          ...store,
          data: [...one, toogelEl, ...two]
        } )
      }
    })
  }

  const toogleState = (params: TogleType): void => {
    setTypeToogle(params)
  }

  return (
    <div className="App">
      <Header getInfo={ getInfo } state={ store } />
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
