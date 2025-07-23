const URL = "https://jsonplaceholder.typicode.com/posts";

async function getData(url: string) {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
}

getData(URL);
