import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Component goes here
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
