// any combination of spaces and punctuation characters
// thanks to http://stackoverflow.com/a/25575009
const wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]+/
const capitalPlusLower = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD][a-zà-ÿ]/g
const capitals = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD]+/g

export function kebabCase (str:string):string {
    // replace word starts with space + lower case equivalent for later parsing
    // 1) treat cap + lower as start of new word
    str = str.replace(capitalPlusLower, function (match) {
    // match is one caps followed by one non-cap
        return ' ' + (match[0].toLowerCase() || match[0]) + match[1]
    })
    // 2) treat all remaining capitals as words
    str = str.replace(capitals, function (match) {
    // match is a series of caps
        return ' ' + match.toLowerCase()
    })
    return str
        .trim()
        .split(wordSeparators)
        .join('-')
        .replace(/^-/, '')
        .replace(/-\s*$/, '')
}

export default kebabCase
