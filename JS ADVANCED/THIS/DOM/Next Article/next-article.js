function getArticleGenerator(articles) {
    const content = document.getElementById('content');


    return function () {
        if (articles.length >= 1) {

            const article = document.createElement('article');
            content.appendChild(article);
            let currentArticle = articles.shift()
            article.textContent = currentArticle;

            return this;
        }
    }
}
