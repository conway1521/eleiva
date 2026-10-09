export type Feedback = {
  name: string;
  email: string;
  message: string;
};

// TODO: feedback is only written to the server log for now. Replace the body
// of this function with a database insert or an email send before launch.
export async function saveFeedback(feedback: Feedback): Promise<void> {
  console.log("[feedback]", JSON.stringify(feedback));
}
