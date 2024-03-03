class RandomGenerator {
    generateRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    generateRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    }
  }
  
  // Example usage
  const randomGenerator = new RandomGenerator();
  
  const randomInt = randomGenerator.generateRandomInteger(1, 100);
  const randomFloat = randomGenerator.generateRandomFloat(1.5, 10.5);
  const randomString = randomGenerator.generateRandomString(8);
  
  console.log('Random Integer:', randomInt);
  console.log('Random Float:', randomFloat);
  console.log('Random String:', randomString);
  