import "../components/style/login.css"
import Car from '../components/assets/bg.jpg'
import Tab from '../components/maintab.js'


export default function AdminDashBorad() {

    return (
      <div class="imgb">
      <img class="carimage" src={Car} />
      <div class="text-block">
         <h1>The Car World</h1>
     </div>

       <div className="tab">
       <Tab/>
       </div>

      </div>
    )
}
