import React from "react";
import ReactDOM from "react-dom";

const FormField = props => {
  console.log(props);
  return (
    <div className="field">
      <label className="label">{props.form.labelInput}</label>
      <div className="control">
        <input
          type={props.form.inputType}
          className="input"
          placeholder={props.form.placeholder}
        />
      </div>
    </div>
  );
};

const Name = {
  labelInput: "Name",
  inputType: "text",
  placeholder: "e.g. Alex Smith"
};

const Email = {
  labelInput: "Email",
  inputType: "email",
  placeholder: "e.g. alex.smith@gmail.com"
};

const NavBar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger burger"
          dataTarget="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <CoolButton isSmall isDanger className="is-rounded my-class">
                Login
              </CoolButton>

              <CoolButton isSmall isSuccess>
                Signup
              </CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const style = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

const CoolButton = props => {
  let btnClass = "button ";
  //console.log(props);

  Object.keys(props).forEach(el => {
    if (el === "className") {
      btnClass += props.className + " ";
    } else if (el !== "children") {
      btnClass += " " + style[el] + " ";
    }
  });
  return <button className={btnClass}>{props.children}</button>;
};

// const Button1 = {
//   classes: "button is-rounded my-class is-danger is-small",
//   btnInput: "Button 1"
// };

// const Button2 = {
//   classes: "button is-small is-success",
//   btnInput: "Button 2"
// };

const Signup = () => {
  return (
    <div>
      <NavBar />
      <FormField form={Name} />
      <FormField form={Email} />
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
    </div>
  );
};

const App = props => {
  return <Signup />;
};

export default App;
