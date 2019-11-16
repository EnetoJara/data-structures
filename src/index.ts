import { List } from "./list/list";
import { Stack } from "./stack/stack";

function isPalindrome(param: string) {
    const s = new Stack();
    for (let i = 0; i < param.length; ++i) {
        s.push(param[i]);
    }
    let rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (param === rword) {
        return true;
    } else {
        return false;
    }
}

let word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}
word = "racecar";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

export { List, Stack };
