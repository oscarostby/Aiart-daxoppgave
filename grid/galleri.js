    const imageFileNames = [
        'DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp',
        'DALL·E 2024-02-25 13.55.34 - Visualize an oil painting that captures the classic still life subject of a bowl of fruit. The composition features a richly detailed bowl overflowing.webp',
        'DALL·E 2024-02-25 13.55.41 - Imagine a futuristic garden where the flowers are not organic, but robotic. Each flower is meticulously designed with metallic petals that gleam in th.webp',
        'DALL·E 2024-02-25 13.55.45 - Reimagine the scene with a specific color scheme_ the robot dragon now has a striking red tint to its metallic body, symbolizing its fiery nature and .webp',
        'DALL·E 2024-02-25 13.55.51 - Envision a futuristic scene where a robot Viking, designed with intricate metallic armor that reflects the traditional Viking appearance, rides atop a.webp',
        'DALL·E 2024-02-25 13.55.56 - Revise the scene once more, placing the Viking warrior with green eyes and red hair, and his baby dragon companion, at the forefront of a Viking ship,.webp',
        'DALL·E 2024-02-25 13.56.00 - Imagine a revised scene from the Viking Age, where the same formidable Viking warrior, characterized by striking green eyes and fiery red hair, now ha.webp',
        'DALL·E 2024-02-25 13.56.05 - Imagine a scene set in the Viking Age, where a formidable Viking warrior stands proudly in front of a traditional longhouse. This Viking, characterize.webp',
        'DALL·E 2024-02-25 13.56.09 - Envision a captivating scene where a Hydra from Greek mythology, a formidable multi-headed serpent, coils around a modern computer screen. The Hydra, .webp',
        'DALL·E 2024-02-25 13.56.13 - Imagine a powerful scene where a majestic Chinese dragon, with scales glistening in various shades of red, curls around a modern computer screen. Red,.webp',
        'DALL·E 2024-02-25 13.56.16 - Envision a scene where a significantly larger, majestic raven perches atop an advanced LED keyboard, its white lights softly illuminating the scene. T.webp',
        'DALL·E 2024-02-25 13.56.20 - Imagine a scene where a mysterious raven perches gracefully on a modern LED keyboard, illuminated by soft white lights. The keyboard, with its sleek d.webp',
        'DALL·E 2024-02-25 13.56.23 - Visualize a high-performance computer with a transparent case, as seen through the artistic lens of 12th century Japan. This concept marries the sophi.webp',
        'DALL·E 2024-02-25 13.56.27 - Envision a high-performance computer with a transparent case, creatively reimagined in the style of Maya art. This unique portrayal combines the advan.webp',
        'DALL·E 2024-02-25 13.56.30 - Visualize a high-performance computer with a transparent case, reimagined in the style of Archaic Egyptian art. This computer merges the ancient with .webp',
        'DALL·E 2024-02-25 13.56.35 - Imagine a high-performance computer with a transparent case, transformed through the lens of Art Nouveau style. This artistic approach brings out the .webp',
        'DALL·E 2024-02-25 13.56.39 - Visualize a modern, high-performance computer with a sleek, transparent case that allows a clear view of its internal components. Inside, blue and red.webp',
        'DALL·E 2024-02-25 13.56.42 - Visualize a modern, high-performance computer with a sleek, transparent case that allows a clear view of its internal components. Inside, blue and red.webp',
        'DALL·E 2024-02-25 13.58.07 - Envision a powerful and mystical scene where the Four Horsemen of the Apocalypse are majestically riding robotic dragons. Each horseman, cloaked in an.webp',
        'DALL·E 2024-02-25 13.58.55 - Imagine a whimsical and slightly eerie scene featuring four happy clowns with vampire teeth. These clowns are dressed in traditional, colorful clown o.webp',
        'DALL·E 2024-02-25 17.12.53 - Picture a triumphant and symbolic scene with three clowns standing on top of a hill, holding an American flag high above their heads. These clowns are.webp',
        'DALL·E 2024-02-25 17.15.57 - Envision a heartwarming and adorable scene where a puppy, a kitten, and a piglet are sitting together, sharing a banana. The puppy is fluffy, with a c.webp',
        'DALL·E 2024-02-25 17.16.48 - Imagine a charming and delightful scene where a Staffordshire Bull Terrier puppy, a kitten, and a piglet are sitting together, sharing a banana. The S.webp',
        'DALL·E 2024-02-25 17.19.03 - Envision a humorous and offbeat scene where two men and two women are deeply involved in a game of poker, each wearing a dog mask and sitting in their.webp',
        'DALL·E 2024-02-25 17.21.38 - Imagine an engaging scene of four people, two men and two women, sitting around a poker table, deeply focused on their game. Each player represents a .webp',
        'DALL·E 2024-02-25 17.21.42 - Imagine an engaging scene of four people, two men and two women, sitting around a poker table, deeply focused on their game. Each player represents a .webp'
    ];



    const imageGrid = document.getElementById("imageGrid");
    const popupContainer = document.getElementById("popupContainer");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");
    const error = "  \\O/ AI MAKES NO ART, MAKE SOME INSTEAD, OR LEAVE THAT TO SUCKERBURGZ <3";
    const errElement = document.getElementById("error-message");

    
    // Loop through the image file names and create image elements for grid
    imageFileNames.forEach(fileName => {
        const img = document.createElement("img");
        img.src = `/mnt/images/${fileName}`;
        img.alt = fileName;
        img.addEventListener("click", () => {
            popupImage.src = img.src;
            popupContainer.style.display = "flex";
        });

        img.onerror = () => {
            img.style.display = "none";
            errElement.textContent =  error;
        };
        imageGrid.appendChild(img);
    });
    
    // Close popup when close button is clicked
    closePopup.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });
    
    // Close popup when clicking outside the image
    popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });
    