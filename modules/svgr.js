async function svgr(code, options = {}) {
  if (typeof options.tabWidth !== 'undefined') {
    options.tabWidth = Number(options.tabWidth)
  }

  if (typeof options.precision !== 'undefined') {
    options.precision = Number(options.precision)
  }

  const res = await fetch('/api/svgr', {
    headers: {
      'content-type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({ code, options }),
  })
  const json = await res.json()
  if (json.error) throw new Error(json.error)
  return json.output
}

export default svgr
