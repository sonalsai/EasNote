export const getTitle = (note) => {
  if (note?.title) return note.title;
  if (note?.content) {
    const words = note.content.trim().split(/\s+/);
    return words.slice(0, 2).join(" ") + (words.length > 2 ? "..." : "");
  }
  return "";
};
