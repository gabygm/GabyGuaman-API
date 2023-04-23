export const getRepoVerificationState = async (id) => {
  const response = await fetch(`${process.env.URL_EXTERNAL_API}/repository`);
  const data = await response.json();
  const state = data.repositories.filter((rep) => {
    return rep.id == id;
  });
  return state[0]?.state;
};
