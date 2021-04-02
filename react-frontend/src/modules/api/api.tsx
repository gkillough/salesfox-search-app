export async function getNews(keyword, location) {
	fetch(`https://search-beta.salesfox.ai/api/news?q=${keyword}&zip_code=${location}`)
    .then((res) => res.json())
    .then(
      (result => result)
      ,
      (error) => {
        console.log(error);
      }
    );
}