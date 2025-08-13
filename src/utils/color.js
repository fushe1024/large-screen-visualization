// Random color
export const RandomColor = () => {
  return (
    'rgb(' +
    [
      Math.round(Math.random() * 256),
      Math.round(Math.random() * 256),
      Math.round(Math.random() * 256)
    ].join(',') +
    ')'
  )
}
