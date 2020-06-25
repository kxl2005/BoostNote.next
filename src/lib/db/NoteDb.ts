import {
  FolderDoc,
  AllDocsMap,
  TagDoc,
  TagDocEditibleProps,
  NoteDoc,
  NoteDocEditibleProps,
  Attachment,
  ObjectMap,
} from './types'

export default interface NoteDb {
  init(): Promise<void>
  getFolder(pathname: string): Promise<FolderDoc | null>
  upsertFolder(pathname: string, props?: Partial<FolderDoc>): Promise<FolderDoc>
  getAllDocsMap(): Promise<AllDocsMap>
  getTag(tagName: string): Promise<TagDoc | null>
  upsertTag(
    tagName: string,
    props?: Partial<TagDocEditibleProps>
  ): Promise<TagDoc>
  getNote(noteId: string): Promise<NoteDoc | null>
  createNote(noteProps: Partial<NoteDocEditibleProps>): Promise<NoteDoc>
  updateNote(
    noteId: string,
    noteProps: Partial<NoteDocEditibleProps>
  ): Promise<NoteDoc>
  trashNote(noteId: string): Promise<NoteDoc>
  untrashNote(noteId: string): Promise<NoteDoc>
  purgeNote(noteId: string): Promise<void>
  removeTag(tagName: string): Promise<void>
  removeFolder(folerPathname: string): Promise<void>
  getAllFolders(): Promise<FolderDoc[]>
  upsertAttachments(files: File[]): Promise<Attachment[]>
  removeAttachment(fileName: string): Promise<void>
  getAttachmentMap(): Promise<ObjectMap<Attachment>>
}
