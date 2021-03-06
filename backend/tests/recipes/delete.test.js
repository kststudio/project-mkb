/* 
  # create recipe test
  1. should update recipe successfully
*/

const { setupDB, request } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
setupDB("recipe-test");

describe("Update recipe test", () => {
  let testUid = "";
  beforeAll(async () => {
    testUid = await signup();
  });
  afterAll(() => deleteUser(testUid));

  const create = async (recipe, token) => {
    return await request
      .post("/recipes/add")
      .send(recipe)
      .set("Authorization", "Bearer " + token);
  };

  const deleteRecipe = async (id, token) => {
    return await request
      .delete(`/recipes/delete/${id}`)
      .set("Authorization", "Bearer " + token);
  };

  const getRecipe = async (id, token) => {
    return await request
      .get(`/recipes/get/${id}`)
      .set("Authorization", "Bearer " + token);
  };

  test("Should delete recipe successfully", async done => {
    const token = await getToken();
    const resCreate = await create(
      {
        title: "The Best Shrimp Alfredo",
        ingredients: ["shrimp", "fettuccine", "soy sauce"],
        directions: ["prepare ingredients", "cook", "eat", "clean"],
        prepTime: 10,
        cookTime: 15,
        servingSize: 3,
        category: "entry",
        cuisine: "italy",
        difficulty: 2,
        mainImage:
          "https://firebasestorage.googleapis.com/v0/b/project-mkb.appspot.com/o/shrimp-alfredo2.jpg?alt=media&token=d202d3e6-9d73-41ed-a4c3-1490e455998e",
        tags: ["italy", "shrimp", "creamy"]
      },
      token
    );

    const resDelete = await deleteRecipe(resCreate.body._id, token);
    if (resDelete.error) {
      console.error(resDelete.error);
    }

    const resGet = await getRecipe(resCreate.body._id, token);
    const recipe = resGet.body;

    expect(recipe).toBe(null);

    done();
  });
});
