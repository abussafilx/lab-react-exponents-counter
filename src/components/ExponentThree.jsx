const ExponentThree = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{props.count} *  {props.count} * {props.count} = <span className="total">{props.count**3}</span></p>
  </div>
);

export default ExponentThree;