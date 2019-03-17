const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name:'Sam', age: 4}; //sam1 과 sam2의 프로퍼티는 같으나 둘이 서로 다른객체이다

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    }, //classification 프로퍼티는 그 자체가 객체이다
};
sam3.classification.family;// "Felidae"
sam3["classification"].family;// "Felidae"
sam3.classification["family"];// "Felidae"
sam3["classification"]["family"];// "Felidae"

sam3.speak = function() {
    return "Meow!"; }; 
sam3.speak(); //"Meow!"" 함수호출

delete sam3.speak; // speak 함수 제거




