const UserView = require('../../app/views/UserView');

describe("UserView unit test", () => {
    test("Requerimiento 1: Return an error object when trying to create a new user with a null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });
    test("Requerimiento 2: Return an error object when try to create a new user with a playload with invalid properties", () => {
        const payload = {username: null, name: 12, id: 'id'};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    test("Requerimiento 3: Return an error object when try to create a new user with a playload with some invalid properties", () => {
        const payload = {username: 'iamDaniHdz', name: 'Daniel', id: 'id'};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });
    test("Requerimiento 4: Verify that user is created", () => {
        const payload = {username: 'iamDaniHdz', name: 'Daniel', id: 1}
        const result = UserView.createUser(payload);
        expect(result.name).toBe('Daniel');
        expect(result.username).toBe('iamDaniHdz');
        expect(result.id).toBe(1);
        expect(result.dateCreated instanceof Date).toBe(true);
        expect(result.lastUpdated instanceof Date).toBe(true);
    });
});