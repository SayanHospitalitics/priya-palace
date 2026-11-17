import { roomsList } from './room'
import type { Room } from './room'

export const roomName = (r: Room) => `${r.type} ${r.subType}`.trim()

/** Room selected by ?room=<index> (defaults to the first room). */
export function currentRoom() {
  const i = Number(new URLSearchParams(window.location.search).get('room'))
  const index = Number.isInteger(i) && i >= 0 && i < roomsList.length ? i : 0
  return { room: roomsList[index], index }
}
