export interface IDocument {
  id: number;
  title: string;
  documentUrl: string;
  documentId: string;
  createdAt: string;
}

export type DocumentFormData = Omit<IDocument, 'id' | 'createdAt'>;
