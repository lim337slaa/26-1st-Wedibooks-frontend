import React, { Component } from 'react';
import UserNav from '../../components/userNav/userNav';
import InputData from './InputData';
import './SignUp.scss';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      inputList: [],
      id: '',
      password: '',
      pwCheck: '',
      email: '',
      userName: '',
      birth: '',
      gender: '',
    };
  }

  goToMain = e => {
    const { id, password, userName, email, birth, gender } = this.state;
    fetch('http://10.58.5.138:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: userName,
        password: password,
        email: email,
        yearOfBirth: birth,
        gender: gender,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  componentDidMount() {
    fetch('./data/inputList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          inputList: data,
        });
      });
  }

  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  pushMan = () => {
    this.setState({
      gender: '1',
    });
  };

  pushWoman = () => {
    this.setState({
      gender: '2',
    });
  };

  passwordCheck = () => {
    return this.state.password === this.state.pwCheck;
  };

  render() {
    const { inputList, pwCheck, password } = this.state;
    const passwordConfirmed = pwCheck === password;

    return (
      <div className="totalContainer">
        <UserNav />
        <div className="signUpBody">
          <section className="signUpSection">
            {inputList.map(inputList => {
              return (
                <InputData
                  key={inputList.id}
                  name={inputList.name}
                  passwordConfirmed={passwordConfirmed}
                  passwordCheck={this.passwordCheck}
                  inputType={inputList.inputType}
                  placeholder={inputList.placeholder}
                  maxlength={inputList.maxLength}
                  errormessage={inputList.errormessage}
                  handleInputs={this.handleInputs}
                />
              );
            })}
            <p className="choosePtag">선택 입력</p>
            <div className="birthYearSex">
              <input
                className="inputBirthYear"
                type="text"
                name="birth"
                placeholder="출생년도"
                onChange={this.handleInputs}
              />
              <span className="MenWomen">
                <button onClick={this.pushMan} className="buttonMaleFemale">
                  남
                </button>
                <button onClick={this.pushWoman} className="buttonMaleFemale">
                  여
                </button>
              </span>
            </div>
            <button onClick={this.goToMain} className="signInbutton">
              회원 가입 완료
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUp;
