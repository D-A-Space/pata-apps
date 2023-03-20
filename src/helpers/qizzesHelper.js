const getJSON = () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const team = params.get("team");
  let data;
  try {
    data = require(`../gamesJSON/${category.toLowerCase()}/${team.toLowerCase()}`);
    return data;
  } catch (error) {
    console.log(error);

    // window.location.href = "/";
  }
};

export { getJSON };
