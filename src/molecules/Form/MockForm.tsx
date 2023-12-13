const MockForm = () => (
  <form>
    <div className="form-row">
      <div className="form-input">
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text" placeholder="Enter your First Name" />
      </div>
      <div className="form-input">
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" type="text" placeholder="Enter your Last Name" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Enter your Email Address" />
      </div>
      <div className="form-input">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" placeholder="Enter your Phone Number" />
      </div>
    </div>
    <div className="form-input">
      <label htmlFor="industry">Select Industry</label>
      <select id="industry" name="industry">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
      </select>
    </div>
    <div className="form-input">
      <label htmlFor="phone">Phone Number</label>
      <input id="phone" type="text" placeholder="Phone Number" />
    </div>
    <div className="form-input">
      <label htmlFor="help">How can the Aspire team help?</label>
      <textarea id="help" placeholder="Enter a description..."></textarea>
    </div>
    <div className="form-input">
      <input id="slider" type="range"></input>
    </div>
    <div className="form-input form-check">
      <input id="sample-checkbox" type="checkbox" />
      <label htmlFor="sample-checkbox">Checkbox</label>
    </div>
    <div className="form-input form-check">
      <input id="sample-toggle" type="checkbox" role="switch" />
      <label htmlFor="sample-toggle">Switch</label>
    </div>
    <div className="form-input form-check">
      <input id="sample-radio" name="sample" type="radio" />
      <label htmlFor="sample-radio">Radio</label>
    </div>
    <div className="form-input form-check">
      <input id="sample-radio-2" name="sample" type="radio" />
      <label htmlFor="sample-radio-2">Radio 2</label>
    </div>
    <div className="form-input form-check">
      <input id="sample-radio-3" name="sample" type="radio" />
      <label htmlFor="sample-radio-3">Radio 3</label>
    </div>
    <div className="form-input">
      <button type="button">Submit</button>
    </div>
  </form>
);

export default MockForm;
