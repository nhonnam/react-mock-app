import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div className="manage-users-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
