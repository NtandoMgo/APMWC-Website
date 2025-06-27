export const routes = [
  {
    id: 1,
    name: "Cape Town to Mthatha",
    departure: "Cape Town",
    destination: "Mthatha",
    duration: "12 hours",
    distance: "1,200 km",
    price: 450,
    stops: [
      { name: "Port Elizabeth", duration: "30 min" },
      { name: "East London", duration: "45 min" }
    ],
    schedule: [
      { day: "Monday", departure: "06:00", arrival: "18:00" },
      { day: "Wednesday", departure: "06:00", arrival: "18:00" },
      { day: "Friday", departure: "06:00", arrival: "18:00" },
      { day: "Sunday", departure: "06:00", arrival: "18:00" }
    ],
    amenities: ["Air Conditioning", "Reclining Seats", "Restroom", "Entertainment"],
    description: "Direct service from Cape Town to Mthatha with comfortable stops"
  },
  {
    id: 2,
    name: "Cape Town to Pretoria",
    departure: "Cape Town",
    destination: "Pretoria",
    duration: "14 hours",
    distance: "1,400 km",
    price: 520,
    stops: [
      { name: "Kimberley", duration: "45 min" },
      { name: "Bloemfontein", duration: "1 hour" },
      { name: "Johannesburg", duration: "30 min" }
    ],
    schedule: [
      { day: "Tuesday", departure: "05:00", arrival: "19:00" },
      { day: "Thursday", departure: "05:00", arrival: "19:00" },
      { day: "Saturday", departure: "05:00", arrival: "19:00" }
    ],
    amenities: ["Air Conditioning", "Reclining Seats", "Restroom", "Entertainment", "WiFi"],
    description: "Premium service connecting Cape Town to the capital via major cities"
  }
];