const MAX_NUMBER = 8;
const MIN_NUMBER = 1;
const TIMEOUT_ERROR_TIME = 6000;

export function fetchTeachers({ page, size } = {}) {
  const delayTime =
    (Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER) * 1000;
  return new Promise((resolve, reject) => {
    if (delayTime >= TIMEOUT_ERROR_TIME) {
      reject("API timeout error");
      return;
    }
    setTimeout(() => {
      const teachers = getMockTeachers({ page, size });
      resolve(teachers);
    }, delayTime);
  });
}

function getMockTeachers({ page, size } = {}) {
  const mockApiResponse = [
    { id: 1, name: "Ryan", speakLanguages: ["english", "chinese"] },
    { id: 2, name: "Tony", speakLanguages: ["english"] },
    { id: 3, name: "Hubert", speakLanguages: ["english", "french"] },
    { id: 4, name: "Andrew", speakLanguages: ["english"] },
    { id: 5, name: "Viney", speakLanguages: ["english", "italian"] },
    { id: 6, name: "Leon", speakLanguages: ["romani", "english"] },
    { id: 7, name: "Jacky", speakLanguages: ["romani", "english"] },
    { id: 8, name: "Abner", speakLanguages: ["chinese", "english"] },
    { id: 9, name: "Jacky", speakLanguages: ["romani", "korean"] },
    { id: 10, name: "Alfredo", speakLanguages: ["french"] },
    { id: 11, name: "Casio", speakLanguages: ["romani", "english", "korean"] },
    {
      id: 12,
      name: "Travis",
      speakLanguages: ["romani", "english", "chinese"],
    },
    { id: 13, name: "Ben", speakLanguages: ["english", "italian"] },
    { id: 14, name: "Dean", speakLanguages: ["italian", "korean"] },
  ];

  if (!page) return mockApiResponse;
  if (page < 1) return [];

  const offset = (page - 1) * size;
  return mockApiResponse.slice(offset, offset + size);
}
