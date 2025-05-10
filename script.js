/** @type {HTMLButtonElement} */ let chest1 = document.getElementById('chest1')
/** @type {HTMLButtonElement} */ let chest2 = document.getElementById('chest2')
/** @type {HTMLButtonElement} */ let chest3 = document.getElementById('chest3')
/** @type {HTMLButtonElement} */ let selectButton = document.getElementById('selectButton');
/** @type {HTMLButtonElement} */ let closeDialogButton = document.getElementById('closeDialogButton')

/** @type {HTMLElement} */ let chest1Div = document.querySelector('.chest1')
chest1Div.style.borderColor = '#09ff00'
/** @type {HTMLElement} */ let chest2Div = document.querySelector('.chest2')
chest2Div.style.borderColor = '#09ff00'
/** @type {HTMLElement} */ let chest3Div = document.querySelector('.chest3')
chest3Div.style.borderColor = '#09ff00'
/** @type {HTMLDialogElement} */ let correctChestDialog = document.getElementById('correctChestDialog')


let chest1Active, chest2Active, chest3Active, chestOpened

chest1Active = false
chest2Active = false
chest3Active = false
chestOpened = false

chest1Div.style.borderWidth = '0px'
chest2Div.style.borderWidth = '0px'
chest3Div.style.borderWidth = '0px'
chest1Div.style.borderStyle = 'solid'
chest2Div.style.borderStyle = 'solid'
chest3Div.style.borderStyle = 'solid'

function chestSelected(chest){
    if (chest === 'Chest1' && chestOpened === false){
        chest1Active = true
        chest2Active = false
        chest3Active = false
        chest1Div.style.borderWidth = '3px'
        chest2Div.style.borderWidth = '0px'
        chest3Div.style.borderWidth = '0px'
    } else if (chest === 'Chest2' && chestOpened === false){
        chest1Active = false
        chest2Active = true
        chest3Active = false
        chest1Div.style.borderWidth = '0px'
        chest2Div.style.borderWidth = '3px'
        chest3Div.style.borderWidth = '0px' 
    } else if (chest === 'Chest3' && chestOpened === false){
        chest1Active = false
        chest2Active = false
        chest3Active = true
        chest1Div.style.borderWidth = '0px'
        chest2Div.style.borderWidth = '0px'
        chest3Div.style.borderWidth = '3px'
    }
}

chest1Div.addEventListener('click', () => {
    chestSelected('Chest1')
})

chest2Div.addEventListener('click', () => {
    chestSelected('Chest2')
})

chest3Div.addEventListener('click', () => {
    chestSelected('Chest3')
})

selectButton.addEventListener('click', () => {
    if (chest1Active === false && chest2Active === false && chest3Active === false){
        alert("Selecciona un cofre tocandolo antes de presionar este botón.")
    } else if (chestOpened === 'chest1' || chestOpened === 'chest2' || chestOpened === 'chest3'){
        alert('Ya abriste un cofre. No puedes abrir los demas.')
    } else if (chestOpened == false) {
        if (chest1Active === true){
            chest1Div.style.borderColor = '#4287f5'
            chestOpened = 'chest1'
        } else if (chest2Active === true){
            chest2Div.style.borderColor = '#4287f5'
            chestOpened = 'chest2'
        } else if (chest3Active === true){
            chest3Div.style.borderColor = '#4287f5'
            chestOpened = 'chest3'            
        }
        correctChestDialog.showModal()
    }
})

closeDialogButton.addEventListener('click', () => {
    correctChestDialog.close()
})