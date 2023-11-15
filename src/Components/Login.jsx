import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
         <section className="loginSec">
        <div className="container">
          <div className="mx-auto my-4" style={{maxWidth:"300px",}}>
            <form action="" className="row g-3" onSubmit={this.props.submitHandle}>
              <div className="col-12">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" onChange={this.props.changeHandle} name="email" value={this.props.formState.email}/>
              </div>
              <div className="col-12">
                <label htmlFor="passwordInput" className="form-label">
                  password
                </label>
                <input type="password" className="form-control" name="password" onChange={this.props.changeHandle} value={this.props.formState.password} />
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary d-block w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </>
    )
  }
}
