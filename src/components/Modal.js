import Button from 'react-bootstrap/Button';
const Modal = (props) => {
    if(!props.open) {
      return null;}
    return (
        props.for?
      
        <div style={{border:"2px",display:"inline-block",marginLeft:"10px"}} >
          {
              props.children
          }  
                                 
        </div>
        :
        <div className="fixed top-0 left-0 z-10 center min-w-full min-h-full bg-slate-600/50 flex justify-center items-center">
      <div className=" bg-white rounded-md w-6/12">
        {/* Modal Header */}
        <div className="p-2 border-b border-cyan-800">
          <h1 className="text-xl">{props.title}</h1>
        </div>
        
        {/* Modal Body */}
        <div className="p-2">
          {
            props.children
          }
        </div>
        
        {/* Modal Footer */}
        {
          props.showFooter ? (
            <div className="p-2 border-t border-cyan-800">
              <Button  style={{color:"black"}} onClick={props.onClose}>Close</Button>
            </div>
          ) : null
        }
      </div>
    </div>
    )
}
export default Modal;