document.addEventListener("DOMContentLoaded", function () {
    const restaurantList = document.querySelector(".restaurant-list");
    const menuDisplay = document.querySelector(".menu-display");
    document.querySelector('.random_menu_btn').addEventListener('click', () => showRandomMenu())


    // Generate restaurant list
    menuData.forEach((menu, index) => {
        const restaurantItem = document.createElement("li");
        const restaurantLink = document.createElement("a");
        restaurantLink.href = "#";
        restaurantLink.setAttribute('data-bs-toggle', 'collapse'); 
        restaurantLink.setAttribute('data-bs-target', '#sidebar'); 
        
        restaurantLink.textContent = `${menu.restaurant_name} - ${menu.location}`;

        restaurantLink.addEventListener("click", (e) => {
            e.preventDefault();
            displayMenu(index);
        });

        restaurantItem.appendChild(restaurantLink);
        restaurantList.appendChild(restaurantItem);
    });
    
    function displayMenu(index) {
        const menu = menuData[index];
        menuDisplay.innerHTML = ""; // Clear previous menu display

        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card', 'mx-auto');


        const menuTitle = document.createElement('h2');
        menuTitle.classList.add('text-center', 'mb-4', 'border-bottom', 'pb-2');
        menuTitle.textContent = menu.restaurant_name;
        menuCard.appendChild(menuTitle);


        const menuLocation = document.createElement('h3');
        menuLocation.textContent = `\u{1F30D} ${menu.location}`;
        menuCard.appendChild(menuLocation);


        const chefName = document.createElement('p');
        chefName.classList.add('fw-bold', 'fst-italic', 'text-center');
        chefName.textContent = menu.chef_name;
        menuCard.appendChild(chefName);


        const diningDescription = document.createElement('p');
        diningDescription.textContent = menu.dining_room_description;
        menuCard.appendChild(diningDescription);

        const courseList = document.createElement('ul');
        courseList.classList.add('course-list');

        menu.tasting_menu.forEach(course => {
            const courseItem = document.createElement('li');
            courseItem.classList.add('course-item');

            const courseTitle = document.createElement('h4');
            courseTitle.classList.add('course-title');
            courseTitle.textContent = course.course;
            courseItem.appendChild(courseTitle);

            const courseDescription = document.createElement('p');
            courseDescription.classList.add('course-description');
            courseDescription.textContent = course.description;
            courseItem.appendChild(courseDescription);

            const coursePrice = document.createElement('p');
            coursePrice.classList.add('course-price');
            coursePrice.textContent = `Price: €${course.price}`;
            courseItem.appendChild(coursePrice);

           const winePairing = document.createElement('p');
            winePairing.classList.add('wine-pairing');
            winePairing.innerHTML = `Wine Pairing: ${createWineLink(course.wine_pairing, course.wine_pairing)}`;
            courseItem.appendChild(winePairing);



            courseList.appendChild(courseItem);
        });

        menuCard.appendChild(courseList);

        const grandTotal = document.createElement('p');
        grandTotal.classList.add('grand-total');
        grandTotal.textContent = `Grand Total: €${menu.grand_total} *`;
        menuCard.appendChild(grandTotal);

        menuDisplay.appendChild(menuCard);
        
    }
    
    function showRandomMenu() {
        const randomIndex = Math.floor(Math.random() * menuData.length);
        displayMenu(randomIndex);
    }


    // Display the first menu by default
    displayMenu(0);
});


function toggleMenu() {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('open');
}

function createWineLink(wineName, displayText) {
  // Replace spaces with plus signs in the wine name
  wineName = wineName.replace(/ /g, '+');

  // Create the Wine-Searcher link
  var link = 'https://www.wine-searcher.com/find/' + wineName;

  // Return the hyperlink as a string with the display text
  return '<a href="' + link + '" target="_blank">' + displayText + '</a>';
}







