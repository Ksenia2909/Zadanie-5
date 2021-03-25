  const characters = [
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 },
  ]

  function pluck(data, fieldName) {
    if (!data || !data.length) {
      return null
    }

    return data.map((item) => item[fieldName])
  }

  console.log(pluck(characters, 'name'))