import natural from "natural";   // ✅ REQUIRED LINE FOR TASK 8

const analyzer = new natural.SentimentAnalyzer(
  "English",
  natural.PorterStemmer,
  "afinn"
);

export { analyzer };
