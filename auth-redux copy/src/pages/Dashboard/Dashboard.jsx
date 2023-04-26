import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Hello! {user.name}</h1>
      <h3>your email adress is... {user.email}</h3>
    </div>
  )
}

export default Dashboard