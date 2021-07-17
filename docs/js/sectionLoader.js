import Quick from '../lib/quick.js'
import {unsetActive, ref, states} from './utility.js'


const {fileSys, std} = Quick.Core


// All HTML element required
const sideToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')

const docsBtns = document.querySelectorAll('.docsBtn')
const homeBtns = document.querySelectorAll('.homeBtn')
const gsBtns = document.querySelectorAll('.gsBtn')
const downloadBtn = document.querySelector('.download')
const githubBtn = document.querySelector('.github')

init()

// loaders
function loadHome() {
    focus(0, 'home')
}

async function loadGs() {
    if(!states.gsInitialized) {
        const markdowns = [
            './md/about.md',
            './md/gettingStarted.md'
        ]

        // load and compile markdowns
        // load and compile markdowns
        for (let i = 0; i < markdowns.length; i++) {
            const md = markdowns[i];
            await fileSys.getText(md, (err, ctx) => {
                if(err) console.error(err.message)
                document.querySelector('.gs').innerHTML += marked(ctx)
                const docsBtns = document.querySelectorAll('.docsBtn')
                docsBtns.forEach(btn => btn.addEventListener('click', loadDocs))
            })
        }


        states.gsInitialized = true
    }

    focus(1, 'gs')
}

async function loadDocs() {
    if(!states.docsInitialized) {
        const markdowns = [
            './md/std/methods.md',
            './md/drawing2d/Canvas2D.md',
            './md/std/Vector2D.md',
            './md/std/Line.md',
            './md/std/Grid.md',
            './md/std/Stack.md',
            './md/std/Queue.md',
            './md/drawing2d/Kit2D.md',
            './md/fileSys.md',
            './md/colorSys.md',
            './md/media.md',
        ]

        // load and compile markdowns
        for (let i = 0; i < markdowns.length; i++) {
            const md = markdowns[i];
            await fileSys.getText(md, (err, ctx) => {
                if(err) console.error(err.message)
                document.querySelector('.docs').innerHTML += marked(ctx)
            })
        }
    
        states.docsInitialized = true
    }
    
    focus(2, 'docs')
}

// Function utility

// set basic event listener
function init() {
    homeBtns.forEach(btn => btn.addEventListener('click', loadHome))
    gsBtns.forEach(btn => btn.addEventListener('click', loadGs))
    docsBtns.forEach(btn => btn.addEventListener('click', loadDocs))

    downloadBtn.addEventListener('click', () => {
        window.location = 'https://github.com/KucingKode/quick.js/releases/download/v2.0.0-alpha/quick.js'
    })
    githubBtn.addEventListener('click', () => {
        window.location = 'https://github.com/KucingKode/quick.js'
    })
    
    sideToggle.addEventListener('click', () => {
        sideToggle.classList.toggle('active')
        sidebar.classList.toggle('active')
    })
    loadSidebar('home')
}

// set focus of the main page
/**
 * 
 * @param {number} deep how deep the section
 * @param {string} target section target name
 */
function focus(deep, target) {
    unsetActive.nav()
    main.scroll({
        behavior: 'smooth',
        top: +getComputedStyle(main).height.replace('px', '') * deep
    })

    states.current = target

    switch (target) {
        case ('gs'): {
            gsBtns.forEach(btn => {
                btn.classList.add('active')
            })
            break;
        }
        case ('home'): {
            homeBtns.forEach(btn => {
                btn.classList.add('active')
            })
            break;
        }
        case ('docs'): {
            docsBtns.forEach(btn => {
                btn.classList.add('active')
            })
            break;
        }
    }
    loadSidebar(states.current)
}

// sidebar loader
function loadSidebar(current) {
    if(current != 'docs') {
        sidebar.innerHTML = ref.normalSidebar
        const docsBtn = document.querySelector('.sidebar .docsBtn')
        const homeBtn = document.querySelector('.sidebar .homeBtn')
        const gsBtn = document.querySelector('.sidebar .gsBtn')

        homeBtn?.addEventListener('click', loadHome)
        gsBtn?.addEventListener('click', loadGs)
        docsBtn?.addEventListener('click', loadDocs)
    } else {
        sidebar.innerHTML = ref.docsSidebar

        const homeBtn = document.querySelector('.sidebar .homeBtn')
        homeBtn.addEventListener('click', loadHome)
    }
}