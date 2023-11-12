export const detectLanguage = (text: string) => {
    const englishRegex = /[a-zA-Z\s]/;
    const pashtoRegex = /[\u0600-\u06FF\s]/; // Pashto Unicode range
    const dariRegex = /[\uFB50-\uFDFF\s]/; // Dari Unicode range

    const firstCharacter = text.charAt(0);

    if (englishRegex.test(firstCharacter)) {
        return 'en';
    } else if (pashtoRegex.test(firstCharacter)) {
        return 'pa'; // Pashto
    } else if (dariRegex.test(firstCharacter)) {
        return 'da'; // Dari
    } else {
        return 'pa';
    }
};