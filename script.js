const articles = [{
        id: "article1",
        title: "Nature",
        image: "./img/Без названия.jpg",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
        id2: "h1-1"
    },
    {
        id: "article2",
        title: "Picture",
        image: "./img/Без названия.jpg",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
        id2: "h1-2"
    },
    {
        id: "article3",
        title: "Culture",
        image: "./img/Без названия.jpg",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
        id2: "h1-3"
    }

];

const main = document.querySelector('main');
articles.forEach(article => {
    const div = document.createElement('div')
    const h1 = document.createElement('h1');
    const articleElement = document.createElement('article');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h1.textContent = "Hello World!"
    articleElement.id = article.id;
    h2.textContent = article.title;
    img.src = article.image;
    p.textContent = article.body;

    h1.id = article.id2

    articleElement.append(h2);
    articleElement.append(img);
    articleElement.append(p);
    div.append(h1);
    div.append(articleElement)
    main.append(div);
});





let article1 = document.getElementById('article1');
article1.style.display = "none"

document.getElementById('h1-1').addEventListener('click', function() {
    article1.style.display = "block"

});
document.getElementById('h1-1').addEventListener('dblclick', function() {
    article1.style.display = "none"
});


let article2 = document.getElementById('article2');
article2.style.display = "none"
document.getElementById('h1-2').addEventListener('click', function() {
    article2.style.display = "block"

})
document.getElementById('h1-2').addEventListener('dblclick', function() {
    article2.style.display = "none"
});


let article3 = document.getElementById('article3');
article3.style.display = "none"
document.getElementById('h1-3').addEventListener('click', function() {
    article3.style.display = "block"
})
document.getElementById('h1-3').addEventListener('dblclick', function() {
    article3.style.display = "none"
});