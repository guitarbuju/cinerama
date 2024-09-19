
import watch from "../assets/watch.png";
import ticket from "../assets/icons8-ticket-48.png";
const Times = () => {
  return (
    <div className="w-full flex justify-center align-middle gap-2">
    {" "}
    <div className="flex justify-center align-middle ">
      <img src={watch} style={{ width: "35px", opacity: 0.8 }} />
      <div className="flex">
        <img src={ticket} className="w-5" />
        <span className="text-white text-xs">10$</span>
      </div>
    </div>
    <div className="flex justify-center align-middle gap-1 mb-2">
      <span className="badge badge-secondary text-xs">15-17</span>
      <span className="badge badge-secondary text-xs">17-19</span>
      <span className="badge badge-secondary text-xs">19-21</span>
      <span className="badge badge-secondary text-xs">21-23</span>
    </div>
      
  </div>
  )
}

export default Times