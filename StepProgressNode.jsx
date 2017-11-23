/* This is a simple step progress component 
*/
class StepProgressNode extends React.Component {
  
  /* Constructor
  */
  constructor(props) {
    super(props);
  }
  
  /* Component Mounted
  */
  componentDidMount() {
    console.log("# node #", this)
  }
  
  /* Node Clicked 
  */
  clicked() {
    var current_node = this.props.parent.state.current_node;
    var index = this.props.peers.indexOf(this.props.data);
    
    console.log("# node clicked #", this)
    
    // allow next node step
    if (index + 1 == current_node || index - 1 == current_node) {
      this.props.parent.set_node(index);
    }
    
    // disallow node step skipping
    else {
      console.log("# you cannot skip a step! #")
    }
  }
  
  /* Render 
  */
  render () {
    
    // node connector
    if (this.props.peers.indexOf(this.props.data) != 0) {
      var connector = <StepProgressNodeConnector active={this.props.data.active} />
    }
    
    // node
    if (this.props.data.active) {
      var node = <div className="node animate-active"></div>  
    }
    else {
      var node = <div className="node"></div>
    }
    
    // return node
    return  <div onClick={this.clicked.bind(this)} className="node-container">
              <div className="node-label">{this.props.data.label || ""}</div>
              {node}
              {connector || <div/>}
            </div>
  }
}
