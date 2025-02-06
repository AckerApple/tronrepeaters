import { countdown, html, tagElement } from 'https://cdn.jsdelivr.net/gh/AckerApple/cary-hardy@refs/heads/gh-pages/assets/bundle.js'

function virtualMeetup() {
  const date = new Date(Date.now() + 800000)

  return html`!!hello other world!!
  <hr />
  ${countdown({date})}
  `
}

tagElement(
  virtualMeetup,
  document.getElementsByTagName('virtual-meetup')[0]
)
