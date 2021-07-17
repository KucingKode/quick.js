import Quick from '../lib/quick.js'

const {fileSys} = Quick.Core

// Private
const sidebar = document.querySelector('.sidebar')
const links = document.querySelectorAll('.links button')
const sidebarLinks = document.querySelectorAll('.sidebar button')

// documentation 
let docsIndex;
await fileSys.getText('./js/docsIndex.json', (err, ctx) => {
    docsIndex = JSON.parse(ctx)
})

// docs sidebar loader
function docsSidebar() {
    const docsSidebar = document.createElement('div')

    const btn = document.createElement('button')
    btn.classList.add('homeBtn')
    btn.innerText = 'Home'
    docsSidebar.appendChild(btn)

    Object.keys(docsIndex).forEach(head => {
        const a = document.createElement('a')
        a.classList.add('head')
        a.innerText = head

        const href = head
            .replace(/[\(\)\.]/g, '')
            .replace(/ & /g, '--')
            .replace(/[: ]/g, '-')
            .toLowerCase()
        a.href = `#${href}`
        
        docsSidebar.appendChild(a)
        
        docsIndex[head].forEach(child => {
            const a = document.createElement('a')
            a.classList.add('child')
            a.innerText = child
            const href = child.replace(': ', '-').replace(/[\(\)\.]/g, '').toLowerCase()
            a.href = `#${href}`
        
            docsSidebar.appendChild(a)

        })
    })

    return docsSidebar.innerHTML
}

// data
const ref = {
    docsSidebar: docsSidebar(),
    normalSidebar: document.querySelector('.sidebar').innerHTML
}
const states = {
    gsInitialized: false,
    docsInitialized: false,
    EcosystemInitialized: false,
    supportInitialized: false,
    current: 'home'
}

// unset all active links
const unsetActive = {
    nav: () => {
        links.forEach(link => {
            link.classList.remove('active')
        })
    },
    side: () => {
        sidebarLinks.forEach(link => {
            link.classList.remove('active')
        })
    }
}

export {unsetActive, ref, states}