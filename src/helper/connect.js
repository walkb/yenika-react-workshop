
// getData function that takes a name as an argument, returns a Promise to a json object with the name and team of the person
export default function getData(name_in) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: `${name_in}`, team: 'Web Dev Team'})
                }, 1000);
    });
}