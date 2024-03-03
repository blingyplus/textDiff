```markdown
# textDiff Function

The `textDiff` function is a serverless API built with Node.js and Express, designed to compare two pieces of text and identify the differences between them. This function leverages the `diff` library to perform a character-by-character comparison, providing a detailed account of added, removed, or unchanged text.

## Demo

 the demo link: [textDiff Demo](https://us-central1-wakeflow-functions-416022.cloudfunctions.net/textDiff/functions/textDiff). This demo showcases the function's capability to compare two text inputs and output their differences. can send GET or POST request to the link with text1 and text2 inputs to test.

## Features

- **Text Comparison**: Compare two texts and highlight differences.
- **Detailed Output**: Outputs differences with statuses: `added`, `removed`, or `unchanged`.
- **Easy Integration**: Designed for easy integration with other applications, especially useful for content management systems, text editors, and any application requiring text comparison.

## Getting Started

This section provides a quick guide on how to deploy and use the `textDiff` function.

### Prerequisites

- Node.js and npm installed
- Google Cloud account for deployment
- Postman or `curl` for testing

### Deployment

1. Clone the repository to your local machine.
2. Navigate to the cloned directory and deploy the function to Google Cloud Functions using the Google Cloud SDK. Ensure you have the Cloud Functions API enabled in your Google Cloud project.
3. Use the following command to deploy:

```sh
gcloud functions deploy textDiff --runtime nodejs18 --trigger-http --allow-unauthenticated --entry-point=app --project=YOUR_PROJECT_ID
```

Replace `YOUR_PROJECT_ID` with your actual Google Cloud project ID.

### Usage

After deployment, you can use the function by sending a POST request to the function's URL with the following JSON payload:

```json
{
  "text1": "First piece of text to compare.",
  "text2": "Second piece of text to compare."
}
```

Example using `curl`:

```sh
curl -X POST YOUR_FUNCTION_URL \
-H "Content-Type: application/json" \
-d '{"text1": "hello world", "text2": "hello world!"}'
```

Replace `YOUR_FUNCTION_URL` with the actual URL of your deployed function.

### Response

The function will return a JSON response detailing the differences between the two input texts. Each difference is marked with a `status` (added, removed, unchanged) and the `value` of the text segment.

## Contributing

Contributions to the `textDiff` function are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
```

