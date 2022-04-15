export const personFilter = {
  filter: (persons, filterData) => {
    let array = [];
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }
    if (isNumber(filterData)) {
      persons.map((person) => {
        person.policyNumbers.filter((policy) => {
          if (String(policy.name).startsWith(filterData)) {
            array.push(person);
          }
        });
      });
    } else {
      array = persons.filter((person) => {
        return person.name.toLowerCase().startsWith(filterData.toLowerCase());
      });
    }
    let uniqueArray = array.filter(function (item, pos) {
      return array.indexOf(item) === pos;
    });
    return uniqueArray;
  },
};
