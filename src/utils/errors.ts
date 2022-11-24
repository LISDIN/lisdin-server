export const areValidStrings = (data: { [key: string]: any }) => {
  for (const k in data)
    if (typeof data[k] !== 'string' || data[k].trim().length === 0)
      throw `${k} must be a non-empty string. Received: ${data[k]}`
}

export const areValidNumbers = (
  data: { [key: string]: any },
  ensurePositive?: boolean,
  ensureNonNegative?: boolean
) => {
  for (const k in data)
    if (
      isNaN(Number(data[k])) ||
      (ensurePositive && Number(data[k]) <= 0) ||
      (ensureNonNegative && Number(data[k]) < 0)
    )
      throw `${k} must be a ${ensurePositive ? 'positive ' : ''}${
        ensureNonNegative ? 'non-negative ' : ''
      }number. Received: ${data[k]}`
}
