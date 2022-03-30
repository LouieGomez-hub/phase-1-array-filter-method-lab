const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string) {
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(word => word.startsWith(string))
    return result
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(driver, string) {
    let result = driver.filter(function(driver){
        return driver.name === string
    })
    return result
}