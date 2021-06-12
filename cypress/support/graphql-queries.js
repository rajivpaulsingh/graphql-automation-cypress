export const continentName = `
query {
    continent(code: "EU") {
      code,
      name,
      countries {
        code,
        name,
        native
      }
    }
  }
  `

export const quertTodo = `
query todo {
    id,
    description
 }
 `