document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.querySelector('.menu-container');

    menuData.forEach(menu => {
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

        menuContainer.appendChild(menuCard);
    });
});
