export const initials = name =>
  name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

export const getColor = (str) => {
  const colors = ['#e8ff47', '#47ffd4', '#ff6b6b', '#a78bfa', '#fb923c', '#38bdf8']
  let h = 0
  for (let c of str) h = (h * 31 + c.charCodeAt(0)) % colors.length
  return colors[h]
}
