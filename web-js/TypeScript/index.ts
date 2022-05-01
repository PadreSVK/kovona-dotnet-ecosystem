interface User {
    name: string;
    id: number;
}

let myString: string = "asdasd";
myString = 55;

if (myString == "") {

}


const user = {
    name: "Hayes",
    id: 44
};

const user2: User = {
    name: "Hayes",
    id: 44
};

type UserFromJson = typeof user

const userFromInterface: UserFromJson = {
    name: "Hayes",
    id: 44
};


function test(myArgument: { name: string, id: number }): string {
    return "Hi from function"
}

test(user)
test(userFromInterface)
test({ id: 444, name: "asdas" })


class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number = 55) {
        this.name = name;
        this.id = id;
    }
}



// const userAccount = new UserAccount()
const userAccount = new UserAccount("aaa", 99)


// Composing Types

type AvatarType = "admin" | "manager" | "tester" | "user"

const avatars = {
    admin: {
        name: "Fero",
        age: 5
    },
    manager: {
        name: "Jozo",
        age: 5
    },
    tester: {
        name: "Kevin",
        age: 5
    },
    user: {
        name: "Patrik",
        age: 5
    },
}


type Avatars = typeof avatars
type Avatar = typeof avatars.admin

function chooseAvatar(avatars: Avatars, choosedAvatar: AvatarType): Avatar {
    return avatars[choosedAvatar]
}

const choosedAvatar = chooseAvatar(avatars, "user")


type ComplexComposedType = { name: string } | { bigName: string, age?: number }


const myVar1: ComplexComposedType = {
    name: "sad"
}

const myVar2: ComplexComposedType = {
    name: "sad",
    age: 444
}

const myVar3: ComplexComposedType = {
    bigName: "Fero",
    age: 444
}

type WindowStates = "open" | "closed" | "minimized";



type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function compositionTest(myArgument: WindowStates) {

}

const myArg5 : OddNumbersUnderTen = 5; 


compositionTest("minimized")

async function loadModule() {
    return await import("./module");
}





function myFunction({ city, country }: { city: string, country: string }) {

}

myFunction({ country: "asdas", city: "asdasd" })

const myObjj = { address: { street: "asdasd" } };


type orderModel = typeof myObjj;

function createOrder({ address }: orderModel) {
  console.log(address.street)
}


createOrder({ address: { street: "asdasd" } })
