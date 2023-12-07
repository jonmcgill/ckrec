export function cssClasses(obj: Record<string, boolean | undefined | null>) {
  return Object.keys(obj).reduce((str, k) => {
    if (obj[k]) str += `${k} `
    return str
  }, '').replace(/ $/, '')
}

export function isDateBetween(start: string, end: string) {
  const n = Date.now()
  return n > new Date(start).getTime() && n < new Date(end).getTime()
}

export function runOnTimeout<T>(delay: number, fn: (t?: T) => void) {
  let timer = 0
  function run(t?: T) {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      if (timer) {
        window.clearTimeout(timer) // (just to be safe)
        fn(t)
      }
    }, delay)
  }
  return run
}
