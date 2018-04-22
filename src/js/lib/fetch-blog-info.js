async function fetchBlogInfo() {
  const response = await fetch('https://api.github.com/users/HoffsMH/gists');
  return response.json();
}

export default fetchBlogInfo;
