export interface User {
  username : string,
  password : string
}

export interface Register extends User {
  firstName : string,
  lastName : string,
}


