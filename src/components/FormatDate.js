
function FormatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
  
    const formattedDate = date.toLocaleDateString(undefined, options);
    return `${formattedDate} `;
}
export default FormatDate