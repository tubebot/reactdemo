/* This is a simple step progress component 
*
* (c) Callan Carr
*/
class StepProgress extends React.Component {
  
  /* Constructor
  */
  constructor(props) {
    super(props);
    if (!this.props.default && this.props.default != 0) {
      throw "Error - you have not specified a default"
    }
    this.state = {
      nodes: [],
      current_node: this.props.default
    }
  }
  
  /* Component Mounted
  */
  componentDidMount() {
    this.set_nodes(this.props.nodes, this.props.default)
  }
  
  /* Component Updated
  */
  componentDidUpdate() {
    console.log("# component updated #")
  }
  
  /* Set Node */
  set_node(i) {
    this.set_nodes(this.props.nodes, i)
  }
  
  /* Set nodes & validate
  */
  set_nodes(n, current) {
    
    // validate
    if (n.length < 2 || n.length > 5) {
      throw "StepProgressNodeError - You must specify a maximum of 5 and a minimum of 2 nodes"
    }
    else if (current < 0 || current > n.length-1) {
      throw "StepProgressNodeError - You cannot set a current node for this node collection outside the bounds of 0 and "+n.length-1
    }
    
    // process nodes
    var nodes = []
    n.forEach(function (node) {
      var active = (n.indexOf(node) <= current)
      nodes.push({
        label: node,
        active: active
      })
    }.bind(this))
    
    // update state
    this.setState({
      current_node: current,
      nodes: nodes
    })
  }
  
  /* Render Nodes */
  render_nodes() {
    return  <div className="node-collection">
              {this.state.nodes.map(n => (
                <StepProgressNode key={JSON.stringify(n)} data={n} peers={this.state.nodes} parent={this} />
              ))}
            </div>
  }
  
  /* Render 
  */
  render () {
    return  <div>
              {this.render_nodes()}
            </div>
  }
}
