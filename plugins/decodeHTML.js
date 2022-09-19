export default ({ app }, inject) => {
    // Inject $decodeHtml(txt) in Vue, context and store.
    inject('decodeHtml', txt => {
        let temp = document.createElement("textarea")
        temp.innerHTML = txt
        return temp.value
    })
  }