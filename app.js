//data can be search with name or mobile number or blood group
// if data searchd by name: output will be donor details with donation history
// if data searchd by mobile : output will be donor details with donation history
//if  data searchd be blood group : output will show avaiable blood donors and upcoming blood donors
// if searched result not match All blood donors will be show in table

// logic:
//blood donors will be available after 120 days of his last blood donation date
// blood donor status will be upcoming blood donor  when only 30 days or less than 30 days remain from 120 days of his last blood donation date.
// for more precise search query data key and searched input need to be lowercase to match easily
const search = prompt(" Search donner by bold group");
// filter each data form the bioBlobDonner array fo object
const result = bioBlodDonner.filter(
  (data) =>
    data.address === search ||
    data.lastDonad === search ||
    data.bloodGroup === search
);
// final date get variable
const finalResult = [];
// get date
result.forEach((item, index) => {
  finalResult.push(item);
});

// call the date console table
console.table(finalResult);
