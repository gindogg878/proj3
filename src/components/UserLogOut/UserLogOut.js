import { logOut } from "../../utilities/users-service";
import styles from "./UserLogOut.module.css";

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className={styles.logoutDiv}>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
