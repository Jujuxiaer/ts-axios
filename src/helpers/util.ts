const toString = Object.prototype.toString

export function isDate(val: any):val is Date {
  return toString.call(val)==='[Object Date]'

}
export function isObject(val :any):val is Object {
  // val为null，typeof val === 'object'也成立
  // return typeof val === 'object'
  return val!==null && typeof val === 'object'
}
