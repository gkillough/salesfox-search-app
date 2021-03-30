export async function getNews(keyword, location) {
	fetch(`http://localhost:5000/api/news?q=${keyword}&zip_code=${location}`)
    .then((res) => res.json())
    .then(
      (result => result)
      ,
      (error) => {
        console.log(error);
      }
    );
}