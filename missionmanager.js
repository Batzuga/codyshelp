
var hints = [
    {
        id: 0,
        name: "Tutorial",
        hint1: "Hint 1 - No coding is required.",
        hint2: "Hint 2 - Find the Player in hierarchy.",
        hint3: "Hint 3 - Check the movement speed variable in the Player component on Player object."
    },
    {
        id: 1,
        name: "Mission 1 - Light's out",
        hint1: "Hint 1 - Light source",
        hint2: "Hint 2 - Check the Global Light 2D.",
        hint3: "Hint 3 - Light intensity should be at 1."
    },  
    {
        id: 2,
        name: "Mission 2 - 20/20",
        hint1: "Hint 1 - Find the SignPost object in hierarchy. (Very, VERY, tiny in scene)",
        hint2: "Hint 2 - Check the texture settings, and keep the object scale at (1, 1, 1)",
        hint3: "Hint 3 - Pixels Per Unit, Filter Mode, Compression"
    },  
    {
        id: 3,
        name: "Mission 3 - It's in the name",
        hint1: "Hint 1 - Navigate to the place where you change project name",
        hint2: "Hint 2 - Project settings",
        hint3: "Hint 3 - Product name"
    },  
    {
        id: 4,
        name: "Mission 4 - Quiz Master",
        hint1: "Hint 1 - This one you have to do on your own.",
        hint2: "Hint 2 - You'll learn from wrong answers too.",
        hint3: "Hint 3 - You can repeat this until you know at least half of the answers by heart!"
    },  
    {
        id: 5,
        name: "Mission 5 - More Ground",
        hint1: "Hint 1 - Tile Palette",
        hint2: "Hint 2 - Open a tile palette window select the grass tile and draw more ground.",
        hint3: "Hint 3 - Make sure you are on the correct layer on the Tile Palette"
    },  
    {
        id: 6,
        name: "Mission 6 - Sensor Door",
        hint1: "Hint 1 - Check the components for missing references",
        hint2: "Hint 2 - Colliders",
        hint3: "Hint 3 - It should be OnTriggerEnter2D, not OnCollisionEnter2D"
    },  
    {
        id: 7,
        name: "Mission 7 - Lock n Key",
        hint1: "Hint 1 - Use the first lock and key from the left as an reference",
        hint2: "Hint 2 - Compare the Id's of the key and locks that are paired",
        hint3: "Hint 3 - Check that all the components are there and corrctly set up for the locks and keys"  
    },  
    {
        id: 8,
        name: "Mission 8 - Quiz Master Returns",
        hint1: "Hint 1 - This one you have to do on your own.",
        hint2: "Hint 2 - You'll learn from wrong answers too.",
        hint3: "Hint 3 - You can repeat this until you know at least half of the answers by heart!"
    },  
    {
        id: 9,
        name: "Mission 9 - Greedy Cody",
        hint1: "Hint 1 - Check the Player script.",
        hint2: "Hint 2 - Create the missing collision check for the diamonds",
        hint3: "Hint 3 - Use the trophy collision check as an example"
    },  
    {
        id: 10,
        name: "Mission 10 - Boss Fight - Cat Pranks",
        hint1: "Hint 1 - Double Click the comments and Error in the console to see where they take you in code.",
        hint2: "Hint 2 - Check the hierarchy for something that should not be there.",
        hint3: "Hint 3 - The Trophy script has something extra in it as well."
    },  
    {
        id: 11,
        name: "Mission 11 - In the Way",
        hint1: "Hint 1 - There is an empty UIManager script, you can use that. Just add it to the scene",
        hint2: "Hint 2 - GetKeyDown",
        hint3: "Hint 3 - Find the MissionPopup game object and use SetActive() function on it."
    }
    ,  
    {
        id: 12,
        name: "Mission 12 - Quiz Master's Revenge",
        hint1: "Hint 1 - This one you have to do on your own.",
        hint2: "Hint 2 - You'll learn from wrong answers too.",
        hint3: "Hint 3 - You can repeat this until you know at least half of the answers by heart!"
    }
];

var selectedid = -1;
function createHints()
{
    
    hints.forEach(element => {
        var boss = element.id != 0 && element.id % 10 == 0;
        var quiz = element.id % 10 != 0 && element.id % 4 == 0;
        var col = boss ? "#652222" : quiz ? "#0e594e" : "rgb(48, 48, 48)";

        console.log(element.name);
        var block = `
            <div class="hintheader">
                <p class="hintlevelname">${element.name}</p>
                <div class="hintbuttons">
                    <button class="hintbutton" id="mission-${element.id}-btn1" onClick="openHint(${element.id},1)">Hint 1</button>
                    <button class="hintbutton" id="mission-${element.id}-btn2" style="display:none;" onClick="openHint(${element.id},2)">Hint 2</button>
                    <button class="hintbutton" id="mission-${element.id}-btn3" style="display:none;" onClick="openHint(${element.id},3)">Hint 3</button>
                </div>
            </div>            
            <div class="hinttextbox" id="mission-${element.id}-hintbox">
                <p class="hinttext" id="mission-${element.id}-hinttext">This is a hint</p>
            </div>
       
        `;
        var div = document.createElement('div');
        div.innerHTML = block;
        div.classList.add("hintbox");
        div.style.backgroundColor = col;
        const p = document.getElementById("hints");
        p.appendChild(div);
    });
}

function openHint(m, a)
{
    if(a == 1)
    {
        const b2 = document.getElementById("mission-" + m + "-btn2");
        b2.style.display = "inline-flex";
    }
    if(a == 2)
    {
        const b2 = document.getElementById("mission-" + m + "-btn3");
        b2.style.display = "inline-flex";
    }
    if(selectedid != -1)
    {
        const o = document.getElementById("mission-" + selectedid + "-hintbox");
        o.style.display = "none";
    }
    const h = document.getElementById("mission-" + m + "-hinttext");
    const hb = document.getElementById("mission-" + m + "-hintbox");
    hb.style.display = "block";

    var hint = "Error";
    if(a == 1) hint = hints[m].hint1;
    if(a == 2) hint = hints[m].hint2;
    if(a == 3) hint = hints[m].hint3;
    h.innerHTML = hint;
    selectedid = m;
}

createHints();
