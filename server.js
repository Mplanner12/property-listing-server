const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://property-listing-frontend-theta.vercel.app/",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

const properties = [
  {
    id: 1,
    name: "Luxury Condo",
    address: "123 Main St, Toronto",
    price: "$500,000",
    propertyType: "Condo",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg", // Modern Condo
  },
  {
    id: 2,
    name: "Modern House",
    address: "456 Oak St, Vancouver",
    price: "$1,200,000",
    propertyType: "House",
    imageUrl:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg", // Family Home
  },
  {
    id: 3,
    name: "Cozy Cottage",
    address: "789 Lake Rd, Banff",
    price: "$750,000",
    propertyType: "Cottage",
    imageUrl:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg", // Small Cottage
  },
  {
    id: 4,
    name: "Downtown Apartment",
    address: "1010 City Ave, Montreal",
    price: "$400,000",
    propertyType: "Apartment",
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", // City Apartment
  },
  {
    id: 5,
    name: "Beachfront Villa",
    address: "222 Ocean Dr, Halifax",
    price: "$1,500,000",
    propertyType: "Villa",
    imageUrl:
      "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg", // Beach House
  },
  {
    id: 6,
    name: "Rustic Cabin",
    address: "333 Mountain St, Whistler",
    price: "$600,000",
    propertyType: "Cabin",
    imageUrl:
      "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg", // New Cabin Image
  },
  {
    id: 7,
    name: "Suburban Townhouse",
    address: "444 Maple St, Ottawa",
    price: "$850,000",
    propertyType: "Townhouse",
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg", // Townhouse
  },
  {
    id: 8,
    name: "Historic Mansion",
    address: "555 Queen St, Victoria",
    price: "$2,000,000",
    propertyType: "Mansion",
    imageUrl:
      "https://images.pexels.com/photos/416414/pexels-photo-416414.jpeg", // Mansion
  },
  {
    id: 9,
    name: "Studio Apartment",
    address: "666 Pine St, Kelowna",
    price: "$300,000",
    propertyType: "Apartment",
    imageUrl:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg", // Studio
  },
];

app.get("/api/properties", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const paginatedProperties = properties.slice(startIndex, startIndex + limit);
  res.json(paginatedProperties);
});

app.get("/api/properties/:id", (req, res) => {
  const property = properties.find((p) => p.id === parseInt(req.params.id));
  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }
  res.json(property);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
