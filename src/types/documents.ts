export interface IDocument {
  id: string;
  title: string;
  documentUrl: string;
  documentId: string;
  createdAt: string;
}

export type DocumentFormData = Omit<IDocument, 'id' | 'createdAt'>;
