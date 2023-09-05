import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Utils/AppContext";

function TaskModal() {
  const { addTask, getModal, setModal } = useContext(AppContext)
  const [ newValue, setValue ] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTask(newValue)
    setModal(false)
  }
  
  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onCancel = () => {
    setModal(false)
  }

  return (
    getModal && (
      <form 
        onSubmit={onSubmit}
        className="

        ">
        <label className="

          "        
        >Add the new task</label>
        <textarea name="" id="" cols="30" rows="5" 
          placeholder="Type the new task here"
          onChange={onChange}
          className="

          "
        />
        <div className="

        ">
          <button type="summit">Add</button>
          <button
            onCancel={onCancel}
          >Cancel</button>
        </div>
      </form>
    )
  )
}

export { TaskModal }