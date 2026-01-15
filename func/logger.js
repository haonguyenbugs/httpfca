const fs = require("fs")

module.exports = (text, type) => {
  const t = String(type || "info").toLowerCase()
  const msg = String(text)

  if (t === "error") {
    process.stderr.write(`[error] ${msg}\n`)
    return
  }

  if (t === "warn") {
    process.stderr.write(`[warn] ${msg}\n`)
    return
  }

  if (t === "info") {
    process.stdout.write(`${msg}\n`)
    return
  }

  process.stdout.write(`[${t}] ${msg}\n`)
}