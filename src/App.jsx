import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header'
import Advertise from './component/Advertise'
import Content from './Content'
import './style/global_font.css'

export default function App() {
  return (
    <div>
        <Header />
        <Advertise/>
        <Content/>
    </div>
  )
};
