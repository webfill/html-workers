import { other } from './other.mjs'

postMessage(other())

self.onmessage = e => {
  postMessage(['received onmessage', e.data])
}

addEventListener('message', e => {
  postMessage(['received message event', e.data])
})
