const api = (() => {
  const getDataEmployees = async (currentPage) => {
    const response = await fetch(
      `https://reqres.in/api/users?page=${currentPage}`,
    );
    const responseJson = await response.json();
    return responseJson;
  };

  return {
    getDataEmployees,
  };
})();

export default api;
