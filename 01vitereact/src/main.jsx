import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
const anotherElement = (

<a href="https://google.com" target='_blank'>Visit google</a>

)

//create react element according to react using react
const myreactElement= React.createElement(
  'a',
  {href: 'https://google.com',
    target: '_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  
   <App/>
  
)

