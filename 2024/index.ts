try {
  const functions = {
  };

  const functionName = process.argv[2];

  if (functionName in functions) {
    // Call the function with spread arguments
    functions[functionName]();
  } else {
    console.log(`${functionName.replace('day', 'day ')} not implemented!`);
  }
} catch (error) {
  console.log('please provide a day to run (e.g. day1)');
}
