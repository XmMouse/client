

type isStringOrNumber<T> = T extends string ? number : T

function xiaomeng (name:string, age:number) {
    return 123
}

type getParams<T> = T extends (...arg: infer U)=>any ? U : void


function createPerson(...arg:getParams<typeof xiaomeng>) {

}

createPerson("stirng",12)

interface Person {
    name: string,
    age: number
}

interface Studenty {
    school: string
}

type Student = {[key in (keyof Person)]: }

function getStudenty<T extends Person> (studenty: T):void {

}