const request= require("supertest");
const app=require("../src/index")
const {sequelize, User}=require("../src/models");

beforeAll(async ()=>{
    await sequelize.sync({force:true});
});

afterAll(async()=>{
    await sequelize.close();
});

describe("user API endpoint", ()=>{
test("GET /api/user should return empty array initially", async ()=>{
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
});

test("POST /api/users should add a user", async ()=>{
    // const newUser ={name: "Suraj das", email: "surajdas@gamil.com"};
    const newUser = { name: "John Doe", email: "john@example.com" };
    const res=await request(app).post("/api/users").send(newUser);
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(newUser.name);
    expect(res.body.email).toBe(newUser.email);

    const users = await request(app).get("/api/users");
    expect(users.body.length).toBe(1);
    expect(users.body[0]).toMatchObject(newUser);
});

})