import { useEffect } from "react"

// async effect
export function useAsyncEffect (effect: (isMounted: () => boolean) => unknown | Promise<unknown>, input?: any[], delay?:number): void
// eslint-disable-next-line no-redeclare
export function useAsyncEffect<V>(effect: (isMounted: () => boolean) => V | Promise<V>, destroy?: (result?: V) => void, inputs?: any[]): void
// eslint-disable-next-line no-redeclare
export function useAsyncEffect (effect: any, destroy?: any, inputs?: any): void {
  const hasDestroy = typeof destroy === 'function'

  useEffect(function () {
    let mounted = true
    let result: any
    const maybePromise = effect(function () {
      return mounted
    })
    Promise.resolve(maybePromise).then(function (value) {
      result = value
    })

    return function () {
      mounted = false
      if (hasDestroy) {
        destroy(result)
      }
    }
  }, hasDestroy ? inputs : destroy)
}