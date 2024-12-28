document.addEventListener('DOMContentLoaded', function(){
    var scrolled = ['','scrolled']
    var section = document.getElementsByClassName('break');
    window.addEventListener('scroll', function (){
        var scrollfromTop = this.window.scrollY
        var hidden = this.document.getElementById("Hide");
        if (scrollfromTop >= section[0].offsetTop) {
            this.document.getElementById('NavBar').className=scrolled[1];
            hidden.style.display='none';
        }else{
            this.document.getElementById('NavBar').className=scrolled[0];
            hidden.style.display='flex';
        }
    })     
})

function openPopup(index) {
    changeText(index);
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closePopup(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
} 

function changeText(index) {
    var imgs = [document.getElementsByClassName("LocImg")];
    var title = ["The Valley of The Kings", "Odysseus' Palace at Ithaca", "Stonehenge", "Knossos", "Mount Fuji", "Ruins of Troy"];
    var p1 = [  "The Valley of the Kings, located on the west bank of the Nile River near Luxor in Egypt, is one of the most significant archaeological sites from ancient Egypt. It served as the royal burial ground for pharaohs and nobles of the New Kingdom period (c. 1550–1070 BCE). The valley consists of two main sections: the East Valley, where the tombs of the pharaohs are found, and the West Valley, which contains the tombs of royal family members and other elite individuals. The tombs are carved deep into the limestone cliffs and decorated with intricate wall paintings, hieroglyphs, and elaborate burial chambers meant to honor the deceased and help them in the afterlife.",
                "Ithaca is a small, rugged island in the Ionian Sea, part of Greece, renowned for its connection to Homer’s epic poem, the Odyssey, as the legendary home of the hero Odysseus. With its dramatic coastline, steep hills, and lush greenery, the island is a picturesque and tranquil destination, often celebrated for its natural beauty and rich history. Despite its small size, Ithaca is steeped in ancient myth and archaeological significance, with remnants of Mycenaean settlements, Venetian castles, and charming villages. The island’s rugged terrain and remote location contribute to its enduring mystique, making it a symbol of adventure and homecoming in Greek mythology.",
                "Stonehenge is a prehistoric monument located in Wiltshire, England, known for its massive standing stones arranged in a circular pattern. Thought to have been constructed in stages from around 3000 BCE to 2000 BCE, it consists of two main types of stone: large upright stones, called sarsens, and smaller blue stones, which were transported from Wales, over 140 miles away. The purpose of the structure remains debated, but it is believed to have served a variety of functions, including as a burial site, a ceremonial center, and possibly an astronomical observatory aligned with the solstices and lunar events.",
                "Knossos is the largest and most significant archaeological site of the Minoan civilization, located on the island of Crete, Greece. Believed to have been built around 1900 BCE, the palace complex was the center of Minoan political, religious, and economic life. The sprawling site includes grand courtyards, labyrinthine hallways, intricate frescoes, and advanced features such as plumbing and drainage systems, showcasing the Minoans' sophisticated understanding of architecture and engineering. The palace is most famously associated with the myth of the Minotaur, with its maze-like design inspiring stories of the legendary creature housed within its walls.",
                "Mount Fuji, located on the island of Honshu in Japan, is the country’s highest peak, standing at 3,776 meters (12,389 feet). An active stratovolcano, it has been an iconic symbol of Japan for centuries, revered not only for its majestic beauty but also for its spiritual significance. Often depicted in art, literature, and photography, its nearly perfect conical shape and snow-capped summit make it one of the most recognizable mountains in the world. Mount Fuji is also considered sacred in Japanese Shinto and Buddhist traditions, with pilgrims historically ascending the mountain to reach its summit as an act of devotion.",
                "The ruins of Troy, located in modern-day Turkey at the site of Hisarlik, represent one of the most famous ancient cities, long immortalized in Greek mythology and the epic poems of Homer. Once thought to be purely legendary, the city has been identified through archaeological excavations, which began in the 19th century under the direction of Heinrich Schliemann. The site reveals the remains of several layers of settlements, spanning thousands of years, with the most famous period being that of the Trojan War, believed to have taken place around the 12th century BCE. Among the ruins are city walls, gates, and the remnants of grand buildings, as well as artifacts that offer insight into the daily life of the Trojans and their interactions with other ancient civilizations."
    ];
    var p2 = [  "Among the tombs, the most famous is that of King Tutankhamun, whose nearly intact tomb was discovered by archaeologist Howard Carter in 1922, providing a wealth of artifacts and knowledge about ancient Egyptian burial practices. Over the centuries, many tombs in the Valley of the Kings were looted, and their treasures stolen, yet the site remains a crucial source of historical and cultural insight into the beliefs, rituals, and art of the ancient Egyptians. The Valley of the Kings continues to be a major destination for tourists and scholars alike, offering a glimpse into the grandeur and mystery of ancient Egypt.",
                "While the real-life palace of Odysseus is believed to be located at the archaeological site of Neraki on the island of Ithaca, Greece. Excavations have uncovered the remains of a Mycenaean palace dating back to around the 13th century BCE, which many scholars associate with the legendary King Odysseus, the hero of Homer's Odyssey. The palace complex features a large central courtyard, various rooms, and a sophisticated layout, suggesting it was a place of great importance. Though the ruins are modest compared to later classical buildings, the discovery of pottery, tools, and architectural features supports the idea that this was the home of a powerful leader in the ancient world, blending historical reality with the mythic tales of Odysseus.",
                "Stonehenge’s imposing design and its placement in the landscape suggest it held significant cultural and spiritual importance for the ancient peoples who built it. Over the centuries, the site has attracted numerous theories about its origins and use, ranging from its role in ancient rituals to more speculative ideas about extraterrestrial influence. Today, Stonehenge is a UNESCO World Heritage Site and a major tourist attraction, drawing visitors who are fascinated by its mystery and the sheer engineering feat required to erect such a monumental structure with the technology available at the time.",
                "The ruins of Knossos offer valuable insight into the culture and art of the Minoan people, who were one of the earliest advanced civilizations in Europe. The vibrant frescoes that adorn the walls depict scenes of daily life, religious rituals, and nature, providing a window into the Minoan worldview. Despite its destruction around 1450 BCE, likely due to natural disasters or invasion, the site was continually inhabited for centuries. Today, Knossos stands as one of Greece's most important archaeological sites, offering a glimpse into the grandeur and mystery of the Minoan civilization.",
                "In addition to its cultural importance, Mount Fuji is a popular destination for tourists and hikers, drawing thousands each year to climb its slopes during the summer months. The surrounding area is rich in natural beauty, including forests, lakes, and hot springs, adding to the region’s allure. Despite its active status, with the last eruption occurring in 1707, Mount Fuji remains an enduring symbol of beauty, strength, and endurance in Japanese culture, often associated with themes of peace and spiritual enlightenment.",
                "Troy's connection to myth is most famously embodied in the story of the Trojan War, as told in Homer’s Iliad, where the city is besieged by Greek forces and eventually falls due to the cunning use of the Trojan Horse. Although the historical accuracy of the war itself remains debated, the excavations at Troy have provided evidence of a wealthy, strategically significant city that experienced both prosperity and destruction. The site continues to captivate scholars and visitors alike, offering a unique glimpse into the blending of myth and reality, as well as the grandeur of ancient civilizations. Today, the ruins of Troy are a UNESCO World Heritage Site, attracting tourists and researchers eager to explore the legacy of this legendary city."
    ];

    document.getElementById("LocImg").src =imgs[0][index].src;
    document.getElementById("Location").innerHTML = title[index];
    document.getElementById("p1").innerHTML = p1[index];
    document.getElementById("p2").innerHTML = p2[index];
}

function openOut() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closeOut() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}