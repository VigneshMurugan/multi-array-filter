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