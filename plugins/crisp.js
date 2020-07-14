export default () => {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = '39a1a288-231b-45b5-a22b-2a99e49b7e1b'
  ;(function() {
    const d = document
    const s = d.createElement('script')

    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    d.getElementsByTagName('head')[0].appendChild(s)
  })()
}
