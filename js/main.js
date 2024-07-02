// ====== data ======

const data = [

    {
        id : '0',
        title : 'HTML5' , 
        image : './images/html-logo.svg' , 
        dis : `
            HTML, or HyperText Markup Language, 
            is the standard markup language used to create web pages. 
            It provides the structure of a webpage by using various elements and tags to define the different parts of the content, 
            such as headings, paragraphs, links, images, and more.
        `
    },

    {
        id : '1',
        title : 'CSS3' , 
        image : './images/css-logo.svg' , 
        dis : `
            CSS, or Cascading Style Sheets, 
            is a stylesheet language used to describe the presentation of a document written in HTML or XML. 
            CSS controls the layout, colors, fonts, 
            and overall visual appearance of web pages, 
            making them more attractive and user-friendly.
        `
    },

    {
        id : '2',
        title : 'Java Script' , 
        image : './images/js-logo.svg' , 
        dis : `
            JavaScript (JS) is a high-level, 
            interpreted programming language that is primarily used to create dynamic and interactive content on web pages. 
            It allows developers to implement complex features such as form validations, animations, 
            and asynchronous operations, making web pages more engaging and functional.
        `
    },

    {
        id : '3',
        title : 'React JS' , 
        image : './images/react-logo.svg' , 
        dis : `
            React.js is an open-source JavaScript library developed by Facebook for building user interfaces, 
            specifically for single-page applications. 
            It allows developers to create large web applications that can update and render efficiently in response to data changes. 
            React uses a component-based architecture, where the UI is broken down into reusable, self-contained components.
        `
    },

    {
        id : '4',
        title : 'Node JS' , 
        image : './images/node-js-logo.svg' , 
        dis : `
            Node.js is an open-source, 
            cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. 
            It is built on Chrome's V8 JavaScript engine and 
            enables the development of server-side and network applications with JavaScript. 
            Node.js is designed for building scalable network 
            applications and can handle numerous simultaneous connections efficiently.
        `
    },

];

const body = document.getElementById('gallery');
const displayData = document.getElementById('display_data');
const cardData = document.getElementById('data_cont');

// ====== display-data-on-cards ======

const displayAllData = () => {

    for (let i = 0 ; i < data.length ; i++){

        const item = data[i];
        const card = document.createElement('div');

        card.classList.add('data_card');
        card.setAttribute('id' , i);
        card.innerHTML = `<img src = "${item.image}" alt = "${item.title}" >`;

        cardData.append(card);

        card.addEventListener('click' , (e) => {

            selectCard(item);

            window.scrollTo({ top: 0, behavior: 'smooth' });

            setActiveClass(e.currentTarget);

        })

    }

}

// === show-data-in-main-card ===

const selectCard = (item) => {

    displayData.innerHTML = `

        <div class="img" >

            <img src = "${item.image}" alt = "${item.title}" >
            <p> ${item.title} </p>

        </div>

        <div class="dis">

            <h3>About :</h3>

            <p>${item.dis}</p>

        </div>

    `;

}

// === add-active-class-in-cards ===

const setActiveClass = (currentTarget) => {

    const allCards = document.querySelectorAll('.data_card');

    for (let i = 0; i < allCards.length; i++) {

        allCards[i].classList.remove('active');

    }

    currentTarget.classList.add('active');

}

displayAllData();