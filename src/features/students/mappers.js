/* eslint-disable prefer-const */
const mapOneStudentToStore = param => {
  // TODO need implement
  // firstName --> firstName
  // lastName --> secondName
  // email --> email
  const mappingPattern = {
    firstname: 'firstName',
    lastname: 'secondName',
    email: 'email',
  };
  let mappedObj = {};
  for (let key in param) {
    if (Object.keys(mappingPattern).includes(key)) {
      mappedObj[mappingPattern[key]] = param[key];
    }
  }
  return mappedObj;
};

export function mapStudentsToStore(params) {
  return params.map(mapOneStudentToStore);
}
