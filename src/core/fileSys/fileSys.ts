
type callback = (err?: Error, context?: string) => void
/**
 * @typedef {(err?: Error, context?: string) => void} callback
 */

const url = window.location

/**
 * @description Create a path from paths
 * 
 * @param path Paths to be joined
 * @returns {string}
 */
function path(...path: string[]) {
    return window.location.href + path.join('/')
}

/**
 * @description Get text from a file using fetch
 * 
 * @param {string} path Url or path to a file
 * @param {callback} callback Function that will be
 * executed after fetch operation failed or success
 * 
 * @returns {Promise<void>}
 */
async function getText(path: string, callback: callback ): Promise<void> {
    await fetch(path)
        .then(data => data.text())
        .then(text => callback(undefined, text || ''))
        .catch(err => callback( new Error(err) ))
}

/**
 * @description Get data from json file using fetch
 * 
 * @param {string} path Url or path to json file
 * @param {callback} callback Function that will be
 * executed after fetch operation failed or success
 * 
 * @returns {Promise<void>}
 */
async function getJSON(path: string, callback: callback): Promise<void> {
    await fetch(path)
        .then(data => data.text())
        .then(text => callback(undefined, text || ''))
        .catch(err => callback( new Error(err) ))
}

function sendText(text: string, name: string) {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', name)
    element.style.display = 'none'
    element.click()
}

export default {
    url,
    path,
    getText,
    getJSON,
    sendText
}