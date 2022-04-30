const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {
    test('Requerimiento 1: Create an User object', () => {
        const user = new User(1,"iamDaniHdz","Daniel","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("iamDaniHdz")
        expect(user.name).toBe("Daniel")
        expect(user.bio).toBe("Bio")
    });
    test('Requerimiento 2: Add Date type', () => {
        const user = new User(1,"iamDaniHdz","Daniel","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("iamDaniHdz")
        expect(user.name).toBe("Daniel")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined
        expect(user.lastUpdated).not.toBeUndefined
    });
    test('Requerimiento 3: Add getters', () => {
        const user = new User(1,"iamDaniHdz","Daniel","Bio")
        expect(user.getUsername).toBe("iamDaniHdz")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined
        expect(user.getLastUpdated).not.toBeUndefined
    })
    test('Requerimiento 4: Add setters', () => {
        const user = new User(1, "iamDaniHdz", "Daniel", "Bio")
        user.setUsername = "daniHDZ"
        expect(user.username).toBe("daniHDZ")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    })    
})