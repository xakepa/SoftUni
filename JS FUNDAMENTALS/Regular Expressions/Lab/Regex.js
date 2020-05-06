let regex = /(?<phoneNumber>\+359\d{9})/g;
let pattern = /Lorem (\w+)/g;

let someText = 'string including numbers as +359887040688 and my old number it was +359877046608 and my new = +359876919356, repeat +359877046608';
let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let result;

while ((result = regex.exec(someText)) != null) {
    console.log(result.groups);
}
