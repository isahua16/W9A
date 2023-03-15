let user_age = 17;
let is_subscribed = false;

if (user_age >= 18 && is_subscribed === true) {
    console.log("User is at least 18 years old and is subscribed");
} else if (user_age >= 18 && is_subscribed === false) {
    console.log("User is at least 18 years old and is not subscribed");
} else if (user_age < 18 && is_subscribed ===true) {
    console.log("User is younger than 18 and is subscribed");
} else if (user_age < 18 && is_subscribed === false){
    console.log("User is younger than 18 and is not subscribed");
}

