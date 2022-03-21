import React, { Component, Fragment } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './App.css'

class App extends Component {
  getSquares = () => {
    return (
      <Fragment>
        <div className='squares'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='single-square'></div>
      </Fragment>

    )
  }
  getFLHTitle = () => {
    return (
      <Fragment>
        <div className='flh-title'>
          {";F.¬"}<br></br>
          {"L•h‘"}
        </div>
      </Fragment>
    )
  }
  getCroissant = () => {
    return (
      <div className='cc-main'>
        <div className='croissant-container'>
          <div>0</div>
          <div>3</div>
          <div>des <br></br>
            ign
          </div>
          <div className='single-square'></div>

        </div>
        <hr className='hr-two'></hr>
      </div>
    )
  }
  getFakeleghorseWithLine = () => {
    return (
      <div className='flhwithline'><hr className='hr-three'></hr><label>{"esrohgelekaf"}</label></div>
    )
  }
  getFirstRowElements = () => {
    return (
      <Row>
        <Col mg="4" lg="4">
          {this.getSquares()}
          {this.getCroissant()}
        </Col>
        <Col mg="4" lg="4">
          <hr className='hr-one'></hr>
          {this.getFakeleghorseWithLine()}
        </Col>
        <Col mg="4" lg="4">
          {this.getFLHTitle()}
        </Col>
      </Row>
    )
  }
  getSecondRowElements = () => {
    return (
      <Row>
        <Col mg="4" lg="4" className='wrk'>
          {"::  ::  ::"}
          <div>
            <span>wrk</span>
          </div>
        </Col>
        <Col mg="4" lg="4">
          <label className='plusplus'>{"++"}</label>
          <hr className='hr-four'></hr>
          <p className='middle-content'>
            {"fakeleghorse is a dynamic design provider which delivers solution, design, service and stuff and not belong to any specific fields and also includes arts, music, movies, books, cats, coffee and more other stuff"}
          </p>
        </Col>
        <Col mg="4" lg="4">
          <p>
            {`fakeleghorse of poikkaal kuthirai aattam (poi - fake, kaal - leg, Kuthirai – horse) or puravi aattam (tamil:பொய்க்கால் குதிரை ஆட்டம்) is one of the folk dances of tamil nadu. 
           it is a type of dance performed with a fake horse having a gap inside so that a person can fit into it to perform the dance.`}
          </p>
        </Col>
      </Row>
    )
  }
  getThirdRowElements = () => {
    return (
      <Row>
        <Col mg="2" lg="2" className='dash-kwasa'>
          <div className='dash-colon'>
            {"_ _ _ _ -. //::"}
          </div>
          <div className='kwasa'>
            {"[kʁwasɑ̃]"}
          </div>
        </Col>
        <Col mg="2" lg="2" className='brd'>
          {"brd"}</Col>
        <Col mg="8" lg="8" className='hr-centre'>
          <hr className='hr-five'></hr></Col>
      </Row>
    )
  }
  getFouthRowElements = () => {
    return (
      <Row className='forth-row-container'>
        <Col>{"¡™£∫ç˜µ∂∆©ß˚¥†∑¨¥†´ˆ¨∑´"}</Col>
        <Col>
          <h6>
            mail
          </h6>
          <label>fakeleghorse@gmail.com</label>
        </Col>
        <Col>
          <h6>
            twitter
          </h6>
          <label>https://twitter.com/fakeleghorse</label>
        </Col>
        <Col>
          <h6>
            pappater
          </h6>
          <label>https://tumblr.com/pappater</label>
        </Col>
        <Col>
          <h6>
            map
          </h6>
          <label>map url</label>
        </Col>
      </Row>

    )
  }
 
  getFifthRowElements = () => {
    return (
      <div style={{ display: 'flex' }} className="marquee-content mb-4 mt-1" >
        <marquee width="60%" direction="left">
          {`design & solutions • ui/ux • music • writing • abstract stuff • and more`}
        </marquee>
        <label>{"| from fakeleghorse ||||||||||||||||||||"}</label>
      </div>

    )
  }
  footerSvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L0,160L36.9,160L36.9,192L73.8,192L73.8,192L110.8,192L110.8,32L147.7,32L147.7,96L184.6,96L184.6,96L221.5,96L221.5,320L258.5,320L258.5,96L295.4,96L295.4,288L332.3,288L332.3,224L369.2,224L369.2,0L406.2,0L406.2,320L443.1,320L443.1,128L480,128L480,96L516.9,96L516.9,32L553.8,32L553.8,0L590.8,0L590.8,288L627.7,288L627.7,0L664.6,0L664.6,160L701.5,160L701.5,96L738.5,96L738.5,32L775.4,32L775.4,224L812.3,224L812.3,160L849.2,160L849.2,256L886.2,256L886.2,96L923.1,96L923.1,288L960,288L960,64L996.9,64L996.9,256L1033.8,256L1033.8,320L1070.8,320L1070.8,96L1107.7,96L1107.7,64L1144.6,64L1144.6,160L1181.5,160L1181.5,224L1218.5,224L1218.5,160L1255.4,160L1255.4,288L1292.3,288L1292.3,128L1329.2,128L1329.2,64L1366.2,64L1366.2,288L1403.1,288L1403.1,64L1440,64L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>)
  }
  getSixthRowElements = ()=> {
    return (
      <div className='projects-container'>
        <Row>
          <Col>
          <div className='each-list'>
          <div className='count'>1</div>
          <div className='content'>asdf</div>
          </div></Col>
        </Row>
      </div>
    )
  }
  render() {
    return (
      <div className='app-container'>
        {this.getFirstRowElements()}
        {this.getSecondRowElements()}
        {this.getThirdRowElements()}
        {this.getFifthRowElements()}
        {/* {this.getSixthRowElements()} */}
        {this.getFouthRowElements()}
        {/* {this.footerSvg()} */}
      </div>
    )
  }
}
export default App;