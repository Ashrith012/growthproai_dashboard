// Static headlines to simulate AI headlines
const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: {location}'s Best Kept Secret",
  "{name} in {location}: A Must-Visit This Year",
  "Top Reasons to Choose {name} in {location}",
];

export const getBusinessData = (req, res) => {
  const { name, location } = req.body;

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name)
    .replace('{location}', location);

  res.json({
    rating: (Math.random() * 2 + 3).toFixed(1), 
    reviews: Math.floor(Math.random() * 200) + 10,
    headline: randomHeadline
  });
};

export const regenerateHeadline = (req, res) => {
  const { name, location } = req.query;

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name)
    .replace('{location}', location);

  res.json({ headline: randomHeadline });
};
