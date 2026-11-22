exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Use POST" };
  }

  try {
    const { code, language } = JSON.parse(event.body);

    if (!code || code.length > 8000) {
      return { statusCode: 400, body: JSON.stringify({ result: "Please paste code under 8000 characters." }) };
    }

    const prompt =
      "You are a friendly coding tutor for first-year BTech students. " +
      "Check this " + language + " code. List every syntax error and common mistake. " +
      "For each one, give the line number, what is wrong in simple words, and the fix. " +
      "Then show the full corrected code. If the code is correct, say so.\n\n" + code;

    const response = await f
