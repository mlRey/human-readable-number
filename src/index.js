
module.exports = function toReadable(number) {
    let str = '';
    if(number == 0){return "zero";}
    if (number >= 100) {
        str += to_word(Math.floor(number / 100)) + "hundred ";
        number -= Math.floor(number / 100) * 100;
    }
    str += to_word(number);

    return str.slice(0, -1);
}

function to_word(num) {
    if (num < 20) {
        return number_name[num];
    } else return number_name[Math.floor(num / 10) * 10] + number_name[num % 10];
}
var number_name = {
    "0": "", "1": "one ", "2": "two ", "3": "three ", "4": "four ", "5": "five ", "6": "six ",
    "7": "seven ", "8": "eight ", "9": "nine ", "10": "ten ", "11": "eleven ", "12": "twelve ",
    "13": "thirteen ", "14": "fourteen ", "15": "fifteen ", "16": "sixteen ", "17": "seventeen ",
    "18": "eighteen ", "19": "nineteen ", "20": "twenty ", "30": "thirty ", "40": "forty ",
    "50": "fifty ", "60": "sixty ", "70": "seventy ", "80": "eighty ", "90": "ninety "
};
