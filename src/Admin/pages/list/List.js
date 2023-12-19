import "./list.css"

import DataTableAdmin from "../../components/dataTable/DataTable"
import Sidebar from "../../components/sidebar/Sidebar"
import NavbarAdmin from "../../components/navbarAdmin/NavbarAdmin"
const ListAdmin = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <NavbarAdmin/>
        <DataTableAdmin columns={columns}/>
      </div>
    </div>
  )
}

export default ListAdmin