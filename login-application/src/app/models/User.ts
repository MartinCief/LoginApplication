export interface User {
  email : string,
  password : string
}

export interface Register extends User {
  firstName : string,
  lastName : string,
  email: string,
  password: string,
  repassword:string
}
