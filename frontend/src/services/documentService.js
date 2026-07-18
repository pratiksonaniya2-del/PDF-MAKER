const STORAGE_KEY = "paperflow_documents";

export const getDocuments = () => {
  const docs = localStorage.getItem(STORAGE_KEY);
  return docs ? JSON.parse(docs) : [];
};

export const saveDocuments = (documents) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
};

export const getDocumentById = (id) => {
  return getDocuments().find((doc) => doc.id === id);
};

export const createDocument = (document) => {
  const docs = getDocuments();

  docs.unshift(document);

  saveDocuments(docs);
};

export const updateDocument = (updatedDocument) => {
  const docs = getDocuments().map((doc) =>
    doc.id === updatedDocument.id ? updatedDocument : doc,
  );

  saveDocuments(docs);
};

export const deleteDocument = (id) => {
  const docs = getDocuments().filter((doc) => doc.id !== id);

  saveDocuments(docs);
};
export const updateDocumentContent = (id, content) => {
  const documents = getDocuments();

  const updated = documents.map((doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        content,
        updatedAt: new Date().toISOString(),
      };
    }

    return doc;
  });

  saveDocuments(updated);
};

export const updateDocumentTitle = (id, title) => {
  const documents = getDocuments();

  const updated = documents.map((doc) => {
    if (doc.id === id) {
      return {
        ...doc,
        title,
        updatedAt: new Date().toISOString(),
      };
    }

    return doc;
  });

  saveDocuments(updated);
};
