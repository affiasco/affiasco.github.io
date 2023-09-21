const Homepage = () => {
  const content = document.querySelector(".content");

  const mainContent = () => {
    const container = document.createElement("div");
    container.classList.add("home-container");

    const mainHeading = homepageHeading();
    container.appendChild(mainHeading);

    const aboutSection = homepageAbout();
    container.appendChild(aboutSection);

    const hoursHeading = homepageHoursHeading();
    container.appendChild(hoursHeading);

    const hoursList = homepageHoursList();
    container.appendChild(hoursList);

    const locationHeading = homepageLocationHeading();
    container.appendChild(locationHeading);

    const location = homepageLocation();
    container.appendChild(location);

    content.appendChild(container);
  };

  const homepageHeading = () => {
    const heading = document.createElement("h1");
    heading.innerText = "Restaurant Page";

    return heading;
  };

  const homepageAbout = () => {
    const about = document.createElement("p");
    about.innerText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quasi unde vero maxime, atque harum vel obcaecati consectetur earum magni sint minus quae cumque maiores. Quod autem consectetur repudiandae alias?";

    return about;
  };

  const homepageHoursHeading = () => {
    const hoursHours = document.createElement("h1");
    hoursHours.innerText = "Hours";
    return hoursHours;
  };

  const homepageHoursList = () => {
    const hoursList = document.createElement("ul");

    const monday = document.createElement("li");
    hoursList.appendChild(monday);
    monday.innerText = "Monday: 8am - 8pm";

    const tuesday = document.createElement("li");
    hoursList.appendChild(tuesday);
    tuesday.innerText = "Tuesday: 8am - 8pm";

    const wednesday = document.createElement("li");
    hoursList.appendChild(wednesday);
    wednesday.innerText = "Wednesday: 8am - 8pm";

    const thursday = document.createElement("li");
    hoursList.appendChild(thursday);
    thursday.innerText = "Thursday: 8am - 8pm";

    const Friday = document.createElement("li");
    hoursList.appendChild(Friday);
    Friday.innerText = "Friday: 6am - 10pm";

    const saturday = document.createElement("li");
    hoursList.appendChild(saturday);
    saturday.innerText = "Saturday: 6am - 10pm";

    const sunday = document.createElement("li");
    hoursList.appendChild(sunday);
    sunday.innerText = "Sunday: 10am - 4pm";

    return hoursList;
  };

  const homepageLocationHeading = () => {
    const heading = document.createElement("h1");
    heading.innerText = "Location";
    return heading;
  };

  const homepageLocation = () => {
    const location = document.createElement("p");
    location.innerText = "123 Forest Avenue, Forestville, Maine";
    return location;
  };

  return { mainContent };
};

export function renderHomepage() {
  const homepageMainContent = Homepage();
  homepageMainContent.mainContent();
}
