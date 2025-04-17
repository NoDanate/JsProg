class News{
    constructor(title, text, tags, publishDate){
        this.title = title;
        this.text = text;
        this.tags = tags;
        //this.publishDate = new Date(publishDate);
        const [day, month, year] = publishDate.split(".");
        this.publishDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }


    print(){
        alert(this.publishDate)
        const now = new Date();
        const diff = now - this.publishDate;
        let dateString;

        const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24))

        alert(daysAgo);

        if(daysAgo <= 1){
            dateString = "сегодня";
        } else if(daysAgo <7){
            dateString = `${daysAgo} дней назад`;
        } else{
            const day = String(this.publishDate.getDate()).padStart(2, '0');
            const month = String(this.publishDate.getMonth() + 1).padStart(2, '0');
            const year = this.publishDate.getFullYear();
            dateString = `${day}.${month}.${year}`;
        }

        document.writeln(
            `
            <div class="news">
                <h1>${this.title}</h1>
                <div class="date">${dateString}</div>
                <p>${this.text}</p>
                <div class="tags">${this.tags.join(", ")}</div>
            </div>
            `
        );
    }
}

class NewsFeed {
    constructor(){
        this.newsArray = [];
    }

    get newsCount(){
        return this.newsArray.length;
    }

    getAllNews(){
        this.newsArray.forEach(news => news.print());
    }

    addNews(news){
        this.newsArray.push(news);
    }

    deleteNews(index){
        if(index >= 0 && index < this.newsArray.length){
            this.newsArray.splice(index, 1);
        }
    }

    dataSortNews(){
        this.newsArray.sort((a,b) => b.publishDate - a.publishDate);
    }

    searchNewsByTag(tag){
        return this.newsArray.filter(news => news.tags.include(tag))
    }

}

const newsFeed = new NewsFeed();


const news1 = new News("Китай сократит импорт голливудских фильмов", "Сборы американских картин за последние годы в стране снизились, но всё равно составляют значительную часть общемировых.",
    ["#новости","#китай"],"10.04.2025"
)

const news2 = new News("Китай сократит импорт голливудских фильмов", "Сборы американских картин за последние годы в стране снизились, но всё равно составляют значительную часть общемировых.",
    ["#новости","#китай"], "8.4.2025"
)

const news3 = new News("Китай сократит импорт голливудских фильмов", "Сборы американских картин за последние годы в стране снизились, но всё равно составляют значительную часть общемировых.",
    ["#новости","#китай"], "30.3.2024"
)

newsFeed.addNews(news1);
newsFeed.addNews(news2);
newsFeed.addNews(news3);

document.writeln('<h2>Все новости</h2>')
newsFeed.getAllNews();

let newDate = new Date();

alert(newDate)
