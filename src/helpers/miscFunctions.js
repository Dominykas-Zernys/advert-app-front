// Function to restart states
export function restartStates(stateFnArr, value = '') {
  stateFnArr.forEach((setState) => setState(value));
}

// Check if there are no empty fields in the form
export function areThereEmptyFields(fieldArr) {
  const emptyFields = fieldArr.filter((field) => !field.length);
  return emptyFields.length ? true : false;
}

// Format text from backend JOI validation to display as info text
export function formatInfoText(infoText) {
  const textNoQuotes = infoText.replaceAll('"', '');
  return textNoQuotes.charAt(0).toUpperCase() + textNoQuotes.slice(1) + '!';
}
