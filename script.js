document.addEventListener("DOMContentLoaded", function () {
    const restaurantList = document.querySelector(".restaurant-list");
    const menuDisplay = document.querySelector(".menu-display");

    // Generate restaurant list
    menuData.forEach((menu, index) => {
        const restaurantItem = document.createElement("li");
        const restaurantLink = document.createElement("a");
        restaurantLink.href = "#";
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
        menuCard.classList.add('menu-card');

        const menuTitle = document.createElement('h2');
        menuTitle.textContent = menu.restaurant_name;
        menuCard.appendChild(menuTitle);

        const menuLocation = document.createElement('h3');
        menuLocation.textContent = menu.location;
        menuCard.appendChild(menuLocation);

        const chefName = document.createElement('p');
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
            winePairing.textContent = `Wine Pairing: ${course.wine_pairing}`;
            courseItem.appendChild(winePairing);

            courseList.appendChild(courseItem);
        });

        menuCard.appendChild(courseList);

        const grandTotal = document.createElement('p');
        grandTotal.classList.add('grand-total');
        grandTotal.textContent = `Grand Total: €${menu.grand_total}`;
        menuCard.appendChild(grandTotal);

        menuDisplay.appendChild(menuCard);
    }

    // Display the first menu by default
    displayMenu(0);
});
