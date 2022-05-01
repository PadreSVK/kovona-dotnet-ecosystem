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

function chooseAvatar(avatars, choosedAvatar) {
    return avatars[choosedAvatar]
}

const test = chooseAvatar(avatars, "asdas")
