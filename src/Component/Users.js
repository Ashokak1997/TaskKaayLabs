import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Users = () => {
    const [data, setData] = useState([])

  const userData = useSelector((state) => state.users.users.users)
  
  useEffect(() => {
      setData(userData)
  }, [userData])

  const filterBySearch = (event) => {
    console.log(event.target.value)
    const query = event.target.value;
    var updatedList = [...data];
    updatedList = data.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    setData(updatedList);
    if(event.target.value == ""){
        setData(userData)
    }
  };

    return (
        <div className="App mx-4 mt-2">
            <h3>Task</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={filterBySearch} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">First Brewed</th>
                        <th scope="col">Contributed_by</th>
                        <th scope="col">Attenuation Level</th>
                        <th scope="col">target_fg</th>
                    </tr>
                </thead>
                <tbody>
                     {data?.length > 0 && data?.map((item, index) => {
                        console.log(item)
                        return (
                            <tr key={index}>
                                <td scope="row">{item.name}</td>
                                <td>{item.first_brewed}</td>
                                <td>{item.contributed_by}</td>
                                <td>{item.attenuation_level}</td>
                                <td>{item.target_fg}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Users