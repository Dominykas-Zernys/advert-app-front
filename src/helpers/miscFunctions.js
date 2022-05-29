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
  let textToReturn = infoText;
  if (infoText.split(' ')[0] === '"shortDescription"') {
    textToReturn = infoText.replaceAll('shortDescription', 'Short description');
  }
  if (infoText.split(' ')[0] === '"bannerImg"') {
    textToReturn = infoText.replaceAll('bannerImg', 'Banner image');
  }
  const textNoQuotes = textToReturn.replaceAll('"', '');
  return textNoQuotes.charAt(0).toUpperCase() + textNoQuotes.slice(1) + '!';
}

// Function to capitalize text
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
