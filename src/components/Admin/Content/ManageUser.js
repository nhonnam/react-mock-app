import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModelViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUsers, setListUsers] = useState([]);
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    // if (res.EC === 0) {
    //     setListUsers(res.DT)
    // }
    if (res) setListUsers(res);
  };

  useEffect(() => {
    fetchListUsers();
  }, []);

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataUpdate(user);
    console.log(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };
  return (
    <div className="manage-users-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUpdate={dataUpdate}
        />
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataUpdate}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
