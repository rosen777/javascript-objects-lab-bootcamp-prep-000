var recipes = {
  prop: 1
}

var newRecipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, {[key]: value }) 
}

newRecipes = updateObjectWithKeyAndValue(recipes, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

var newObj = Object.assign({}, recipes)
  
function deleteFromObjectByKey(obj, key) {
    
    delete newObj.key
    
    return newObj

}
console.log(newObj)
deleteFromObjectByKey(newObj, 'prop')
console.log(newObj)

function destructivelyDeleteFromObjectByKey(obj, key) {
    
    delete obj.key
    
    return obj
    
}

destructivelyDeleteFromObjectByKey(recipes, 'prop')

  
  

