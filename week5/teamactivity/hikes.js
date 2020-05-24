export class Hike {
    constructor(name, imgSrc, imgAlt, distance, difficulty, description, directions) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.distance = distance;
        this.difficulty = difficulty;
        this.description = description;
        this.directions = directions;
    }
    
    getAllHikes() {
        return hikeList;
    }

    showHikeList() {
        const hikeListElement = document.getElementById("hikes");
        hikeListElement.innerHTML = "";
        renderHikeList(this.getAllHikes(), hikeListElement);
    }
    
}

const hikeList = [];
const hike1 = new Hike("Bechler Falls",
    "falls.jpg",
    "Image of Bechler Falls",
    "3 miles",
    "Easy",
    "Beautiful short hike along the Bechler river to Bechler Falls",
    "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
);

const hike2 = new Hike(
    "Teton Canyon",
    "falls.jpg",
    "Image of Bechler Falls",
    "3 miles",
    "Easy",
    "Beautiful short (or long) hike through Teton Canyon.",
    "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
)

const hike3 = new Hike(
    "Denanda Falls",
    "falls.jpg",
    "Image of Bechler Falls",
    "7 miles",
    "Moderate",
    "Beautiful hike through Bechler meadows river to Denanda Falls",
    "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
)

hikeList.push(hike1, hike2, hike3);
const imgBasePath = "https://byui-cit.github.io/cit261/examples/";
function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}
function renderOneHike(hike) {
    const item = document.createElement("li");

    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

    return item;
}