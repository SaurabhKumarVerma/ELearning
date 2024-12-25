export const  getFirstAndSecondLetters = (input: string) => {
    if (typeof input !== "string" || input.trim() === "") {
        return "A";
    }

    const [firstWord, secondWord] = input.trim().split(/\s+/);


    const firstLetter = firstWord ? firstWord[0]?.toUpperCase() : "A";
    const secondLetter =  secondWord ? secondWord[0]?.toUpperCase() : ""

    return `${firstLetter} ${secondLetter}`;
}

