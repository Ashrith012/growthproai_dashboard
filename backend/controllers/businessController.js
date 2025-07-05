
const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: {location}'s Best Kept Secret",
  "{name} in {location}: A Must-Visit This Year",
  "Top Reasons to Choose {name} in {location}",
];

export const getBusinessData = (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({ error: "Name and location required" });
    }

    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
      .replace('{name}', name)
      .replace('{location}', location);

    res.json({
      name,
      location,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 200) + 10,
      headline: randomHeadline,
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
};


export const regenerateHeadline = (req, res) => {
  const { name, location } = req.query;

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name)
    .replace('{location}', location);

  res.json({ headline: randomHeadline });
};
