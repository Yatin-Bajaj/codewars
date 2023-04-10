/**
 * @link (https://www.codewars.com/kata/53c7da8baf72924af8000405/train/javascript)
 */

function construct(Class /*, args */) {
    var obj = Object.create(Class.prototype);
    Class.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
}


/**
 * Another way to do the same
 */

function construct(Class) {
    let [func, ...args] = arguments
    let object = new Class(...args)
    return object;
  } 