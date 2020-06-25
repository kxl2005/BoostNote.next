import NoteDb from './NoteDb'
import { NoteDoc, FolderDoc } from './types'
import { join } from 'path'

declare function $readFile(pathname: string): Promise<string>
declare function $readdir(pathname: string): Promise<string[]>

interface FolderData {
  pathname: string
}

interface BoostNoteJSONData {
  folders: FolderDoc[]
}

export default class FSNoteDb implements NoteDb {
  basePathname: string
  constructor(basePathname: string) {
    this.basePathname = basePathname
  }

  async init(): Promise<void> {}

  async getFolder(pathname: string): Promise<FolderDoc | null> {
    return null
  }

  async getNote(noteId: string): Promise<NoteDoc | null> {
    const notePathname = this.getNotePathname(noteId)
    const rawContent = await $readFile(notePathname)

    return JSON.parse(rawContent)
  }

  getBoostNoteJSONPath() {
    return join(this.basePathname, 'boostnote.json')
  }

  async getBoostNoteJSON(): Promise<{}> {
    const jsonPathname = this.getBoostNoteJSONPath()
    const rawContent = await $readFile(jsonPathname)

    return JSON.parse(rawContent)
  }

  getNotesFolderPathname() {
    return join(this.basePathname, 'notes')
  }

  getNotePathname(noteId: string) {
    return join(this.getNotesFolderPathname(), `${noteId}.json`)
  }
}
