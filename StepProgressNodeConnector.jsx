/* This is a simple step progress component 
*/
class StepProgressNodeConnector extends React.Component {
  
  /* Constructor
  */
  constructor(props) {
    super(props);
  }
  
  /* Component Mounted
  */
  componentDidMount() {
  }
  
  /* Render 
  */
  render () {
    var connector
    if (this.props.active) {
      connector = <div className="node-connector animate-line"></div> 
    }
    else {
      connector = <div className="node-connector"></div> 
    }
    return connector
  }
}
