const ApiData = [];

const urlEndpoint = "https://iws.itcn.dk/techcollege/schedules?departmentCode=smed";
//** vores url urlEndpoint */
fetch(urlEndpoint)
  /** return response if urlEndpoint is resolved */
  .then(response => {
    // returns response in json format
    return response.json();
  })
  .then(data => {
    //** console.log the result */
    console.log(data);
    /** push to ApiData */
    ApiData.push(...data.value);
  })

  .catch(error => {
    /** throw an error if the promise is not resolved */
    console.error(error);
  })
  /** run a function if everything is resolwed */
  .finally(() => {
    // * run the function showmehej
    //console.log("ApiData ", ApiData.filter((a) => a.Team !=="gel080222"));
  });
