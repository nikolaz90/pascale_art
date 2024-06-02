export const capitalize = (text) => {
    const firstLetter = text[0].toUpperCase();
    return `${firstLetter}${text.slice(1)}`;
}