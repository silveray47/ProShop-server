import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    userName:'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    userName:'john',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    userName:'jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users