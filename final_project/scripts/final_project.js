// JavaScript code

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const chapters = [
        {
            chaptername: "Colegio de Dagupan Chapter",
            location: "Dagupan City, Philippines",
            founded: "2020, March 20",
            membership: 200,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRR47p8Z1kH9gww5rfkH4nSqhu5pxVwsDQg&s"
        },
        {
            chaptername: "St. Mary's University Chapter",
            location: "Bayombong, Nueva Vizcaya, Philippines",
            founded: "2013, September 4",
            membership: 500,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKK6TT4vryxkWAhF6IDiBbXnozdCcuD9OvUA&s"
        },
        {
            chaptername: "Aurora State College of Technology Chapter",
            location: "Baler, Aurora, Philippines",
            founded: "2018, March 6",
            membership: 300,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw6FhrWuvAbPFitgl4e1U8BFmBm5qwkr_Sg&s"
        },
        {
            chaptername: "PNTC Chapter",
            location: "Dasmarinas, Cavite, Philippines",
            founded: "2022, September 21",
            membership: 700,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7GAs9Zl1ApaW-E52tzk_DqnGM63afPQyzg&s"
        },
        {
            chaptername: "Aquinas University Chapter",
            location: "Legazpi City, Albay, Philippines",
            founded: "2013, November 19",
            membership: 900,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9PrEcPWPxaKZT0706mnA4c8995PdWFvQsg&s"
        },
        {
            chaptername: "Iloilo Doctors College Chapter",
            location: "Molo, Iloilo City, Philippines",
            founded: "2016, July 29",
            membership: 250,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88vi4b8qu_IPlJUAbHsrEDIhhw_SVrq9qZw&s"
        },
        {
            chaptername: "Siliman University Chapter",
            location: "Dumaguete City, Negros Occidental",
            founded: "2020, January 3",
            membership: 350,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gbCS72i2zyJyNEDDg96VwqnxVYlBmbyu8LIZER4JEiRLoLOcExJMsxWu6nYE6hUnb9c&usqp=CAU"
        },
        {
            chaptername: "Divine Word College Chapter",
            location: "Tacloban City, Leyte, Philippines",
            founded: "2019, January 8",
            membership: 150,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6ZF87Qi461OeYwfiyBvYJ3R9ei-k-uhYn5ITQNxI6hJrlU7dXUKq-Q2qd5zzZdwVGKk&usqp=CAU"
        },
        {
            chaptername: "TUP Manila Chapter",
            location: "Manila City,NCR, Philippines",
            founded: "1991, December 4",
            membership: 150,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOW89xXoxvUwKtVA6c1eKLgmKV1j1dmYHb5g&s"
        },
    ];

    // Function to generate chapter cards
    function generateChapterCards(chapterList) {
        const gallery = document.getElementById('chapter-gallery');
        gallery.innerHTML = ''; // Clear existing content

        chapterList.forEach(chapter => {
            const figure = document.createElement('figure');

            const img = document.createElement('img');
            img.src = chapter.imageUrl;
            img.alt = chapter.chaptername;
            img.loading = 'lazy'; // native lazy loading
            figure.appendChild(img);

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = chapter.chaptername;
            figure.appendChild(figcaption);

            gallery.appendChild(figure);
        });
    }

    // Function to filter and display chapters based on category
    function filterAndDisplay(category) {
        let filteredChapters = [];

        switch (category) {
            case 'Old':
                filteredChapters = chapters.filter(chapter => parseInt(chapter.dedicated.split(',')[0]) < 2020);
                break;
            case 'New':
                filteredChapters = chapters.filter(chapter => parseInt(chapter.dedicated.split(',')[0]) > 2020);
                break;
            case 'Large':
                filteredChapters = chapters.filter(chapter => chapter.area > 10);
                break;
            case 'Small':
                filteredChapters = chapters.filter(chapter => chapter.area < 10);
                break;
            case 'All':
            default:
                filteredChapters = chapters;
                break;
        }

        generateChapterCards(filteredChapters);
    }

    // Event listener for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.textContent.trim(); // Get text content of clicked link
            filterAndDisplay(category);
        });
    });

    // Initial load, show all chapters
    filterAndDisplay('All');
});


