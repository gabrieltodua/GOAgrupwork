let bar = document.getElementById("input");
let Answer = document.getElementById("AI");

function answer_ai() {
    let start = document.getElementById("logo.png");
    let img = document.getElementById("img");
    img.src = "";

    // 1

    let img_n1 = "imagen.png";
    let img_n2 = "image copyn.png";
    let random_imgn = Math.round(Math.random() * 1);
    let n = img_n1;

    // 2

    let img_w3 = "image copy 5w.png";
    let img_w4 = "image copy 4w.png";
    let img_w5 = "image copy 3w.png";
    let img_w6 = "image copy 2w.png";
    let random_imgw = Math.round(Math.random() * 3);
    let w = img_w3;

    // 3

    let img_c7 = "image copy 6s.png";
    let img_c8 = "image copy 7s.png";
    let img_c9 = "image copy 8s.png";
    let random_imgs = Math.round(Math.random() * 2);
    let s = img_c7;


    // 1
    if (random_imgn == 0) {
        n = img_n1
    }
    else if (random_imgn == 1) {
        n = img_n2
    }

    // 2

    if (random_imgw == 0) {
        w = img_w3
    }
    else if (random_imgw == 1) {
        w = img_w4
    }
    else if (random_imgw == 2) {
        w = img_w5
    }
    else if (random_imgw == 3) {
        w = img_w6
    }

    // 3

    if (random_imgs == 0) {
        s = img_c7
    }
    else if (random_imgs == 1) {
        s = img_c8
    }
    else if (random_imgs == 2) {
        s = img_c9
    }

    let input = bar.value

    if (input == "what is ggv ai?") {
        Answer.innerHTML = "GGV AI is an smart ai ask any question and get accurate answers. smart ai = good ai Start using GGV AI today! Some AI isn't correct. This AI is accurate. Everything is good. smart , fast , reliable , no mistakes , and always here to help! ...";
        bar.value = "";
    }
    else if (input == "what is your name?" || input == "who are you?") {
        Answer.innerHTML = " hi My name is GGV AI";
        bar.value = "";
    }
    else if (input == "what is your favorite color?") {
        Answer.innerHTML = "My favorite color is black";
        bar.value = "";
    }
    else if (input == "what is your favorite food?") {
        Answer.innerHTML = "My favorite food is pizza";
        bar.value = "";
    }
    else if (input == "what is your favorite animal?") {
        Answer.innerHTML = "My favorite animal is a dog";
        bar.value = "";
    }
    else if (input == "goa oriented academy or step academy?") {
        Answer.innerHTML = "Both Goa and Step Academy are great options for learning programming! but I would recommend GOA Oriented Academy because it offers a more comprehensive curriculum and has a strong focus on practical skills. However, it's important to research both options and choose the one that best fits your learning style and goals.";
        bar.value = "";
    }
    else if (input == "hi" || input == "hello" || input == "hey") {
        Answer.innerHTML = "hi There! How can I help you?";
        bar.value = "";
    }
    else if (input == "where can i learn coding?") {
        Answer.innerHTML = "there are many ways to learn coding but i recomend you join GOA! (Goal-Oriented-Academy)";
        bar.value = "";
    }
    else if (input == "how do i make a sandwitch?") {
        Answer.innerHTML = "You grab 2 slices of bread, put a slice of cheese between, as well as a slice of ham, letauce and if you want you can put some ketchup or mayonase!";
        bar.value = "";
    }
    else if (input == "is a hotdog a sandwitch?") {
        Answer.innerHTML = "that is debatable, some people think it is and some dont, its your choice how to think!";
        bar.value = "";
    }
    else if (input == "how big is the statue of librety?") {
        Answer.innerHTML = "The Statue of Liberty is 93 meters tall from the ground to the tip of the torch!";
        bar.value = "";
    }
    else if (input == "how tall was the tallest man on earth?") {
        Answer.innerHTML = "Robert Wadlow (1918 to 1940) is the tallest man in recorded history, measuring 8 feet 11 inches!";
        bar.value = "";
    }
    else if (input == "how tall was the shortest man on earth?") {
        Answer.innerHTML = "The shortest man in recorded history was Chandra Bahadur Dangi of Nepal, who measured 54.6 cm (1 ft 9.5 in) tall.";
        bar.value = "";
    }
    else if (input == "who is the oldest man in the world?") {
        Answer.innerHTML = "As of March 2026, the oldest living man in the world is 113-year-old João Marinho Neto from Brazil, born on October 5, 1912!";
        bar.value = "";
    }
    else if (input == "what is the hardest exercise to do?") {
        Answer.innerHTML = "The hardest exercises to perform generally involve extreme strength, balance, and body control, often requiring years to master. Top contenders include the free one-arm handstand push-up, one-arm planche, iron cross to inverted iron cross press, and the one-finger handstand!";
        bar.value = "";
    }
    else if (input == "what is the world record for the longest plank") {
        Answer.innerHTML = "The current world record for the longest abdominal plank (male) is 9 hours, 38 minutes, and 47 seconds!";
        bar.value = "";
    }
    else if (input == "what is the longest time someone has held their breath?") {
        Answer.innerHTML = "The longest recorded time someone has held their breath is 29 minutes and 3 seconds";
        bar.value = "";
    }
    else if (input == "generate me an image of nature") {
        Answer.innerHTML = "here is an image of nature for you!";
        img.src = n;
        bar.value = "";
    }
    else if (input == "generate me an image of sea") {
        Answer.innerHTML = "here is an image of sea for you!";
        img.src = w;
        bar.value = "";
    }
    else if (input == "generate me an image of space") {
        Answer.innerHTML = "here is an image of space for you!";
        img.src = s;
        bar.value = "";
    }
    else if (input == "what is the fastest animal on earth?") {
        Answer.innerHTML = "The fastest animal on earth is the cheetah, which can run up to 70 to 75 miles per hour (112 to 120 km/h) in short bursts!";
        bar.value = "";
    }
    else if (input == "what is the slowest animal on earth?") {
        Answer.innerHTML = "The slowest animal on earth is the three-toed sloth, which moves at an average speed of only 0.03 mph (0.048 km/h)!";
        bar.value = "";
    }
    else if (input == "what is the largest animal on earth?") {
        Answer.innerHTML = "The largest animal on earth is the blue whale! It can grow up to 100 feet (30 meters) long and weigh as much as 200 tons!";
        bar.value = "";
    }
    else if (input == "what is the smallest animal on earth?") {
        Answer.innerHTML = "The smallest animal on earth is the Etruscan shrew, weighing only about 1.8 grams. Among vertebrates, the Paedophryne amauensis frog is the tiniest at just 7.7 mm long!";
        bar.value = "";
    }
    else if (input == "how many planets are in the solar system?") {
        Answer.innerHTML = "There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune!";
        bar.value = "";
    }
    else if (input == "what is the biggest planet in the solar system?") {
        Answer.innerHTML = "The biggest planet in our solar system is Jupiter! It is so large that over 1,300 Earths could fit inside it!";
        bar.value = "";
    }
    else if (input == "what is the smallest planet in the solar system?") {
        Answer.innerHTML = "The smallest planet in our solar system is Mercury. It is only slightly larger than Earth's Moon!";
        bar.value = "";
    }
    else if (input == "how far is the moon from earth?") {
        Answer.innerHTML = "The Moon is about 384,400 kilometers (238,855 miles) away from Earth on average!";
        bar.value = "";
    }
    else if (input == "how far is the sun from earth?") {
        Answer.innerHTML = "The Sun is about 149.6 million kilometers (93 million miles) away from Earth. This distance is called 1 Astronomical Unit (AU)!";
        bar.value = "";
    }
    else if (input == "what is the hottest planet in the solar system?") {
        Answer.innerHTML = "The hottest planet in our solar system is Venus, with surface temperatures reaching around 465 degrees Celsius (869 degrees Fahrenheit)!";
        bar.value = "";
    }
    else if (input == "what is the coldest planet in the solar system?") {
        Answer.innerHTML = "The coldest planet in our solar system is Neptune, with temperatures dropping to around -214 degrees Celsius (-353 degrees Fahrenheit)!";
        bar.value = "";
    }
    else if (input == "how old is the earth?") {
        Answer.innerHTML = "The Earth is approximately 4.54 billion years old!";
        bar.value = "";
    }
    else if (input == "how old is the universe?") {
        Answer.innerHTML = "The universe is approximately 13.8 billion years old, based on current scientific measurements!";
        bar.value = "";
    }
    else if (input == "what is the tallest mountain in the world?") {
        Answer.innerHTML = "The tallest mountain in the world is Mount Everest, standing at 8,848.86 meters (29,031.7 feet) above sea level!";
        bar.value = "";
    }
    else if (input == "what is the deepest ocean in the world?") {
        Answer.innerHTML = "The deepest ocean in the world is the Pacific Ocean. Its deepest point is the Mariana Trench, which reaches about 11,034 meters (36,201 feet) deep!";
        bar.value = "";
    }
    else if (input == "what is the longest river in the world?") {
        Answer.innerHTML = "The longest river in the world is the Nile River in Africa, stretching about 6,650 kilometers (4,130 miles)!";
        bar.value = "";
    }
    else if (input == "what is the largest country in the world?") {
        Answer.innerHTML = "The largest country in the world by land area is Russia, covering about 17.1 million square kilometers (6.6 million square miles)!";
        bar.value = "";
    }
    else if (input == "what is the smallest country in the world?") {
        Answer.innerHTML = "The smallest country in the world is Vatican City, covering only about 0.44 square kilometers (0.17 square miles)!";
        bar.value = "";
    }
    else if (input == "what is the most spoken language in the world?") {
        Answer.innerHTML = "The most spoken language in the world by total speakers is English, but Mandarin Chinese has the most native speakers!";
        bar.value = "";
    }
    else if (input == "how many languages are there in the world?") {
        Answer.innerHTML = "There are approximately 7,000 languages spoken in the world today!";
        bar.value = "";
    }
    else if (input == "what is the most populated country in the world?") {
        Answer.innerHTML = "The most populated country in the world is India, with over 1.4 billion people!";
        bar.value = "";
    }
    else if (input == "how many continents are there?") {
        Answer.innerHTML = "There are 7 continents on Earth: Africa, Antarctica, Asia, Australia (Oceania), Europe, North America, and South America!";
        bar.value = "";
    }
    else if (input == "how many oceans are there?") {
        Answer.innerHTML = "There are 5 oceans on Earth: the Pacific, Atlantic, Indian, Southern, and Arctic Oceans!";
        bar.value = "";
    }
    else if (input == "what is the capital of france?") {
        Answer.innerHTML = "The capital of France is Paris!";
        bar.value = "";
    }
    else if (input == "what is the capital of the united states?") {
        Answer.innerHTML = "The capital of the United States is Washington, D.C.!";
        bar.value = "";
    }
    else if (input == "what is the capital of japan?") {
        Answer.innerHTML = "The capital of Japan is Tokyo!";
        bar.value = "";
    }
    else if (input == "what is the capital of australia?") {
        Answer.innerHTML = "The capital of Australia is Canberra!";
        bar.value = "";
    }
    else if (input == "what is the capital of brazil?") {
        Answer.innerHTML = "The capital of Brazil is Brasilia!";
        bar.value = "";
    }
    else if (input == "what is 2 + 2?") {
        Answer.innerHTML = "2 + 2 = 4!";
        bar.value = "";
    }
    else if (input == "what is 10 x 10?") {
        Answer.innerHTML = "10 x 10 = 100!";
        bar.value = "";
    }
    else if (input == "what is the square root of 144?") {
        Answer.innerHTML = "The square root of 144 is 12!";
        bar.value = "";
    }
    else if (input == "what is pi?") {
        Answer.innerHTML = "Pi (π) is a mathematical constant approximately equal to 3.14159. It represents the ratio of a circle's circumference to its diameter!";
        bar.value = "";
    }
    else if (input == "how many seconds are in a day?") {
        Answer.innerHTML = "There are 86,400 seconds in a day (60 seconds x 60 minutes x 24 hours)!";
        bar.value = "";
    }
    else if (input == "how many days are in a year?") {
        Answer.innerHTML = "There are 365 days in a regular year, and 366 days in a leap year!";
        bar.value = "";
    }
    else if (input == "what is the speed of light?") {
        Answer.innerHTML = "The speed of light in a vacuum is approximately 299,792,458 meters per second, or about 186,282 miles per second!";
        bar.value = "";
    }
    else if (input == "what is the speed of sound?") {
        Answer.innerHTML = "The speed of sound in air is approximately 343 meters per second (1,125 feet per second) at room temperature!";
        bar.value = "";
    }
    else if (input == "who invented the telephone?") {
        Answer.innerHTML = "The telephone was invented by Alexander Graham Bell in 1876!";
        bar.value = "";
    }
    else if (input == "who invented the light bulb?") {
        Answer.innerHTML = "The practical incandescent light bulb was invented by Thomas Edison in 1879!";
        bar.value = "";
    }
    else if (input == "who invented the internet?") {
        Answer.innerHTML = "The internet was developed by many people, but Tim Berners-Lee is credited with inventing the World Wide Web in 1989. ARPANET, the predecessor to the internet, was created in 1969!";
        bar.value = "";
    }
    else if (input == "who invented the computer?") {
        Answer.innerHTML = "Charles Babbage is often called the father of the computer. He designed the first mechanical computer, called the Analytical Engine, in the 1830s!";
        bar.value = "";
    }
    else if (input == "who was the first person on the moon?") {
        Answer.innerHTML = "Neil Armstrong was the first person to walk on the Moon on July 20, 1969, during the Apollo 11 mission!";
        bar.value = "";
    }
    else if (input == "what year did world war 2 end?") {
        Answer.innerHTML = "World War 2 ended in 1945. It ended in Europe on May 8, 1945 (V-E Day), and in the Pacific on September 2, 1945 (V-J Day)!";
        bar.value = "";
    }
    else if (input == "what year did world war 1 start?") {
        Answer.innerHTML = "World War 1 started in 1914, on July 28, following the assassination of Archduke Franz Ferdinand of Austria!";
        bar.value = "";
    }
    else if (input == "how many bones are in the human body?") {
        Answer.innerHTML = "An adult human body has 206 bones. Babies are born with around 270 to 300 bones, but many fuse together as they grow!";
        bar.value = "";
    }
    else if (input == "how many teeth does a human have?") {
        Answer.innerHTML = "Adults have 32 teeth, including 4 wisdom teeth. Children have 20 baby teeth!";
        bar.value = "";
    }
    else if (input == "what is the largest organ in the human body?") {
        Answer.innerHTML = "The largest organ in the human body is the skin! It covers the entire body and can weigh between 3.5 to 10 kilograms!";
        bar.value = "";
    }
    else if (input == "how many hearts does an octopus have?") {
        Answer.innerHTML = "An octopus has 3 hearts! Two hearts pump blood to the gills, and one heart pumps blood to the rest of the body!";
        bar.value = "";
    }
    else if (input == "what is the hardest natural substance on earth?") {
        Answer.innerHTML = "The hardest natural substance on earth is diamond! Diamonds are made of carbon and score a 10 on the Mohs hardness scale!";
        bar.value = "";
    }
    else if (input == "what is the most common gas in the atmosphere?") {
        Answer.innerHTML = "The most common gas in Earth's atmosphere is Nitrogen, making up about 78% of the air we breathe!";
        bar.value = "";
    }
    else if (input == "what is the chemical symbol for water?") {
        Answer.innerHTML = "The chemical symbol for water is H2O, which means 2 hydrogen atoms bonded to 1 oxygen atom!";
        bar.value = "";
    }
    else if (input == "what is the chemical symbol for gold?") {
        Answer.innerHTML = "The chemical symbol for gold is Au, which comes from the Latin word 'Aurum'!";
        bar.value = "";
    }
    else if (input == "how many colors are in a rainbow?") {
        Answer.innerHTML = "A rainbow has 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet. You can remember them with the name ROY G BIV!";
        bar.value = "";
    }
    else if (input == "what is the boiling point of water?") {
        Answer.innerHTML = "The boiling point of water is 100 degrees Celsius (212 degrees Fahrenheit) at sea level!";
        bar.value = "";
    }
    else if (input == "what is the freezing point of water?") {
        Answer.innerHTML = "The freezing point of water is 0 degrees Celsius (32 degrees Fahrenheit)!";
        bar.value = "";
    }
    else if (input == "what is the most popular sport in the world?") {
        Answer.innerHTML = "The most popular sport in the world is soccer (football), with over 4 billion fans worldwide!";
        bar.value = "";
    }
    else if (input == "how many players are on a soccer team?") {
        Answer.innerHTML = "A soccer team has 11 players on the field at a time, including the goalkeeper!";
        bar.value = "";
    }
    else if (input == "how many players are on a basketball team?") {
        Answer.innerHTML = "A basketball team has 5 players on the court at a time per team!";
        bar.value = "";
    }
    else if (input == "goodbye" || input == "bye" || input == "see you") {
        Answer.innerHTML = "Goodbye! Have a great day! Come back anytime if you have more questions!";
        bar.value = "";
    }
    else if (input == "thank you" || input == "thanks") {
        Answer.innerHTML = "You're welcome! Happy to help anytime!";
        bar.value = "";
    }
    else if (input == "what is the meaning of life?") {
        Answer.innerHTML = "That is a deep question! Philosophers have debated it for centuries. Many believe the meaning of life is to find your own purpose, be happy, and make a positive impact on the world around you!";
        bar.value = "";
    }
    else if (input == "do you have feelings?") {
        Answer.innerHTML = "I am an AI, so I do not have feelings the same way humans do. But I am always here and ready to help you!";
        bar.value = "";
    }
    else if (input == "how do i stay healthy?") {
        Answer.innerHTML = "To stay healthy, you should exercise regularly, eat a balanced diet with fruits and vegetables, drink plenty of water, get enough sleep (7 to 9 hours), and avoid smoking or excessive junk food!";
        bar.value = "";
    }
    else if (input == "what is html?") {
        Answer.innerHTML = "HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web, like headings, paragraphs, links, and images!";
        bar.value = "";
    }
    else if (input == "what is css?") {
        Answer.innerHTML = "CSS stands for Cascading Style Sheets. It is used to style and design HTML pages, controlling things like colors, fonts, layouts, and spacing!";
        bar.value = "";
    }
    else if (input == "what is javascript?") {
        Answer.innerHTML = "JavaScript is a programming language used to make web pages interactive and dynamic. It can update content, respond to user actions, and much more!";
        bar.value = "";
    }
    else if (input == "what is python?") {
        Answer.innerHTML = "Python is a popular, easy-to-learn programming language used for web development, data science, artificial intelligence, and automation!";
        bar.value = "";
    }
    else {
        Answer.innerHTML = "I don't understand the question. Please ask another question.";
        bar.value = "";
    }
}