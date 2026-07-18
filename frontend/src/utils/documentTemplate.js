export const createNewDocument = () => ({
  id: crypto.randomUUID(),
  title: "Untitled Document",
  content: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});