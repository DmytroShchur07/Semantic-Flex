import './Main.css'
import Aside from '../Aside/Aside'
import Section from '../Section/Section'
function Main() {
  

  return (
    <>
      <div className='main'>
        <Aside></Aside>
        <div className="section_group">
          <Section></Section>
          <Section></Section>
          <Section></Section>
          <Section></Section>
        </div>
      </div>
    </>
  )
}

export default Main