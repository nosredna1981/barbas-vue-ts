import { Person } from "../domain/Person";
import { addPerson } from "../infra/person.repository";

export const personService = {
    add,
};

function add(person: Person) {
    person.document = !person.document ? "" : person.document;
    person.gender = person.gender ?? "";
    person.photo = person.photo ?? "https://picsum.photos/100";

    addPerson(person)
        .then(res => {
            console.log("Adicionado: ", res);
            alert("Adicionado com sucesso!");
        })
        .catch(error => {
            console.error("Error: ", error);
            alert("Error ao adicionar o usuário");
        });
}