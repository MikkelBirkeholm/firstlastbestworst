import React from 'react'
import './AddRow.css'

export default function AddRow() {
  let promptList = JSON.parse(localStorage.getItem('promptList'))

  function addNewRow() {
    const trashcan = document.createElement('img')
    trashcan.setAttribute('src', '/src/assets/trash.svg')
    trashcan.classList.add('trash')

    const randomPrompt =
      promptList[Math.floor(Math.random() * promptList.length)].prompts
    const newRow = document.createElement('div')
    const promptDiv = document.createElement('div')
    promptDiv.append(randomPrompt, trashcan)

    newRow.className = 'row'
    newRow.append(promptDiv)
    newRow.innerHTML += `
        <div>
        <input type="text" placeholder="First" />
            <label class="s-check"><span>A</span><input type="checkbox" /></label>
            <label class="a-check"><span>S</span><input type="checkbox"  /></label>
        </div>
        <div>
            <input type="text" placeholder="Last" />
            <label class="s-check"><span>A</span><input type="checkbox" /></label>
            <label class="a-check"><span>S</span><input type="checkbox"  /></label>
        </div>
        <div>
            <input type="text" placeholder="Best" />
            <label class="s-check"><span>A</span><input type="checkbox" /></label>
            <label class="a-check"><span>S</span><input type="checkbox"  /></label>
        </div>
        <div>
            <input type="text" placeholder="Worst" />
            <label class="s-check"><span>A</span><input type="checkbox" /></label>
            <label class="a-check"><span>S</span><input type="checkbox"  /></label>
        </div>
        `
    document.getElementById('addRowBtn').before(newRow)
    let trashcans = document.querySelectorAll('.trash')
    trashcans.forEach((trashcan) => {
      trashcan.addEventListener('click', (e) => {
        // show popup with "are you sure?" and "cancel" buttons
        // if "cancel" is clicked, do nothing
        // if "are you sure?" is clicked, remove the row

        e.target.parentNode.parentNode.remove()
      })
    })
  }

  return (
    <button onClick={addNewRow} id="addRowBtn">
      Add Row
    </button>
  )
}
