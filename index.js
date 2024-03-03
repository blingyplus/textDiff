const express = require("express");
const diff = require("diff");
const app = express();
app.use(express.json());

app.post("/functions/textDiff", async (req, res) => {
  const { text1, text2 } = req.body;
  const differences = diffTexts(text1, text2);
  res.json({ output: differences });
});

function diffTexts(text1, text2) {
  return diff.diffChars(text1, text2).map((part) => ({
    status: part.added ? "added" : part.removed ? "removed" : "unchanged",
    value: part.value,
  }));
}

app.get("/functions/textDiff", (req, res) => {
  res.json({
    name: "textDiff",
    description:
      "Compares two text inputs and returns a detailed list of differences.",
    input: {
      type: "object",
      description: "Object containing two strings to compare.",
      example: { text1: "Hello, world!", text2: "Hello, World?" },
    },
    output: {
      type: "array",
      description: "Array of objects detailing the differences.",
      example: [
        { status: "unchanged", value: "Hello, World" },
        { status: "removed", value: "!" },
        { status: "added", value: "?" },
      ],
    },
  });
});

// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`Server running on port ${port}`));
exports.app = app;
