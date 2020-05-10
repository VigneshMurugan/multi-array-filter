/**
 * {array} input array which should be filtered against the predicate
 * {predicates} array of predicates which should be run against the given array
 * {shouldPassAll} boolean - optional - true(default) : item should pass all given predicates; 
 *                 false - should pass at least one of the predicates
 */
export default (array, predicates, shouldPassAll = true) => {
    if(!Array.isArray(array))
        throw new Error('Input Array is not valid')
    
    if(!predicates || !Array.isArray(predicates))
        throw new Error('Predicate must be an Array')

    if(shouldPassAll) {
        return array.filter(item => predicates.every(predicate => predicate(item)))
    }
     return array.filter(item => predicates.some(predicate => predicate(item)))
}