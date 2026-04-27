import { userNameCheck } from "../testing";
// Unit testing 
test('Testing username', () => { 
    expect(userNameCheck("")).toBe("guest");
    expect(userNameCheck("subh")).toBe("subh");
})