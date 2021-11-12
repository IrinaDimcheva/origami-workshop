const getOrigami = async (length) => {
  const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
  return await promise.json();
}

export default getOrigami;