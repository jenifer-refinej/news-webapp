import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({category}) {
    const [article, setArticle] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ba8cc9e357549a89dbf2fc98370fd97`
      const dataInfo = fetch(url)
            .then(resolve => resolve.json())
            .then(data => setArticle(data.articles))
    },[category])
    return (
        <div>
            <h2 className="text-center">Latest <span className="">News</span></h2>
            <div className="news-item d-flex">
            {article.map((news, index) => {
                return (
                    <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url} />
                )
              
            })}
            </div>
          
        </div>
    )
}
export default NewsBoard;